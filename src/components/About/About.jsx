import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container} id ="about">
            <h2 className={styles.title}>About</h2>
            <div><img src={getImageUrl("about/about.png")} className={styles.aboutImage} alt="About Me" /></div>
            
                    <div className={styles.aboutItemText}>
                       
                        <h3 className={styles.aboutItems}>I love taking on challenges and finding ways to make work easier and more efficient for myself and my team. Now that I’ve finished my Programmer-Analyst program at LaSalle College, I’m focused on improving my skills and exploring new opportunities for growth in the IT field.</h3>
                  </div>
            
        </section>
    )
}