import { useState, useRef } from 'react';
import type { Contact as ContactType } from '../types';
import emailjs from '@emailjs/browser';

interface ContactProps {
    contacts: ContactType[];
}

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_tmue4nl';
const EMAILJS_TEMPLATE_ID = 'template_ic6q0io';
const EMAILJS_PUBLIC_KEY = 'zfP-FYsNygE4iXPHe';

export default function Contact({ contacts }: ContactProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: 'muhammadakbarvelayati123@gmail.com',
                },
                EMAILJS_PUBLIC_KEY
            );

            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            console.error('EmailJS Error:', err);
            setError('Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via email.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const emailContact = contacts.find(c => c.platform === 'email');

    return (
        <section id="contact" className="py-12 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-8 md:mb-16">
                    <p className="text-neon-cyan text-xs md:text-sm uppercase tracking-widest mb-2">Get In Touch</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">Contact Me</h2>
                    <p className="text-text-muted text-sm md:text-base mt-3 md:mt-4 max-w-2xl mx-auto px-4">
                        Have a project in mind? Feel free to reach out!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6">Let&apos;s talk about your project</h3>
                        <p className="text-text-secondary text-sm md:text-base mb-6 md:mb-8 leading-relaxed hidden md:block">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        {/* Contact Cards */}
                        <div className="space-y-3 md:space-y-4">
                            {emailContact && (
                                <a
                                    href={`mailto:${emailContact.value}`}
                                    className="flex items-center p-3 md:p-4 rounded-xl bg-dark-card border border-dark-border card-hover"
                                >
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mr-3 md:mr-4">
                                        <svg className="w-5 h-5 md:w-6 md:h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-text-muted text-xs md:text-sm">Email</p>
                                        <p className="text-white text-sm md:text-base font-medium truncate max-w-[200px] md:max-w-none">{emailContact.value}</p>
                                    </div>
                                </a>
                            )}

                            <div className="flex items-center p-3 md:p-4 rounded-xl bg-dark-card border border-dark-border">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center mr-3 md:mr-4">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-text-muted text-xs md:text-sm">Location</p>
                                    <p className="text-white text-sm md:text-base font-medium">Surakarta, Central Java</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-4 md:p-8 rounded-2xl bg-dark-card border border-dark-border">
                        {submitted ? (
                            <div className="text-center py-8 md:py-12">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-neon-green/20 border border-neon-green flex items-center justify-center mx-auto mb-3 md:mb-4 neon-glow-cyan">
                                    <svg className="w-6 h-6 md:w-8 md:h-8 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-text-muted text-sm md:text-base">Thank you! I&apos;ll get back to you soon.</p>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                {error && (
                                    <div className="p-3 md:p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs md:text-sm">
                                        {error}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs md:text-sm font-medium text-text-secondary mb-1.5 md:mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-dark-bg border border-dark-border text-white text-sm md:text-base placeholder-text-muted focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors"
                                            placeholder="Mezuu"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs md:text-sm font-medium text-text-secondary mb-1.5 md:mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-dark-bg border border-dark-border text-white text-sm md:text-base placeholder-text-muted focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors"
                                            placeholder="Mezuu@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-text-secondary mb-1.5 md:mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-dark-bg border border-dark-border text-white text-sm md:text-base placeholder-text-muted focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs md:text-sm font-medium text-text-secondary mb-1.5 md:mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-dark-bg border border-dark-border text-white text-sm md:text-base placeholder-text-muted focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 md:py-4 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg text-sm md:text-base font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed neon-glow-cyan"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
