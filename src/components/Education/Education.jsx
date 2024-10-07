import React from "react";
import educationData from "../../data/education.json"; // Ensure the path is correct
import styles from "./Education.module.css";

export const Education = () => {
    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                <ul className={styles.education}>
                    {educationData.education.map((educationItem, id) => {
                        return (
                            <li key={id} className={styles.educationItem}>
                                <div className={styles.educationItemDetails}>
                                    <h3>{`${educationItem.degree}, ${educationItem.field}`}</h3>
                                    <p>{`${educationItem.start_date} - ${educationItem.end_date}`}</p>
                                    <p>{educationItem.institution}</p>
                                    <p>{educationItem.location}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};
