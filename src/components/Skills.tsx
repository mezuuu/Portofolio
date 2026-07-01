import { useEffect, useRef, useState } from 'react';
import type { Skill } from '../types';
import { FaHtml5, FaReact, FaPython, FaDatabase, FaUnity, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiDjango, SiMysql, SiBlender, SiTypescript, SiPhp, SiLaravel, SiFlutter } from 'react-icons/si';

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

    const getSkillIcon = (name: string) => {
        const iconName = name.toLowerCase();
        if (iconName.includes('html')) return <FaHtml5 className="text-4xl md:text-5xl text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" />;
        if (iconName.includes('tailwind')) return <SiTailwindcss className="text-4xl md:text-5xl text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />;
        if (iconName.includes('javascript')) return <SiJavascript className="text-4xl md:text-5xl text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />;
        if (iconName.includes('typescript')) return <SiTypescript className="text-4xl md:text-5xl text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />;
        if (iconName.includes('django')) return <SiDjango className="text-4xl md:text-5xl text-green-600 drop-shadow-[0_0_8px_rgba(22,163,74,0.5)]" />;
        if (iconName.includes('python')) return <FaPython className="text-4xl md:text-5xl text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />;
        if (iconName.includes('php')) return <SiPhp className="text-4xl md:text-5xl text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]" />;
        if (iconName.includes('laravel')) return <SiLaravel className="text-4xl md:text-5xl text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />;
        if (iconName.includes('flutter')) return <SiFlutter className="text-4xl md:text-5xl text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />;
        if (iconName.includes('mysql')) return <SiMysql className="text-4xl md:text-5xl text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" />;
        if (iconName.includes('unity')) return <FaUnity className="text-4xl md:text-5xl text-gray-200 drop-shadow-[0_0_8px_rgba(229,231,235,0.5)]" />;
        if (iconName.includes('blender')) return <SiBlender className="text-4xl md:text-5xl text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" />;
        if (iconName.includes('react')) return <FaReact className="text-4xl md:text-5xl text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />;
        if (iconName.includes('node')) return <FaNodeJs className="text-4xl md:text-5xl text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />;
        return <FaDatabase className="text-4xl md:text-5xl text-gray-400 drop-shadow-[0_0_8px_rgba(156,163,175,0.5)]" />;
    };

    return (
        <section ref={sectionRef} id="skills" className="py-12 md:py-20 px-4">
            <div className="w-[92%] max-w-[1536px] mx-auto">
                {/* Section Title */}
                <div className="text-center mb-8 md:mb-16">
                    <p className="text-neon-cyan text-xs md:text-sm uppercase tracking-widest mb-2">
                        My Abilities
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">
                        Technical Skills
                    </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.id}
                            className={`p-4 md:p-6 rounded-xl bg-dark-card border border-dark-border flex flex-col items-center justify-center gap-3 md:gap-4 transition-all duration-500 hover:-translate-y-2 hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <div className="transform transition-transform duration-300 hover:scale-110">
                                {getSkillIcon(skill.name)}
                            </div>
                            <div className="text-center">
                                <h3 className="text-sm md:text-base font-semibold text-white mb-1">{skill.name}</h3>
                                <span className="text-xs text-text-secondary capitalize px-2 py-0.5 rounded-full bg-dark-bg border border-dark-border">
                                    {skill.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills */}
                <div className="mt-12 md:mt-20 text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-6 md:mb-8">
                        Other Technologies I Work With
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {['Git', 'REST API', 'Figma', 'VS Code', 'Google Colab', 'Antigravity'].map((tech, index) => (
                            <div
                                key={tech}
                                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-lg bg-dark-card border border-dark-border text-text-secondary text-sm md:text-base hover:border-neon-purple hover:text-neon-purple hover:shadow-[0_0_10px_rgba(188,19,254,0.2)] transition-all duration-300 cursor-default ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                                style={{ transitionDelay: `${(skills.length * 50) + (index * 50)}ms` }}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
