import style from './Projectcard.module.css';
import UGA1 from '../../Pictures/UGA1.png';
import UGA2 from '../../Pictures/UGA2.png';
import UGA3 from '../../Pictures/UGA3.png';
import UGA4 from '../../Pictures/UGA4.png';
import UGA5 from '../../Pictures/UGA5.png';
import Tab from '../TabButton/Button';
import React, {useState} from 'react';
import Close from '../../Pictures/close.png';
import arrow from '../../Pictures/arrows.png';
import arrowL from '../../Pictures/arrowsL.png';






function Projectcard2(){
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

    const CollectionSize=(UGACollection.length-1);
       
       const[index, setActiveStep]=React.useState(0)
       const handleNextPicture=()=>{
           console.log("index",index)
           console.log("collection size",CollectionSize)
           setActiveStep((prevActiveStep)=>prevActiveStep+1);
           if(index===CollectionSize){
               setActiveStep((prev=>prev-(CollectionSize+1)))
               
                console.log("index",index)
           console.log("collection size",CollectionSize)
           }
       };
    
     const [cardClose, setCardClose]=useState(false)
        const handleCloseCard=()=>{
            setCardClose(true)
    
        }
        if (cardClose)return null;

    
    return(
        <div className={style.OutterContainer}>
            
            <p className={style.Title}>askUGA <Tab label={<img src={Close} alt ='Close button' className={style.CloseContainer} />} onClick={handleCloseCard}/></p>
            <div className={style.InnerContainer}>
                <img src={UGACollection[index].img} className={style.ProjectPicture} alt="Picture of Project"/>
                <button className={style.Arrow}onClick={handleNextPicture}><img src={arrow} alt="next button" className={style.arrow}/></button>
                <button className={style.ArrowL}onClick={handleNextPicture}><img src={arrowL} alt="back button" className={style.arrowL}/></button>
                <p className={style.Text}>Text about Project goes here</p>
            
            </div>
            
        </div>
        
    )
}export default Projectcard2;