import styles from './Project.module.css';
import City from '../../Pictures/city2.jpg';
import NavBar from '../NavBar/NavBar';
import Selfie from '../../Pictures/headshot.JPG';
import Card from '../Card/Card';
import Card2 from '../Card/Card2';
import Card3 from '../Card/Card3';
import Projectcard from '../ProjectCard/Projectcard';
import Projectcard2 from '../ProjectCard/Projectcard2';
import Projectcard3 from '../ProjectCard/Projectcard3';
import React, { useState } from 'react';

function Project() {
  const [cardOpen, setCardOpen] = useState(false);
  const [cardOpen2, setCardOpen2] = useState(false);
  const [cardOpen3, setCardOpen3] = useState(false);

  const handleCardClick = () => {
    setCardOpen(prev => !prev);
  };
  const handleCardClick2 = () => {
    setCardOpen2(prev => !prev);
  };
  const handleCardClick3 = () => {
    setCardOpen3(prev => !prev);
  };

  return (
    <div className={styles.CityContainer} style={{ backgroundImage: `url(${City})` }}>
      <NavBar />
      <div className={styles.Selfie}>
        <img src={Selfie} alt="Selfie" className={styles.HeadShot} />
      </div>

      <div className={styles.CardContainer}>
        
        <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
          <Card />
        </div>
        {cardOpen && <Projectcard />}

        <div onClick={handleCardClick2} style={{ cursor: 'pointer' }}>
          <Card2 />
        </div>
        {cardOpen2 && <Projectcard2 />}

        <div onClick={handleCardClick3} style={{ cursor: 'pointer' }}>
          <Card3 />
        </div>
        {cardOpen3 && <Projectcard3 />}
      </div>
    </div>
  );
}

export default Project;
