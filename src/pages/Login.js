import React, { useState } from 'react'
import styles from '../styles/Signup.module.css'
import logo from '../assets/logo.svg'
import eyeOff from '../assets/eyeoff.svg'
import eyeOn from '../assets/eyeon.svg'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <section className={styles.container}>
            <aside className={styles.aside3}></aside>
            <div className={styles.formContainer}>
                <form>
                    <div className={styles.logoContainer}>
                        <img src={logo} alt="" />
                        <h3>Welcome Back!</h3>
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
                    <a href="/" className={styles.forgotPass}>Forgot password?</a>
                    <button className={styles.submitButton}>Sign in</button>
                    <p className={styles.subText}>Don't have an account? <a href="/signup-stylist">Sign up</a></p>
                    
                </form>
            </div>
        </section>
    )
}

export default Login
