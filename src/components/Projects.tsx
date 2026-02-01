import { useState, useEffect } from 'react';
import type { Project } from '../types';

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile view
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // 2 projects on mobile, 3 on desktop
    const projectsPerPage = isMobile ? 2 : 3;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    // Reset index when switching between mobile/desktop
    useEffect(() => {
        setCurrentIndex(0);
    }, [isMobile]);

    const getRepoUrl = (project: Project): string | null => {
        const repoLink = project.links.find(link => link.type === 'repo');
        return repoLink?.url || null;
    };

    const handleProjectClick = (project: Project) => {
        const repoUrl = getRepoUrl(project);
        if (repoUrl) {
            window.open(repoUrl, '_blank', 'noopener,noreferrer');
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const visibleProjects = projects.slice(
        currentIndex * projectsPerPage,
        currentIndex * projectsPerPage + projectsPerPage
    );

    return (
        <section id="projects" className="py-12 md:py-20 px-4 bg-dark-card/30">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-8 md:mb-16">
                    <p className="text-neon-cyan text-xs md:text-sm uppercase tracking-widest mb-2">My Recent Work</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">Creative Projects</h2>
                    <p className="text-text-muted text-sm md:text-base mt-3 md:mt-4 max-w-2xl mx-auto px-4">
                        Tap on any project to view the source code on GitHub
                    </p>
                </div>

                {/* Projects Carousel Container */}
                <div className="relative">
                    {/* Navigation Buttons - Visible on all screens */}
                    {totalPages > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-12 z-10 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-dark-card/90 border border-dark-border flex items-center justify-center text-text-secondary hover:text-neon-cyan hover:border-neon-cyan hover:neon-glow-cyan transition-all duration-300"
                                aria-label="Previous projects"
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-12 z-10 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-dark-card/90 border border-dark-border flex items-center justify-center text-text-secondary hover:text-neon-cyan hover:border-neon-cyan hover:neon-glow-cyan transition-all duration-300"
                                aria-label="Next projects"
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Projects Grid with Animation */}
                    <div className="overflow-hidden px-8 md:px-12 lg:px-16">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 transition-all duration-500 ease-in-out">
                            {visibleProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group relative bg-dark-card rounded-xl md:rounded-2xl overflow-hidden border border-dark-border card-hover cursor-pointer animate-fadeIn"
                                    onClick={() => handleProjectClick(project)}
                                >
                                    {/* Project Image */}
                                    <div className="relative aspect-[4/3] md:aspect-video overflow-hidden">
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="flex items-center space-x-4">
                                                {getRepoUrl(project) && (
                                                    <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-neon-cyan text-dark-bg flex items-center justify-center neon-glow-cyan">
                                                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        {/* Featured Badge */}
                                        {project.isFeatured && (
                                            <div className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-neon-purple/90 text-white text-[10px] md:text-xs font-medium">
                                                Featured
                                            </div>
                                        )}
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-3 md:p-6">
                                        <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-neon-cyan transition-colors line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-text-muted text-xs md:text-sm mb-2 md:mb-4 line-clamp-2 hidden md:block">
                                            {project.description}
                                        </p>

                                        {/* Tags - Hidden on mobile */}
                                        <div className="hidden md:flex flex-wrap gap-2 mb-4">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 rounded-md bg-dark-border text-text-secondary text-xs"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Tech Stack Icons */}
                                        <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                                            {project.techStack.slice(0, isMobile ? 2 : 4).map((tech) => (
                                                <span
                                                    key={tech.id}
                                                    className="px-1.5 py-0.5 md:px-2 md:py-1 rounded-md border border-neon-cyan/30 text-neon-cyan text-[10px] md:text-xs"
                                                >
                                                    {tech.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Click hint */}
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-neon-cyan to-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    {totalPages > 1 && (
                        <div className="flex justify-center gap-2 mt-6 md:mt-8">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-neon-cyan neon-glow-cyan w-6 md:w-8'
                                        : 'bg-dark-border hover:bg-text-muted'
                                        }`}
                                    aria-label={`Go to page ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
