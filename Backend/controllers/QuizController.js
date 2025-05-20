import Quiz from '../models/Quiz.js';

export const submittedAnswer = async(req,res) =>{
    const {userId , questionId , submittedAnswer} = req.body;

    if(!userId || !questionId || !submittedAnswer){
        return res.status(400).json({error:'Fill all the feilds'});
    }
    try{
        const quiz = new Quiz({userId , questionId , submittedAnswer});
        const saved = await quiz.save();
        return res.status(200).json(saved);
    }
    catch(err)
    {
        res.status(500).json({error:'Failed to submit answers'});
    }
}

