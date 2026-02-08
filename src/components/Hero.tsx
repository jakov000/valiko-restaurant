import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Willkommen beim <br />
                    <span style={{ color: 'var(--color-green)' }}>ASV Fürth</span>
                </h1>
                <p className={styles.subtitle}>
                    Wo deutsche Klassiker auf armenische Gastfreundschaft treffen.
                    <br />Genießen Sie das Beste aus beiden Welten.
                </p>
                <div className={styles.buttons}>
                    <Link href="#menu" className={styles.btnPrimary}>
                        Unsere Speisekarte
                    </Link>
                    <Link href="#location" className={styles.btnSecondary}>
                        Tisch reservieren
                    </Link>
                </div>
            </div>
        </section>
    );
}
