import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../legal.module.css';

export default function Datenschutz() {
    return (
        <main className={styles.legalPage}>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Datenschutzerklärung</h1>

                <div className={styles.section}>
                    <h2 className={styles.heading}>1. Datenschutz auf einen Blick</h2>
                    <h3 className="font-bold mb-2">Allgemeine Hinweise</h3>
                    <p className={styles.text}>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>
                    <h3 className="font-bold mb-2">Datenerfassung auf dieser Website</h3>
                    <p className={styles.text}>
                        <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                    </p>
                    <p className={styles.text}>
                        <strong>Wie erfassen wir Ihre Daten?</strong><br />
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder per E-Mail an uns senden.
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.heading}>2. Hosting</h2>
                    <p className={styles.text}>
                        Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
                        [Name des Hosters, z.B. Vercel Inc.]<br />
                        [Adresse des Hosters]<br />
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.heading}>3. Allgemeine Hinweise und Pflichtinformationen</h2>
                    <h3 className="font-bold mb-2">Datenschutz</h3>
                    <p className={styles.text}>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                    <h3 className="font-bold mb-2">Hinweis zur verantwortlichen Stelle</h3>
                    <p className={styles.text}>
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                        Restaurant Lori GbR<br />
                        Magazinstraße 45<br />
                        90763 Fürth<br /><br />
                        Telefon: 0911 96589761<br />
                        E-Mail: LoriGbr.info@gmail.com
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.heading}>4. Datenerfassung auf dieser Website</h2>
                    <h3 className="font-bold mb-2">Kontaktanfragen (E-Mail, Telefon)</h3>
                    <p className={styles.text}>
                        Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                    <p className={styles.text}>
                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.heading}>5. Plugins und Tools</h2>
                    <h3 className="font-bold mb-2">Google Maps</h3>
                    <p className={styles.text}>
                        Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                    </p>
                    <p className={styles.text}>
                        Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
                    </p>
                    <p className={styles.text}>
                        Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
