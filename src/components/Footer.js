import React from 'react'
import styles from '../styles/Footer.module.css'
import logo from '../assets/logo.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.first}>
                <div className={styles.logoSection}>
                    <div className={styles.logo}>
                        <img src={logo} alt='' />
                        <p>Afroluxe</p>
                    </div>
                </div>
                <div className={styles.listSection}>
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="http://">About Us</a></li>
                        <li><a href="http://">Hairstylist</a></li>
                        <li><a href="http://">FAQ</a></li>
                    </ul>
                </div>
                <div className={styles.listSection}>
                    <h3>Category</h3>
                    <ul>
                        <li><a href="http://">Braid</a></li>
                        <li><a href="http://">Natural Hair</a></li>
                        <li><a href="http://">Hair cut</a></li>
                        <li><a href="http://">Dreadlocks</a></li>
                    </ul>
                </div>
                <div className={styles.listSection}>
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="http://">Term of use</a></li>
                        <li><a href="http://">Privacy policy</a></li>
                        <li><a href="http://">Terms and conditions</a></li>
                    </ul>
                </div>
                <div className={styles.formSection}>
                    <form>
                        <h3>Subscribe to our news letter </h3>
                        <div className={styles.formContainer}>
                            <input type="email" placeholder="Enter email"/>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.second}>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={twitter} alt="" /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={facebook} alt="" /></a>
            </div>
            <div className={styles.third}><p>&copy;2021 Afroluxe. All rights reserved </p></div>
        </footer>
    )
}

export default Footer
