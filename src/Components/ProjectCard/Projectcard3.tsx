import style from './Projectcard.module.css';
import BIBLE0 from '../../Pictures/bible0.png';
import BIBLE1 from '../../Pictures/bible1.png';
import BIBLE2 from '../../Pictures/bible2.png';
import BIBLE3 from '../../Pictures/bible3.png';
import BIBLE4 from '../../Pictures/bible4.png';
import Tab from '../TabButton/Button';
import React, { useState } from 'react';
import Close from '../../Pictures/close.png';
import arrow from '../../Pictures/arrows.png';
import arrowL from '../../Pictures/arrowsL.png';



function Projectcard3() {
    const UGACollection = [
        {
            label: "First Picture",
            img: BIBLE0,
        },
        {
            label: "Second Picture",
            img: BIBLE1,
        },
        {
            label: "Third Picture",
            img: BIBLE2,
        },
        {
            label: "Fourth Picture",
            img: BIBLE3,
        },
        {
            label: "Fifth Picture",
            img: BIBLE4,
        },
    ];

    const CollectionSize = (UGACollection.length - 1);

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

            <p className={style.Title}>The Bible<Tab label={<img src={Close} alt='Close button' className={style.CloseContainer} />} onClick={handleCloseCard} /></p>
            <div className={style.InnerContainer}>
                <img src={UGACollection[index].img} className={style.ProjectPicture} alt="Picture of Project" />
                <button className={style.Arrow} onClick={handleNextPicture}><img src={arrow} alt="next button" className={style.arrow} /></button>
                <button className={style.ArrowL} onClick={handleNextPicture}><img src={arrowL} alt="back button" className={style.arrowL} /></button>
                <p className={style.Text}>This project is a website that makes it easy to read and explore the Bible. It includes a Verse of the Day and lets you browse through books of the Old and New Testament in a clean and simple way. The goal is to give people a quick and easy way to connect with scripture. <a href='https://bible-pi21.vercel.app' style={{ color: "green", fontWeight: "bolder" }}> Link to site</a></p>

            </div>

        </div>

    )
} export default Projectcard3;