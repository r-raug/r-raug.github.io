import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container} id ="about">
            <h2 className={styles.title}>About</h2>
            <div><img src={getImageUrl("about/about.png")} className={styles.aboutImage} alt="About Me" /></div>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>FrontEnd Developer</h3>
                        <p>During my studies, I learned various programming languages and frameworks, such as:</p>
                    </div>
                    <li >
                    <br/>
                        <img src={getImageUrl("about/frontend/html.png")} className={styles.responsiveImage} alt="Html icon"/>
                        <img src={getImageUrl("about/frontend/css.png")} className={styles.responsiveImage} alt="CSS icon" />
                        <img src={getImageUrl("about/frontend/php.png")} className={styles.responsiveImage} alt="PHP icon" />
                        <img src={getImageUrl("about/frontend/javascript.png")} className={styles.responsiveImage} alt="JS icon" />
                        <img src={getImageUrl("about/frontend/react.png")} className={styles.responsiveImage} alt="React icon" />
                        <img src={getImageUrl("about/frontend/bootstrap.png")} className={styles.responsiveImage} alt="Bootstrap icon" />
                    </li>
                    <br/><br/>
            
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>BackEnd Developer</h3>
                        <p>I focused on learning different back-end languages and frameworks during my studies, including:</p>
                    </div>
                        <li >
                            <br/>
                            <img src={getImageUrl("about/backend/asp.png")} className={styles.responsiveImage} alt="Asp icon" />
                            <img src={getImageUrl("about/backend/csharp.png")} className={styles.responsiveImage} alt="Csharp icon" />
                            <img src={getImageUrl("about/backend/java.png")} className={styles.responsiveImage} alt="Java icon" />
                            <img src={getImageUrl("about/backend/python.png")} className={styles.responsiveImage} alt="Python icon" />
                            <img src={getImageUrl("about/backend/sql.png")} className={styles.responsiveImage} alt="SQL icon" />
                            <img src={getImageUrl("about/backend/spring-boot.png")} className={styles.responsiveImage} alt="Spring Boot icon" />
                            <img src={getImageUrl("about/backend/swift.png")} className={styles.responsiveImage} alt="Swift icon" />
                            <img src={getImageUrl("about/backend/android.png")} className={styles.responsiveImage} alt="Android icon" />
                        </li>                  
                </li>
            </ul>
            
        </section>
    )
}