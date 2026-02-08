import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        Sportgaststätte <span>ASV Fürth</span>
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.link}>Startseite</Link>
                    <Link href="#menu" className={styles.link}>Speisekarte</Link>
                    <Link href="#location" className={styles.link}>Anfahrt</Link>
                    <Link href="#contact" className={styles.link}>Kontakt</Link>
                </nav>
            </div>
        </header>
    );
}
