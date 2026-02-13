'use client';

import { useState } from 'react';
import styles from './MenuHighlight.module.css';

export default function MenuHighlight() {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (isAnimating) return;

        setIsAnimating(true);

        // Wait for animation to play before opening link
        setTimeout(() => {
            window.open('/Menu.pdf', '_blank');
            setIsAnimating(false);
        }, 600);
    };

    return (
        <section id="menu" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Unsere Speisekarte</h2>

                <div className={`${styles.menuPreview} ${isAnimating ? styles.animating : ''}`}>
                    <a
                        href="/Menu.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.menuLink}
                        onClick={handleMenuClick}
                    >
                        <div className={styles.imageWrapper}>
                            <img
                                src="/speise.jpeg"
                                alt="Speisekarte Vorschau"
                                className={styles.menuImage}
                            />
                            {/* Ripple effect container */}
                            {isAnimating && <div className={styles.ripple}></div>}
                        </div>
                        <div className={styles.overlay}>
                            <span>Als PDF öffnen</span>
                        </div>
                    </a>
                </div>

                <div className={styles.buttonContainer}>
                    <a href="/Menu.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Vollständige Speisekarte ansehen (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
}
