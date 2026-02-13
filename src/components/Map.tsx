import styles from './Map.module.css';

export default function Map() {
    return (
        <section id="location" className={styles.section}>
            <h2 className={styles.title}>So finden Sie uns</h2>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h3 className={styles.infoTitle}>Adresse & Kontakt</h3>
                    <p className={styles.infoText}>
                        <strong>Restaurant Lori</strong><br />
                        Inhaber: Arman Movsisyan & Valiko Movsisyan<br />
                        Magazinstraße 45<br />
                        90763 Fürth
                    </p>
                    <p className={styles.infoText}>
                        Festnetz: <a href="tel:+4991196589761">0911 96589761</a><br />
                        Mobil: <a href="tel:+4917630191234">0176 30191234</a><br />
                        Email: <a href="mailto:LoriGbr.info@gmail.com">LoriGbr.info@gmail.com</a>
                    </p>

                    <h3 className={styles.infoTitle} style={{ marginTop: '2rem' }}>Öffnungszeiten</h3>
                    <p className={styles.infoText}>
                        Mo - Fr: 15:30 - 00:00 Uhr<br />
                        Samstag: 11:00 - 00:00 Uhr<br />
                        Sonntag: 11:00 - 22:00 Uhr<br />
                        Warme Küche bis 21:30 Uhr
                    </p>

                    <a href="https://www.google.com/maps/dir/?api=1&destination=Magazinstra%C3%9Fe+45,+90763+F%C3%BCrth" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                        Route planen (Google Maps)
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
                        title="Lori Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
