import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
            <section className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Hi, I'm Rony</h1>
                    <p className={styles.description}> I'm someone who loves a challenge and is always looking for ways to make things more efficient, whether it’s optimizing my own workflow or helping out my team. As I finish my Programmer-Analyst program at LaSalle College in Montreal, I’m focused on sharpening my skills and learning new ones that will help me grow and advance in my career. I’m excited to take on new projects that push me to improve and think creatively.</p>
                    <a href="mailto:rony.raug@gmail.com" className={styles.contactBtn}>Contact Me</a>
                </div>
                <img src = {getImageUrl("hero/Rony.png")} alt="Rony" className={styles.heroImg}/>
                    <div className={styles.topBlur} />
                    <div className={styles.bottomBlur} />
            
            </section>
            )
};