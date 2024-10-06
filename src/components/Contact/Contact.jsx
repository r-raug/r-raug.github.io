import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}> 
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}><img src={[getImageUrl("contact/emailIcon.png")]} alt="Email Icon" />
                    <a href ="mailto:rony.raug@gmail.com">rony.raug@gmail.com</a>
                </li>
                <li className={styles.link}><img src={[getImageUrl("contact/linkedinIcon.png")]} alt="LinkedIn Icon" />
                    <a href ="https://www.linkedin.com/in/ronyraug/">linkedin.com/in/ronyraug/</a>
                </li> 
                <li className={styles.link}><img src={[getImageUrl("contact/githubIcon.png")]} alt="GitHub Icon" />
                    <a href ="https://github.com/r-raug">github.com/r-raug</a>
                </li>     
            </ul>           

            


        </footer>
    );
}