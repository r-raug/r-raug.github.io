import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 920);
        };

        
        handleResize();

        
        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>
                Portfolio
            </a>

            <div className={styles.menu}>
                {isMobile && (
                    <img 
                        className={styles.menuBtn} 
                        src={
                            menuOpen 
                            ? getImageUrl("nav/closeIcon.png") 
                            : getImageUrl("nav/menuIcon.png")
                        }
                        alt={menuOpen ? "Close menu" : "Open menu"} 
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                )}
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#experience'>Experience</a>
                    </li>
                    <li>
                        <a href='#education'>Education</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
