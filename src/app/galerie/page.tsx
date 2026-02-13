'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Galerie() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Generate array of image paths from 10.jpeg to 24.jpeg, excluding 12.jpeg
    const images = Array.from({ length: 15 }, (_, i) => i + 10)
        .map(num => `/${num}.jpeg`)
        .filter(path => !['/12.jpeg', '/14.jpeg', '/15.jpeg', '/17.jpeg', '/19.jpeg', '/20.jpeg', '/22.jpeg', '/23.jpeg'].includes(path));

    return (
        <main className={styles.galleryPage}>
            <Header />

            <section className={styles.heroSection}>
                <h1 className={styles.title}>Impressionen</h1>
                <p className={styles.subtitle}>Ein visueller Rundgang durch das Restaurant Lori. <br />Genussmoment für Genussmoment.</p>
            </section>

            <div className={styles.galleryContainer}>
                <div className={styles.grid}>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={styles.imageCard}
                            onClick={() => setSelectedImage(index)}
                        >
                            <img
                                src={src}
                                alt={`Impression ${index + 1}`}
                                className={styles.image}
                                loading="lazy"
                            />
                            <div className={styles.overlay}>
                                <div className={styles.icon}>+</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div className={styles.lightboxOverlay} onClick={() => setSelectedImage(null)}>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <button
                            className={styles.closeButton}
                            onClick={() => setSelectedImage(null)}
                            aria-label="Schließen"
                        >
                            ✕
                        </button>

                        <button
                            className={`${styles.navButton} ${styles.prevButton}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                const newIndex = (selectedImage - 1 + images.length) % images.length;
                                setSelectedImage(newIndex);
                            }}
                            aria-label="Vorheriges Bild"
                        >
                            ‹
                        </button>

                        <img
                            src={images[selectedImage]}
                            alt="Detailansicht"
                            className={styles.lightboxImage}
                        />

                        <button
                            className={`${styles.navButton} ${styles.nextButton}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                const newIndex = (selectedImage + 1) % images.length;
                                setSelectedImage(newIndex);
                            }}
                            aria-label="Nächstes Bild"
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
