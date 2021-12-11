import React, { useState } from 'react'
import styles from '../styles/Signup.module.css'
import logo from '../assets/logo.svg'
import eyeOff from '../assets/eyeoff.svg'
import eyeOn from '../assets/eyeon.svg'
const SignupClient = () => {

    const [showPassword, setShowPassword] = useState(false)
    return (
        <section className={styles.container}>
            <aside className={styles.aside}></aside>
            <div className={styles.formContainer}>
                <form>
                    <div className={styles.logoContainer}>
                        <img src={logo} alt="" />
                        <h3>Let’s get started</h3>
                    </div>
                    <div className={styles.inputContainer}>
                        <label for="fullname">Full name</label>
                        <input type="text" name="fullname" id="fullname" placeholder="Full name"/>
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
                    <button className={styles.submitButton}>Sign up</button>
                    <p className={styles.subText}>Already have an account? <a href="/signin">Sign in</a></p>
                    
                </form>
            </div>
        </section>
    )
}

export default SignupClient
