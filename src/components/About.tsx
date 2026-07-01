import type { UserProfile } from '../types';
import meImg from '../assets/images/me.png';
import novelImg from '../assets/images/novel.png';
import iemImg from '../assets/images/iem.png';
import immoImg from '../assets/images/immo.png';

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
            <div className="w-[92%] max-w-[1536px] mx-auto">
                {/* Section Title */}
                <div className="text-center mb-8 md:mb-16">
                    <p className="text-neon-cyan text-xs md:text-sm uppercase tracking-widest mb-2">
                        Get To Know
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">
                        About Me
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left - Image/Card */}
                    <div className="flex justify-center relative">
                        <div className="w-full max-w-[320px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[600px] relative z-10">
                            <div className="w-full h-full rounded-2xl overflow-hidden transform -translate-y-4 md:-translate-y-8">
                                <img
                                    src={meImg}
                                    alt="Muhammad Akbar Velayati"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            
                            {/* Floating Hobby Icons */}
                            <img 
                                src={novelImg} 
                                alt="Novel Book" 
                                className="absolute top-12 -left-8 md:top-24 md:-left-14 w-20 md:w-32 h-auto drop-shadow-2xl z-20 animate-bounce hover:scale-110 transition-transform cursor-pointer rotate-12" 
                                style={{ animationDuration: '3s' }}
                                title="Reading Novels" 
                            />
                            <img 
                                src={iemImg} 
                                alt="IEM/Headphone" 
                                className="absolute top-1/2 right-6 sm:right-10 md:right-14 lg:right-20 w-20 md:w-32 h-auto drop-shadow-2xl z-20 animate-bounce hover:scale-110 transition-transform cursor-pointer rotate-12" 
                                style={{ animationDuration: '4s' }}
                                title="Listening to Music" 
                            />
                            <img 
                                src={immoImg} 
                                alt="MLBB Immortal Rank" 
                                className="absolute -bottom-4 left-8 md:-bottom-8 md:left-12 w-24 md:w-36 h-auto drop-shadow-2xl z-20 animate-bounce hover:scale-110 transition-transform cursor-pointer" 
                                style={{ animationDuration: '3.5s' }}
                                title="Playing Games" 
                            />
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
                        <p className="text-text-secondary text-sm md:text-base mb-4 md:mb-6 leading-relaxed hidden md:block">
                            I specialize in crafting pixel-perfect, engaging, and accessible digital experiences. Whether it's a simple landing page or a complex web application, I bring creativity and technical expertise to every project.
                        </p>
                        <p className="text-text-secondary text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                            Beyond coding, I'm an avid reader of novels, I enjoy immersing myself in music, and I love spending my free time playing competitive games like MLBB.
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
                            Let's Talk
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
