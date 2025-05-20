import express from 'express';
import { submittedAnswer } from '../controllers/QuizController.js';
const router = express.Router();
  
router.post('/send', submittedAnswer);
  
  
export default router;
  