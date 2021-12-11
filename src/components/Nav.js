import React from 'react'
import styles from '../styles/Landing.module.css'
import logo from '../assets/logo.svg'
const Nav = ({setShowModal}) => {
    return (
        <nav className={styles.navContainer}>
               <div className={styles.subContainer}>
                <div className={styles.navLogo}>
                    <img src={logo} alt="" />
                    <span>Afroluxe</span>
                </div>
                <div className={styles.navButton}>
                    <button onClick={() => setShowModal(true)}>Sign up</button>
                    <button>Login</button>
                </div>
               </div>
            </nav> 
    )
}

export default Nav
