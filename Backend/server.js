import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import connectDb from './middleware/db.js';
import quizRoutes from './routes/quizRoutes.js'

dotenv.config();

connectDb();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use('/api/quiz', quizRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

