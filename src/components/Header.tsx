"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoLink} onClick={closeMenu}>
                    <img src="/logo/1.jpeg" alt="Restaurant Lori Logo" className={styles.logoImage} />
                    <span className={styles.logoText}>Restaurant Lori</span>
                </Link>

                <button
                    className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                    <Link href="/" className={styles.link} onClick={closeMenu}>Startseite</Link>
                    <Link href="/galerie" className={styles.link} onClick={closeMenu}>Galerie</Link>
                    <Link href="/#menu" className={styles.link} onClick={closeMenu}>Speisekarte</Link>
                    <Link href="/kontakt" className={styles.link} onClick={closeMenu}>Kontakt</Link>
                    <Link href="/#location" className={styles.link} onClick={closeMenu}>Anfahrt</Link>
                </nav>
            </div>
        </header>
    );
}
