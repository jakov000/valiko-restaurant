'use client';

import { useState } from 'react';
import styles from './kontakt.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function KontaktPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '',
        type: 'reservation', // reservation, party, event
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Fehler beim Senden');

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                guests: '',
                type: 'reservation',
                message: ''
            });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <>
            <Header />
            <main className={styles.contactSection}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Kontakt & Reservierung</h1>
                    <p className={styles.subtitle}>
                        Planen Sie einen unvergesslichen Abend bei uns? Ob romantisches Dinner,
                        Familienfeier oder eine große Geburtstagsfeier, bei der Sie das gesamte
                        Restaurant für sich haben möchten – wir machen es möglich.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Ihr Name"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>E-Mail *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="ihre.email@beispiel.de"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Telefonnummer</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Für Rückfragen"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="type" className={styles.label}>Anlass *</label>
                            <select
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="reservation">Tischreservierung</option>
                                <option value="birthday">Geburtstagsfeier</option>
                                <option value="event">Geschlossene Gesellschaft (Ganzes Restaurant)</option>
                                <option value="other">Sonstiges</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="date" className={styles.label}>Gewünschtes Datum</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="guests" className={styles.label}>Anzahl der Personen</label>
                            <input
                                type="number"
                                id="guests"
                                name="guests"
                                min="1"
                                value={formData.guests}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="z.B. 4"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Nachricht / Wünsche</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.textarea}
                                placeholder="Haben Sie besondere Wünsche oder Allergien?"
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                            {status === 'loading' ? 'Wird gesendet...' : 'Anfrage absenden'}
                        </button>

                        {status === 'success' && (
                            <div className={`${styles.statusMessage} ${styles.success}`}>
                                Vielen Dank! Ihre Anfrage wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className={`${styles.statusMessage} ${styles.error}`}>
                                Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut oder rufen Sie uns direkt an.
                            </div>
                        )}
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}
