import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Willkommen im <br />
                    <span style={{ color: 'var(--color-accent)' }}>Restaurant Lori</span>
                </h1>
                <p className={styles.subtitle}>
                    Wo deutsche Klassiker auf armenische Gastfreundschaft treffen.
                    <br />Genießen Sie das Beste aus beiden Welten.
                </p>
                <div className={styles.buttons}>
                    <Link href="#menu" className={styles.btnPrimary}>
                        Unsere Speisekarte
                    </Link>
                    <Link href="/kontakt" className={styles.btnSecondary} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
                        <span>Tisch reservieren</span>
                        <span style={{ fontSize: '0.85em', fontWeight: 'normal' }}>Festnetz: 0911 96589761</span>
                        <span style={{ fontSize: '0.85em', fontWeight: 'normal' }}>Mobil: 0176 30191234</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
