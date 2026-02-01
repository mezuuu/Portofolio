import type { UserProfile } from '../types';

interface AboutProps {
    profile: UserProfile;
}

export default function About({ profile }: AboutProps) {
    const stats = [
        { label: 'Years Experience', value: '3+' },
        { label: 'Projects Completed', value: '10+' },
        { label: 'Technologies', value: '10+' },
    ];

    return (
        <section id="about" className="py-12 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-8 md:mb-16">
                    <p className="text-neon-cyan text-xs md:text-sm uppercase tracking-widest mb-2">Get To Know</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">About Me</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left - Image/Card */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-dark-border overflow-hidden card-hover">
                                <div className="absolute inset-0 bg-dark-card/50 backdrop-blur-sm"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 text-center">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center mb-3 md:mb-4 neon-glow-cyan">
                                        <svg className="w-6 h-6 md:w-8 md:h-8 text-dark-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">Junior Full Stack Developer</h3>
                                    <p className="text-text-secondary text-xs md:text-sm">
                                        Building modern web applications with cutting-edge technologies
                                    </p>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full rounded-2xl border border-neon-cyan/30 -z-10"></div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div>
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">
                            A passionate developer based in {profile.location}
                        </h3>
                        <p className="text-text-secondary text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                            {profile.bio}
                        </p>
                        <p className="text-text-secondary text-sm md:text-base mb-6 md:mb-8 leading-relaxed hidden md:block">
                            I specialize in crafting pixel-perfect, engaging, and accessible digital experiences.
                            Whether it&apos;s a simple landing page or a complex web application, I bring creativity
                            and technical expertise to every project.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="p-2 md:p-4 rounded-xl bg-dark-card border border-dark-border text-center card-hover"
                                >
                                    <span className="block text-lg md:text-2xl font-bold gradient-text mb-0.5 md:mb-1">{stat.value}</span>
                                    <span className="text-text-muted text-[10px] md:text-sm leading-tight block">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan text-neon-cyan text-sm md:text-base hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300"
                        >
                            Let&apos;s Talk
                            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
