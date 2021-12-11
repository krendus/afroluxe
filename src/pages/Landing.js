import React, { useState } from 'react'
import { Card } from '../components/Landing/Card'
import LC1 from '../assets/LC1.svg'
import LC2 from '../assets/LC2.svg'
import LC3 from '../assets/LC3.svg'
import CC from '../assets/CC.png'
import Larrow from '../assets/left-arrow.svg'
import Rarrow from '../assets/right-arrow.svg'
import ReviewCard from '../components/Landing/ReviewCard'
import Footer from '../components/Footer'
import styles from '../styles/Landing.module.css'
import location from '../assets/location.svg'
import Nav from '../components/Nav'
import Modal from '../components/Landing/Modal'
const Landing = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <Nav setShowModal={setShowModal}/>
            <section className={styles.landingSection}>
                <h1>Explore and Book Hairstylists near you </h1>
                <form className={styles.formContainer}>
                    <div className={styles.customInput}>
                        <input type="text" placeholder='Services or Products'/>
                    </div> 
                    <div className={styles.customInput}>
                        <input type="text" placeholder='Enter a location'/>
                        <img src={location} alt="" />
                    </div>
                    <button>Search</button>
                </form>
            </section>
            <section className={styles.section2}>
                <h2>How it works</h2>
                <div className={styles.cardContainer}>
                    <Card 
                     image={LC1} 
                     title="Search services" 
                     content="Find the service you need and choose your preferred location"
                     />
                    <Card 
                     image={LC2} 
                     title="Choose a Professional" 
                     content="View profiles, read clients reviews and choose the best professional for your needs"
                     />
                    <Card 
                     image={LC3} 
                     title="Book appointment" 
                     content="See availability and book appointments instantly anytime."
                     />
                </div>
            </section>
            <section className={styles.section3}>
                <h2>Find by category</h2>
                <div className={styles.imageGrid}>
                    <div className={styles.leftGrid}>
                        <button>Natural hair</button>
                        <button>Cornrows</button>
                    </div>
                    <div className={styles.rightGrid}>
                        <div className={styles.topRightGrid}>
                            <button>Braids</button>
                            <button>Buzz cut</button>
                        </div>
                        <div className={styles.bottomRightGrid}>
                            <button>Dreadlocks</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section4}>
                <div className={styles.leftGridSection4}>
                    <div></div>
                    <img src={CC} alt="" />
                </div>
                <div className={styles.rightGridSection4}>
                    <article>
                        <h2>Why choose us?</h2>
                        <p>We offer online bookings for the most interactive hairstylists in the business. Our platform allows you to see upcoming appointments, book your hair appointment with ease, and keep track of your favorites. With more than thousand trusted users across Europe and more added every week, we have your hair needs covered no matter where you live. This is why we’ve created an easy-to-use platform to make booking simple and secure for everyone – customers and hairstylists alike.</p>
                        <button>Learn more</button>
                    </article>
                </div>
            </section>
            <section className={styles.section5}>
                <h2>What clients are saying about us</h2>
                <div className={styles.s5ButtonCont}>
                    <button><img src={Larrow} alt="" /></button>
                    <button><img src={Rarrow} alt="" /></button>
                </div>
                <div className={styles.reviewContainer}>
                    <ReviewCard 
                     content="Easy to use and well understood by my team. Saves time in booking and easier to manage client files. It does absolutely everything I need it to do and the customer service is outstanding!"
                     reviewer="Iman"
                     />
                     <ReviewCard
                      content="Easy to use and well understood by my team. Saves time in booking and easier to manage client files. It does absolutely everything I need it to do and the customer service is outstanding!"
                      reviewer="Jane"
                    />
                </div>
            </section>
            <Footer />
            {
                showModal && (
                    <Modal setShowModal={setShowModal}/>
                )
            }
            
        </div>
    )
}

export default Landing
