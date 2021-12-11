import React from 'react'
import styles from '../../styles/Landing.module.css'
import Q from '../../assets/quote.svg'

const ReviewCard = ({content, reviewer}) => {
    return (
        <div className={styles.reviewCard}>
            <img src={Q} alt='' />
            <p>{content}</p>
            <span>__ {reviewer}</span>
        </div>
    )
}

export default ReviewCard
