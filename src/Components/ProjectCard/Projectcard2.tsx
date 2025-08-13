import style from './Projectcard.module.css';
import play0 from '../../Pictures/play0.png';
import play1 from '../../Pictures/play1.png';
import play2 from '../../Pictures/play2.png';
import play3 from '../../Pictures/play3.png';
import play4 from '../../Pictures/play4.png';
import play5 from '../../Pictures/play5.png'
import Tab from '../TabButton/Button';
import React, { useState } from 'react';
import Close from '../../Pictures/close.png';
import arrow from '../../Pictures/arrows.png';
import arrowL from '../../Pictures/arrowsL.png';






function Projectcard2() {
    const PlayCollection = [
        {
            label: "First Picture",
            img: play0,
        },
        {
            label: "First Picture",
            img: play1,
        },
        {
            label: "Third Picture",
            img: play2,
        },
        {
            label: "Fourth Picture",
            img: play3,
        },
        {
            label: "Fifth Picture",
            img: play4,
        },
        {
            label: "First Picture",
            img: play5,
        },
    ];

    const CollectionSize = (PlayCollection.length - 1);

    const [index, setActiveStep] = React.useState(0)
    const handleNextPicture = () => {
        console.log("index", index)
        console.log("collection size", CollectionSize)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (index === CollectionSize) {
            setActiveStep((prev => prev - (CollectionSize + 1)))

            console.log("index", index)
            console.log("collection size", CollectionSize)
        }
    };

    const [cardClose, setCardClose] = useState(false)
    const handleCloseCard = () => {
        setCardClose(true)

    }
    if (cardClose) return null;


    return (
        <div className={style.OutterContainer}>

            <p className={style.Title}>askUGA <Tab label={<img src={Close} alt='Close button' className={style.CloseContainer} />} onClick={handleCloseCard} /></p>
            <div className={style.InnerContainer}>
                <img src={PlayCollection[index].img} className={style.ProjectPicture} alt="Picture of Project" />
                <button className={style.Arrow} onClick={handleNextPicture}><img src={arrow} alt="next button" className={style.arrow} /></button>
                <button className={style.ArrowL} onClick={handleNextPicture}><img src={arrowL} alt="back button" className={style.arrowL} /></button>
                <p className={style.Text}>Text about Project goes here</p>

            </div>

        </div>

    )
} export default Projectcard2;