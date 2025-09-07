import style from './Card.module.css';
import BIBLE0 from '../../Pictures/bible0.png';
import Tab from '../TabButton/Button';


function Card() {
    return (
        <div className={style.OutterContainer}>
            <p className={style.TitleContainer}>The Bible</p>
            <div className={style.InnerContainer}>
                <Tab label={<img src={BIBLE0} className={style.ProjectPicture} alt="Picture of Ask UGA project login" />} />
            </div>
            <Tab label={<p className={style.TitleContainer}>click me</p>} />
        </div>
    )
} export default Card;