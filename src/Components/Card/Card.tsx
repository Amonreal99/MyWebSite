import style from './Card.module.css';
import UGA0 from '../../Pictures/UGA0.png';
import Tab from '../TabButton/Button';
import arrow from '../../Pictures/arrows.png';
import React, { useState } from 'react';



function Card() {

    return (
        <div className={style.OutterContainer}>
            <p className={style.TitleContainer}>askUGA</p>
            <div className={style.InnerContainer}>
                <Tab label={<img src={UGA0} className={style.ProjectPicture} alt="Picture of Ask UGA project login" />} />

            </div>
            <Tab label={<p className={style.TitleContainer}>click me</p>} />
        </div>
    )
} export default Card;