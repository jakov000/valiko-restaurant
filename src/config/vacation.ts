/**
 * Temporärer Urlaubshinweis (Betriebsferien).
 *
 * Anpassen: Daten unten ändern.
 * Vorzeitig ausblenden: `enabled` auf `false` setzen.
 * Der Hinweis verschwindet nach dem letzten Urlaubstag automatisch von selbst.
 */
export const VACATION = {
    enabled: true,
    /** Erster Urlaubstag – ab hier ist geschlossen (YYYY-MM-DD) */
    start: '2026-08-08',
    /** Letzter Urlaubstag – an diesem Tag ist noch geschlossen (YYYY-MM-DD) */
    end: '2026-09-09',
};

export type VacationStatus = 'upcoming' | 'ongoing' | 'over';

/** Parst ein ISO-Datum als lokale Mitternacht (nicht UTC). */
function parseLocalDate(iso: string): Date {
    const [year, month, day] = iso.split('-').map(Number);
    return new Date(year, month - 1, day);
}

function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function formatDe(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}.${date.getFullYear()}`;
}

export const vacationStart = formatDe(parseLocalDate(VACATION.start));
export const vacationEnd = formatDe(parseLocalDate(VACATION.end));
/** Erster Tag, an dem wieder geöffnet ist (letzter Urlaubstag + 1). */
export const vacationReopen = formatDe(addDays(parseLocalDate(VACATION.end), 1));

export function getVacationStatus(now: Date = new Date()): VacationStatus {
    if (!VACATION.enabled) return 'over';

    const start = parseLocalDate(VACATION.start);
    const reopen = addDays(parseLocalDate(VACATION.end), 1);

    if (now < start) return 'upcoming';
    if (now < reopen) return 'ongoing';
    return 'over';
}
