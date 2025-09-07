import style from './QuestionCard.module.css';
import Tab from '../TabButton/Button';
import { useState, useEffect, useRef } from 'react';
import he from 'he';




function QuestionCard() {
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState<string[]>([]);
    const [score, setScore] = useState(0);
    const [selectAnswer, setSelectAnswer] = useState<string | null>(null);
    const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
    const [questionCount, setQuestionCount] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState<string | null>(null);
    const [wrongScore, setWrongScore] = useState(0);
    const [isLoading, setIsLoading] = useState(false);


    const reqIdRef = useRef(0);

    const handleAnswerClick = (answer: string) => {
        if (isLoading || !answers.length) return;
        setSelectAnswer(answer);

        if (!correctAnswer) return;

        if (answer == correctAnswer) {
            setScore(prev => prev + 1);
        }
        else if (wrongAnswer?.includes(answer)) {
            setWrongScore(prev => prev + 1)
        }

        setQuestionCount(prev => prev + 1);



    };


    useEffect(() => {
        console.log("useefffect triggered");
        if (questionCount >= 10) return;
        const controller = new AbortController();
        const thisReqId = ++reqIdRef.current;

        setIsLoading(true);

        //fetch(`/api/trivia?t=${Date.now()}`, { signal: controller.signal })
        fetch("/api/trivia", { signal: controller.signal })

            .then(res => res.json())
            .then(data => {
                if (thisReqId !== reqIdRef.current) return;
                if (data?.error) {
                    console.log("trivia error:", data.error);
                    return;
                }
                const decodedQuestion = he.decode(data.question);
                const decodedCorrectAnswer = he.decode(data.correct_answer);
                const decodedWrongAnswers = data.incorrect_answers.map((a: string) => he.decode(a));


                const allAnswers = [decodedCorrectAnswer, ...decodedWrongAnswers].sort(() => Math.random() - 0.5);
                setWrongAnswer(decodedWrongAnswers)
                setCorrectAnswer(decodedCorrectAnswer)
                setQuestion(decodedQuestion);
                setAnswers(allAnswers)
                setSelectAnswer(null);

            })
            .catch(err => {
                if (err.name !== "AbortError") console.error(err);
            })
            .finally(() => {
                if (thisReqId === reqIdRef.current) setIsLoading(false);
            });

        // abort any in-flight request if a newer one starts/unmount
        return () => controller.abort();



    }, [questionCount]);

    return (
        <div className={style.OutterContainer}>
            <p>{question}</p>
            <div className={style.InnerContainer} aria-busy={isLoading}>
                {answers.map((answer, index) => (
                    <div key={index} className={style.TabContainer} onClick={() => handleAnswerClick(answer)}
                        style={{ pointerEvents: isLoading ? "none" : "auto", opacity: isLoading ? 0.6 : 1 }}>

                        <Tab label={answer} />
                    </div>))}


                <p style={{ color: "#1565c0" }}>Score: {score}   <span style={{ paddingLeft: "50px", color: "red" }}>Wrong Score:{wrongScore}</span></p>
                {isLoading && <p>Loading next question…</p>}
            </div>
        </div>
    )
} export default QuestionCard;