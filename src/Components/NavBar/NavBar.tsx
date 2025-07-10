import styles from './NavBar.module.css';
import Tab from '../TabButton/Button';
import menuTab from '../../Pictures/menuTab.png';
import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function NavBar(){
  
    const[menuOpen, setMenuOpen]=useState(false);

    const handleMenuClick=()=>{
        setMenuOpen(prev=>!prev);
    };

    return(
        <div className={styles.Container}>
            <div className={styles.InnerContainer}> 
                <Tab label={<img src ={menuTab} alt="Menu Tab"/>} onClick={handleMenuClick} />
                {menuOpen && (
                <div className={styles.dropDown}>
                    <ul>
                        <li><Link to='/' onClick={handleMenuClick} className={styles.navLink}>About</Link></li>
                        <li><Link to='/project' onClick={handleMenuClick} className={styles.navLink}>Projects</Link></li>
                        <li><Link to='/game' onClick={handleMenuClick} className={styles.navLink}>Game</Link></li>
                        <li><Link to='/contact' onClick={handleMenuClick} className={styles.navLink}>Contact</Link></li>
                        <li><Link to ='/resume' onClick={handleMenuClick} className={styles.navLink}>Resume</Link></li>
                    </ul>
                </div>
            )}
                <div className={styles.Name}><Link to='/' onClick={handleMenuClick}className={styles.navLink} >Armando Monreal</Link></div>
            </div>
            
        </div>
    )
}
export default NavBar;