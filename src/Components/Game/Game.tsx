import style from './Game.module.css';
import QuestionCard from './QuestionCard';
import NavBar from '../NavBar/NavBar';
import HomeScreen from './HomeScreen';
import { useState } from 'react';




function Game(){
  const [play, SetPlay]=useState(true)
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [correct, setCorrect] = useState("");


  const handlePlayClick=()=>{
    SetPlay(false);
  };
  
  return(
    <div className={style.OutterContainer}>
      <NavBar/>
      {play && (
        <div className={style.StartButton}>
          <HomeScreen onPlayClick={handlePlayClick}/>
        </div>)}
        {!play&&(
      <div className={style.InnerContainer}>
        <p>Trivia</p>
        <QuestionCard/>

      </div> )}
    </div>
  )
}export default Game;