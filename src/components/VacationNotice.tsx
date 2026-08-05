'use client';

import { useSyncExternalStore } from 'react';
import styles from './VacationNotice.module.css';
import {
    getVacationStatus,
    vacationEnd,
    vacationReopen,
    vacationStart,
    type VacationStatus,
} from '@/config/vacation';

type Props = {
    /** 'banner' = breiter Balken unter dem Header, 'inline' = Hinweisbox im Text */
    variant?: 'banner' | 'inline';
};

/** Der Status ändert sich während einer Sitzung nicht – kein Abo nötig. */
const noopSubscribe = () => () => { };
const getClientStatus = (): VacationStatus => getVacationStatus();
const getServerStatus = (): VacationStatus => 'over';

export default function VacationNotice({ variant = 'banner' }: Props) {
    // Auswertung erst im Browser, damit der Hinweis auch bei statisch
    // gebauten Seiten nach dem letzten Urlaubstag automatisch verschwindet.
    const status = useSyncExternalStore(noopSubscribe, getClientStatus, getServerStatus);

    if (status === 'over') return null;

    const headline = status === 'ongoing' ? 'Wir sind im Urlaub' : 'Betriebsferien';
    const dates =
        status === 'ongoing'
            ? `Vom ${vacationStart} bis ${vacationEnd} bleibt unser Restaurant geschlossen.`
            : `Vom ${vacationStart} bis ${vacationEnd} bleibt unser Restaurant geschlossen (Urlaub).`;
    const reopen = `Ab dem ${vacationReopen} sind wir wieder wie gewohnt für Sie da.`;

    if (variant === 'inline') {
        return (
            <div className={styles.inline} role="status">
                <span className={styles.headline}>{headline}</span>
                <span className={styles.dates}>{dates}</span>{' '}
                <span className={styles.reopen}>{reopen}</span>
            </div>
        );
    }

    return (
        <div className={styles.banner} role="status">
            <p className={styles.bannerInner}>
                <span className={styles.headline}>{headline}</span>
                <span className={styles.dates}>{dates}</span>
                <span className={styles.reopen}>{reopen}</span>
            </p>
        </div>
    );
}
