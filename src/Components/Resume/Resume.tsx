import style from './Resume.module.css';
import Nav from '../NavBar/NavBar';


function Resume(){
    return(
        <div className={style.OutterContainer}>
        <div><Nav/></div>
        <div className={style.InnerContainer}>
            <div className={style.Container}>
                page
            </div>
        </div>
        </div>


)
}export default Resume;