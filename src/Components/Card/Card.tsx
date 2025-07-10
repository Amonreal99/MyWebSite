import style from './Card.module.css';
import UGA1 from '../../Pictures/UGA1.png';
import UGA2 from '../../Pictures/UGA2.png';
import UGA3 from '../../Pictures/UGA3.png';
import UGA4 from '../../Pictures/UGA4.png';
import UGA5 from '../../Pictures/UGA5.png';
import Tab from '../TabButton/Button';
import arrow from '../../Pictures/arrows.png';
import React, {useState} from 'react';



function Card(){
    const UGACollection=[
        {
            label: "First Picture",
            img: UGA1,
        },
        {
            label: "Second Picture",
            img: UGA2,
        },
        {
            label: "Third Picture",
            img: UGA3,
        },
        {
            label: "Fourth Picture",
            img: UGA4,
        },
        {
            label: "Fifth Picture",
            img: UGA5,
        },
    ];

    const CollectionSize=UGACollection.length;
    
    const[index, setActiveStep]=React.useState(0)
    const handleNextPicture=()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep+1);
    };

    return(
        <div className={style.OutterContainer}>
            <p className={style.TitleContainer}>askUGA</p>
            <div className={style.InnerContainer}>
                <Tab label={<img src={UGA1} className={style.ProjectPicture} alt="Picture of Ask UGA project login"/>}/>
                
            </div>
           <Tab label={ <p className={style.TitleContainer}>click me</p>}/>
        </div>
    )
}export default Card;