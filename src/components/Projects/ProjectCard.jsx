import React from "react";
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project: {title, imageSrc, skills, demo, source, description} }) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
            <h3 className={styles.titles}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>{skill}</li>
                ))}
            </ul>
            <div className={styles.links}>                
                <a href={source} className="btn btn-outline-primary" target="_blank">Source</a>
            </div>
        </div>
    );
}
