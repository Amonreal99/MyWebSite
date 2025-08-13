import style from './Resume.module.css';
import Nav from '../NavBar/NavBar';
import play0 from '../../Pictures/play0.png'


function Resume() {
    return (
        <div className={style.OutterContainer}>
            <div><Nav /></div>
            <div className={style.InnerContainer}>
                <div className={style.Container}>
                    <object data="/documents/ArmandoMonrealResume.pdf"
                        type="application/pdf"
                        width="100%"
                        height="100%"
                    ><a href="/documents/ArmandoMonrealResume.pdf" download >Download PDF </a></object>
                </div>
                <p style={{ color: "white", fontWeight: '600', fontSize: "20px" }}>Hover over to Download Me</p>
            </div>
        </div>


    )
} export default Resume;