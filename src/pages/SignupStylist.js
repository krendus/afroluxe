import React, { useState } from 'react'
import styles from '../styles/Signup.module.css'
import logo from '../assets/logo.svg'
import eyeOff from '../assets/eyeoff.svg'
import eyeOn from '../assets/eyeon.svg'

const SignupStylist = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <section className={styles.container}>
            <aside className={styles.aside2}></aside>
            <div className={styles.formContainer}>
                <form>
                    <div className={styles.logoContainer}>
                        <img src={logo} alt="" />
                        <h3>Grow your business with us!</h3>
                    </div>
                    <div className={styles.inputContainer}>
                        <label for="firstname">Firstname</label>
                        <input type="text" name="firstname" id="firstname" placeholder="Firstname"/>
                    </div>
                    <div className={styles.inputContainer}>
                        <label for="lastname">Firstname</label>
                        <input type="text" name="lastname" id="lastname" placeholder="lastname"/>
                    </div>
                    <div className={styles.inputContainer}>
                        <label for="email">Email address</label>
                        <input type="text" name="email" id="email" placeholder="example@gmail.com"/>
                    </div>
                    <div className={styles.inputContainer}>
                        <label for="password">Password</label>
                        <div className={styles.customInput}>
                            <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" />
                            <button onClick={(e) => {
                                e.preventDefault();
                                setShowPassword(!showPassword)
                            }}><img src={ showPassword ? eyeOff : eyeOn } alt="toggle visibility" /></button>
                        </div>
                    </div>
                    <div className={styles.inputContainer}>
                        <label for="email">Mobile Number</label>
                        <input type="text" name="email" id="email" placeholder="example@gmail.com"/>
                    </div>
                    <button className={styles.submitButton}>Sign up</button>
                    <p className={styles.subText}>Already have an account? <a href="/signin">Sign in</a></p>
                    
                </form>
            </div>
        </section>
    )
}

export default SignupStylist
