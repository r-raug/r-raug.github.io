import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container} id ="about">
            <h2 className={styles.title}>About</h2>
            <div><img src={getImageUrl("about/about.png")} className={styles.aboutImage} alt="About Me" /></div>
            <h3>I love taking on challenges and finding ways to make work easier and more efficient for myself and my team. Now that I’ve finished my Programmer-Analyst program at LaSalle College, I’m focused on improving my skills and exploring new opportunities for growth in the IT field.</h3>

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Skill Learned</h3>
                        <p>During my studies, I learned various programming languages and frameworks, such as:</p>
                    </div>
                    <li >
                    <br/>
                        <img src={getImageUrl("skills/html.png")} className={styles.responsiveImage} alt="Html icon"/>
                        <img src={getImageUrl("skills/css.png")} className={styles.responsiveImage} alt="CSS icon" />
                        <img src={getImageUrl("skills/php.png")} className={styles.responsiveImage} alt="PHP icon" />
                        <img src={getImageUrl("skills/javascript.png")} className={styles.responsiveImage} alt="JS icon" />
                        <img src={getImageUrl("skills/react.png")} className={styles.responsiveImage} alt="React icon" />
                        <img src={getImageUrl("skills/bootstrap.png")} className={styles.responsiveImage} alt="Bootstrap icon" />
                        <img src={getImageUrl("skills/asp.png")} className={styles.responsiveImage} alt="Asp icon" />
                        <img src={getImageUrl("skills/csharp.png")} className={styles.responsiveImage} alt="Csharp icon" />
                        <img src={getImageUrl("skills/java.png")} className={styles.responsiveImage} alt="Java icon" />
                        <img src={getImageUrl("skills/python.png")} className={styles.responsiveImage} alt="Python icon" />
                        <img src={getImageUrl("skills/sql.png")} className={styles.responsiveImage} alt="SQL icon" />
                        <img src={getImageUrl("skills/spring-boot.png")} className={styles.responsiveImage} alt="Spring Boot icon" />
                        <img src={getImageUrl("skills/swift.png")} className={styles.responsiveImage} alt="Swift icon" />
                        <img src={getImageUrl("skills/android.png")} className={styles.responsiveImage} alt="Android icon" />
                    </li>                  
                </li>
            </ul>
            
        </section>
    )
}