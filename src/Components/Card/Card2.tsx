import style from './Card.module.css';
import UGA2 from '../../Pictures/UGA2.png';
import Tab from '../TabButton/Button';


function Card(){
    return(
        <div className={style.OutterContainer}>
            <p className={style.TitleContainer}>askUGA</p>
            <div className={style.InnerContainer}>
                <Tab label={<img src={UGA2} className={style.ProjectPicture} alt="Picture of Ask UGA project login"/>}/>
            </div>
            <Tab label={ <p className={style.TitleContainer}>click me</p>}/>
        </div>
    )
}export default Card;