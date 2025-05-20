import mongoose from 'mongoose'

const QuizSchema = new mongoose.Schema({
    userId:{type:String, required: true},
    questionId : { type: String , required: true},
    submittedAnswer : { type:String , required: true}
    
},{timestamps:true});

const Quiz = new mongoose.model('Quiz',QuizSchema);

export default Quiz;