import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <Link href="#menu">Speisekarte</Link>
                <Link href="#location">Anfahrt</Link>
                <Link href="/impressum">Impressum</Link>
                <Link href="/datenschutz">Datenschutz</Link>
            </div>
            <p className={styles.copyright}>
                &copy; {new Date().getFullYear()} Sportgaststätte ASV Fürth. Alle Rechte vorbehalten.
            </p>
        </footer>
    );
}
