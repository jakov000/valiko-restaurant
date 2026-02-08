import styles from './MenuHighlight.module.css';

export default function MenuHighlight() {
    return (
        <section id="menu" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Unsere Küche</h2>
                <div className={styles.grid}>
                    {/* German Highlight */}
                    <div className={`${styles.card} ${styles.german}`}>
                        <div
                            className={styles.imagePlaceholder}
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599921841143-819065a55cc6?q=80&w=1931&auto=format&fit=crop")' }}
                        >
                        </div>
                        <h3 className={styles.cardTitle}>Fränkische Klassiker</h3>
                        <p className={styles.cardText}>
                            Vom knusprigen Schnitzel bis zum deftigen Schäufele – genießen Sie ehrliche, hausgemachte deutsche Küche.
                        </p>
                        <span className={styles.price}>Ab 12,90€</span>
                    </div>

                    {/* Armenian Highlight */}
                    <div className={`${styles.card} ${styles.armenian}`}>
                        <div
                            className={styles.imagePlaceholder}
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop")' }}
                        >
                        </div>
                        <h3 className={styles.cardTitle}>Armenische Spezialitäten</h3>
                        <p className={styles.cardText}>
                            Entdecken Sie den Geschmack des Kaukasus mit traditionellem Schaschlik, Lawasch und frischen Kräutern.
                        </p>
                        <span className={styles.price}>Ab 14,50€</span>
                    </div>

                    {/* Drinks Highlight */}
                    <div className={styles.card}>
                        <div
                            className={styles.imagePlaceholder}
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=2070&auto=format&fit=crop")' }}
                        >
                        </div>
                        <h3 className={styles.cardTitle}>Frisch Gezapftes</h3>
                        <p className={styles.cardText}>
                            Ein kühles Helles oder ein Weizen nach dem Spiel. Wir bieten eine große Auswahl an Getränken.
                        </p>
                        <span className={styles.price}>Ab 3,80€</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
