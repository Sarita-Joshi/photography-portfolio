import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                <a href="https://www.instagram.com/milastea/" target="_blank" rel="noreferrer">@kunalghogare </a> |  
                <a href="https://www.instagram.com/moonshinefaerie/" target="_blank" rel="noreferrer"> @moonshinefaerie</a>
            </p>
            <p>Made by Kunal Ghogare | May 2023</p>
        </footer>
    )
}

export default Footer
