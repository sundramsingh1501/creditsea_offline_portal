import express from 'express';                     
import mongoose from 'mongoose';                  
import cors from 'cors';                           
import eventRoutes from './routes/events';         
import dotenv from 'dotenv';                       
dotenv.config();                                   
const app = express();                             
const PORT = process.env.PORT || 5000;            

app.use(cors());                                  
app.use(express.json());
app.use('/api', eventRoutes);                     

mongoose.connect(process.env.MONGO_URI!)           
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
