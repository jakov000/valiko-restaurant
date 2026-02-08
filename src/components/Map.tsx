import styles from './Map.module.css';

export default function Map() {
    return (
        <section id="location" className={styles.section}>
            <h2 className={styles.title}>So finden Sie uns</h2>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h3 className={styles.infoTitle}>Adresse & Kontakt</h3>
                    <p className={styles.infoText}>
                        <strong>Sportgaststätte ASV Fürth</strong><br />
                        Magazinstraße 45<br />
                        90763 Fürth
                    </p>
                    <p className={styles.infoText}>
                        Telefon: <a href="tel:+499117777777">0911 / 123 456 78</a><br />
                        Email: <a href="mailto:info@asvfuerth-gaststaette.de">info@asvfuerth-gaststaette.de</a>
                    </p>

                    <h3 className={styles.infoTitle} style={{ marginTop: '2rem' }}>Öffnungszeiten</h3>
                    <p className={styles.infoText}>
                        Mo - Fr: 17:00 - 23:00 Uhr<br />
                        Sa - So: 11:30 - 23:00 Uhr<br />
                        Warme Küche bis 21:30 Uhr
                    </p>

                    <a href="https://maps.google.com/maps?ll=49.46825,10.99026&z=15&t=m&hl=de&gl=DE&mapclient=embed&cid=7098226010530737399" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                        Route planen
                    </a>
                </div>
                <div className={styles.mapContainer}>
                    <iframe
                        width="100%"
                        height="100%"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Magazinstra%C3%9Fe+45+90763+F%C3%BCrth&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        title="ASV Fürth Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
