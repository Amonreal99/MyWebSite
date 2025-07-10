import styles from './Home.module.css';
import NavBar from '../NavBar/NavBar';
import Tower from '../../Pictures/searsTower.jpg';
import City from '../../Pictures/city2.jpg'
import HeadShot from '../../Pictures/headshot.JPG'



function Home(){
    return(
        <div className={styles.CityContainer} style={{backgroundImage:`url(${City})`}}>
            
            <NavBar />
            <div className={styles.Selfie}>
                <img src={HeadShot} alt="Selfie" className={styles.headshot}/>
            </div>
            <div className={styles.AboutContainer}>
                <p>Hi, I'm Armando Monreal, a soon-to-be graduate with a Bachelor's degree in Computer Science. I'm passionate about building clean, functional web applications and solving real-world problems with code.</p> 
                <p>I have experience working with technologies like React, JavaScript, TypeScript, and Python, and enjoy both front-end and back-end development.
                Whether I'm collaborating with a team or tackling solo projects, I'm always looking to learn and grow as a developer.</p><p> Feel free to explore my work and reach out if you'd like to connect!</p>
                <div style={{display:"flex", alignItems:"center", marginTop:"-25px", gap:"10px"}}><h3 style ={{color:"lightblue"}}>Contact:</h3><p style={{}}> monrealarmando48@gmail.com, or Cell:470-422-5915</p></div>
            </div>
        
        </div>
    );
}
export default Home;