import styles from './Contact.module.css';
import City from '../../Pictures/city2.jpg';
import HeadShot from '../../Pictures/headshot.JPG';
import NavBar from '../NavBar/NavBar';




function Contact(){
    return(
        <div className={styles.CityContainer} style={{backgroundImage:`url(${City})`}}> 
            <NavBar/>
            <div className={styles.Selfie}>
                <img src ={HeadShot} alt="Selfie" className={styles.HeadShot}/>
            </div>
            <div className={styles.ContactInfo}>
                <h3 style={{display:"flex", justifyContent:"center", alignItems:"center"}}>Contact:</h3><p>Email: monrealarmando48@gmail.com</p><p>Cell: 470-422-5915</p>
            </div>
            
        </div>
    )
}export default Contact;