import style from './HomeScreen.module.css';
import Tab from '../TabButton/Button';
import {useState} from 'react';


type HomeScreenProps = {
  onPlayClick: () => void;
};

function HomeScreen({ onPlayClick }: HomeScreenProps) {
  return (
    <div className={style.OutterContainer}>
      Trivia
      <div className={style.InnerContainer}>
        <Tab label={<p>Play</p>} onClick={onPlayClick} />
      </div>
    </div>
  );
}

export default HomeScreen;