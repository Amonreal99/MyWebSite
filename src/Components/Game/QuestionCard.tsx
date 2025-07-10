import style from './QuestionCard.module.css';
import Tab from '../TabButton/Button';
import {useState, useEffect } from 'react';
import he from 'he';




function QuestionCard(){
    const [question, setQuestion]=useState("");
    const [answers, setAnswers]=useState <string[]>([]);
    const [score, setScore]=useState(0);
    const[selectAnswer, setSelectAnswer]=useState<string|null>(null);
    const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
    const [questionCount, setQuestionCount]=useState(0)
    const [wrongAnswer, setWrongAnswer]=useState<string|null>(null)


    const handleAnswerClick=(answer:string)=>{
        setSelectAnswer(answer);
        console.log("click");
        if(answer===correctAnswer){
            setScore(prev=>prev+1);
        }
        setQuestionCount(prev=>prev+1);
        
    };

    useEffect(()=>{
        console.log("useefffect triggered");
        if(questionCount<10){
        fetch('/api/trivia')
        
            .then(res=>res.json())
            .then(data=>{
                console.log("got trivia")
                if(data.error){
                    console.log("trivia error:", data.error);
                    return;
                }
                const decodedQuestion=he.decode(data.question);
                const decodedCorrectAnswer=he.decode(data.correct_answer);
                const decodedWrongAnswers=data.incorrect_answers.map((a:string)=>he.decode(a));

                const allAnswers= [decodedCorrectAnswer,...decodedWrongAnswers].sort(()=>Math.random()-0.5);
                setWrongAnswer(decodedWrongAnswers)
                setCorrectAnswer(decodedCorrectAnswer)
                setQuestion(decodedQuestion);
                setAnswers(allAnswers)
            
                }); }
                
                
                
    },[questionCount]);

    return(
        <div className={style.OutterContainer}>
            <p>{question}</p>
            <div className={style.InnerContainer}>
                {answers.map((answer,index)=>(
                <div key={index} className={style.TabContainer} onClick={()=>handleAnswerClick(answer)}>
                    
                    <Tab label={answer} />
                </div>))}
                
        
        <p style={{color:"#1565c0"}}>Score: {score}</p>
            </div>
        </div>
    )
}export default QuestionCard;