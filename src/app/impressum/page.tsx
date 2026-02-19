import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../legal.module.css';

export default function Impressum() {
    return (
        <main className={styles.legalPage}>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Impressum</h1>

                <div className={styles.section}>
                    <h2 className={styles.heading}>Angaben gemäß § 5 TMG</h2>
                    <p className={styles.text}>
                        Restaurant Lori GbR<br />
                        Magazinstraße 45<br />
                        90763 Fürth
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.heading}>Vertreten durch:</h2>
                    <p className={styles.text}>
                        Arman Movsisyan<br />
                        Valiko Movsisyan
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.heading}>Kontakt</h2>
                    <p className={styles.text}>
                        Telefon: 0911 96589761<br />
                        Mobil: 0176 30191234<br />
                        E-Mail: LoriGbr.info@gmail.com
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.heading}>Umsatzsteuer-ID</h2>
                    <p className={styles.text}>
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                        DE460067205
                    </p>
                    <p className={styles.text}>
                        Steuernummer:<br />
                        218 / 167 / 50099
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.heading}>Redaktionell verantwortlich</h2>
                    <p className={styles.text}>
                        Arman Movsisyan<br />
                        Magazinstraße 45<br />
                        90763 Fürth
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.heading}>EU-Streitschlichtung</h2>
                    <p className={styles.text}>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr/</a>.<br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.heading}>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                    <p className={styles.text}>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
