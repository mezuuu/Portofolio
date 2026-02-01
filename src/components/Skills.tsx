import { useEffect, useRef, useState } from 'react';
import type { Skill } from '../types';

interface SkillsProps {
    skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getLevelColor = (level: number): string => {
        if (level >= 80) return 'from-neon-cyan to-neon-purple';
        if (level >= 60) return 'from-neon-purple to-neon-pink';
        return 'from-neon-green to-neon-cyan';
    };

    const getLevelLabel = (level: number): string => {
        if (level >= 80) return 'advanced';
        if (level >= 60) return 'intermediate';
        return 'beginner';
    };

    return (
        <section ref={sectionRef} id="skills" className="py-12 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-8 md:mb-16">
                    <p className="text-neon-cyan text-xs md:text-sm uppercase tracking-widest mb-2">My Abilities</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">Technical Skills</h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
                    {skills.map((skill, index) => {
                        const colorClass = getLevelColor(skill.level);
                        const levelLabel = getLevelLabel(skill.level);

                        return (
                            <div
                                key={skill.id}
                                className="p-4 md:p-6 rounded-xl bg-dark-card border border-dark-border card-hover"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-between mb-2 md:mb-3">
                                    <h3 className="text-base md:text-lg font-semibold text-white">{skill.name}</h3>
                                    <span className="text-xs md:text-sm text-text-secondary capitalize">{levelLabel}</span>
                                </div>

                                {/* Progress Bar */}
                                <div className="relative h-2 md:h-3 bg-dark-border rounded-full overflow-hidden">
                                    <div
                                        className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${colorClass} transition-all duration-1000 ease-out`}
                                        style={{
                                            width: isVisible ? `${skill.level}%` : '0%',
                                            boxShadow: isVisible ? '0 0 10px rgba(0, 243, 255, 0.5)' : 'none'
                                        }}
                                    />
                                </div>

                                {/* Percentage */}
                                <div className="mt-1.5 md:mt-2 text-right">
                                    <span className="text-xs md:text-sm text-neon-cyan font-medium">{skill.level}%</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Skills */}
                <div className="mt-10 md:mt-16 text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Other Technologies I Work With</h3>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {['Git', 'REST API', 'Figma', 'VS Code', 'Google Colab', 'Antigravity'].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-dark-card border border-dark-border text-text-secondary text-sm md:text-base hover:border-neon-cyan hover:text-neon-cyan transition-colors duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
