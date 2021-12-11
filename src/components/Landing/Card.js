import React from 'react'
import styles from '../../styles/Landing.module.css'

export const Card = ({image, title, content}) => {
    return (
        <div className={styles.customCard}>
            <div className={styles.imageCircle}>
                <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}
