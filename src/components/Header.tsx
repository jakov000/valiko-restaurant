import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoLink}>
                    <img src="/logo/1.jpeg" alt="Restaurant Lori Logo" className={styles.logoImage} />
                    <span className={styles.logoText}>Restaurant Lori</span>
                </Link>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.link}>Startseite</Link>
                    <Link href="/galerie" className={styles.link}>Galerie</Link>
                    <Link href="/#menu" className={styles.link}>Speisekarte</Link>
                    <Link href="/kontakt" className={styles.link}>Kontakt</Link>
                    <Link href="/#location" className={styles.link}>Anfahrt</Link>

                </nav>
            </div>
        </header>
    );
}
