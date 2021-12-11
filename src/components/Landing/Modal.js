import React, { useRef } from 'react'
import styles from '../../styles/Landing.module.css'
import cancel from '../../assets/cancel.svg'
import {useNavigate} from 'react-router-dom'
const Modal = ({setShowModal}) => {
    const navigate = useNavigate()
    const modal = useRef(null)
    
    return (
        <section className={styles.modalContainer} onClick={(e) => {
            if(e.target !== modal.current){
                setShowModal(false)
            }
        }}> 
            <div className={styles.modal} ref={modal}>
            <img src={cancel} alt="" className={styles.cancel} tabIndex="1"/>
                <button onClick={() => {
                    navigate('/signup-client')
                }}>Sign up as a Client</button>
                <span>OR</span>
                <button onClick={() => {
                    navigate('/signup-stylist')
                }}>Sign up as a hairstylist</button>
            </div>
        </section>
    )
}

export default Modal
