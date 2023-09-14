import React from 'react'
import { useHistory } from "react-router-dom";
import styles from './Landing.module.scss'
import info from '../../data/info2'

const Landing = () => {
    const history = useHistory();
    
    return (
        <div className={styles.section_title}>
            {info.map(i =>  <div className={styles.listing} key={i.title}>
                                <img className={styles.listing_img} src={i.img} alt={i.title} onClick={() => history.push("/"+ i.title)}/>
                                <div className="watermark">watermarkText</div>
                                <div className={styles.listing_text} onClick={() => history.push("/"+ i.title)}>
                                    <div className={styles.text}>
                                        <h3>{i.title}</h3>
                                    </div>
                                </div>
                            </div>
            )}                             
        </div>
    )
}

export default Landing
