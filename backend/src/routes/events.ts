import express from 'express';
import Event from '../models/Event';              
const router = express.Router();


router.post('/events', async (req, res) => {
  try {
    await Event.insertMany(req.body);            
    res.status(200).send("Events stored");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error storing events");
  }
});


router.get('/analytics', async (req, res) => {
  try {
    const { userId, page } = req.query;
    const filter: any = {};
    if (userId) filter.userId = userId;
    if (page) filter.page = page;

    const result = await Event.aggregate([
      { $match: filter },
      {
        $group: {
          _id: { userId: "$userId", page: "$page" },
          totalVisits: { $sum: 1 },
          totalTime: { $sum: "$duration" }
        }
      }
    ]);

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching analytics");
  }
});

export default router;
