import type { Education as EducationType } from '../types';

interface EducationProps {
    education: EducationType[];
}

export default function Education({ education }: EducationProps) {
    const handleEducationClick = (edu: EducationType) => {
        if (edu.locationUrl) {
            window.open(edu.locationUrl, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <section id="education" className="py-12 md:py-20 px-4 bg-dark-card/30">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-8 md:mb-16">
                    <p className="text-neon-cyan text-xs md:text-sm uppercase tracking-widest mb-2">My Journey</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">Education</h2>
                    <p className="text-text-muted text-sm md:text-base mt-3 md:mt-4 max-w-2xl mx-auto px-4">
                        Tap on any card to view location on Google Maps
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto">
                    {education.map((edu, index) => (
                        <div key={edu.id} className="relative pl-6 md:pl-8 pb-8 md:pb-12 last:pb-0">
                            {/* Timeline Line */}
                            {index !== education.length - 1 && (
                                <div className="absolute left-[9px] md:left-[11px] top-6 md:top-8 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan to-neon-purple"></div>
                            )}

                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-1.5 md:top-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-dark-bg border-2 border-neon-cyan flex items-center justify-center neon-glow-cyan">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-neon-cyan"></div>
                            </div>

                            {/* Content Card */}
                            <div
                                className={`p-4 md:p-6 rounded-xl bg-dark-card border border-dark-border card-hover ml-2 md:ml-4 ${edu.locationUrl ? 'cursor-pointer' : ''}`}
                                onClick={() => handleEducationClick(edu)}
                            >
                                {/* Year Badge */}
                                <div className="inline-block px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs md:text-sm font-medium mb-3 md:mb-4">
                                    {edu.startYear} - {edu.endYear || 'Present'}
                                </div>

                                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">{edu.degree} in {edu.major}</h3>
                                <h4 className="text-sm md:text-lg text-neon-cyan mb-2 md:mb-3 flex items-center gap-1.5 md:gap-2">
                                    {edu.institution}
                                    {edu.locationUrl && (
                                        <svg className="w-4 h-4 md:w-5 md:h-5 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    )}
                                </h4>
                                <p className="text-text-muted text-xs md:text-base hidden md:block">{edu.description}</p>

                                {/* Location hint - hidden on mobile */}
                                {edu.locationUrl && (
                                    <div className="mt-3 md:mt-4 text-[10px] md:text-xs text-text-muted flex items-center gap-1">
                                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        <span className="hidden md:inline">Click to view on Google Maps</span>
                                        <span className="md:hidden">Tap to view location</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
