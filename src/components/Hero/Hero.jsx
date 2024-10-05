import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
            <section className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Hi, I'm Rony</h1>
                    <p className={styles.description}> A programmer with a passion for coding.</p>
                    <a href="mailto:rony.raug@gmail.com" className={styles.contactBtn}>Contact Me</a>
                </div>
                <img src = {getImageUrl("hero/Rony.png")} alt="Rony" className={styles.heroImg}/>
                    <div className={styles.topBlur} />
                    <div className={styles.bottomBlur} />
            
            </section>
            )
};