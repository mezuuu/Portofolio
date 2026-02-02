import type { PortfolioData } from '../types';

// Import images from assets
// Uncomment and use these when you add actual images:
import profileImg from '../assets/images/profile.png';
import projectCVBuilder from '../assets/images/cv-builder.png';
// import projectDjangoAPI from '../assets/images/project-django-api.png';
// import projectCVBuilder from '../assets/images/project-cv-builder.png';
import projectPortfolio from '../assets/images/porto.png';
// import projectUnityGame from '../assets/images/project-unity-game.png';
// import projectBlender from '../assets/images/project-blender.png';

// Placeholder images - using external placeholders until actual images are available
const projectPlanetAR = 'https://placehold.co/800x600/1a1a2e/16213e?text=Planet+AR';
const projectBlender = 'https://placehold.co/800x600/1a1a2e/16213e?text=Blender+3D';

export const portfolioData: PortfolioData = {
    profile: {
        id: '1',
        fullName: 'Muhammad Akbar Velayati',
        brandName: 'MezuuDev',
        headline: 'Junior Full Stack Developer',
        bio: 'Informatics Engineering student at Universitas Muhammadiyah Surakarta, focused on problem-solving and software development. Enthusiastic programmer with a strong passion for web application and game development. Experienced in building full-stack web solutions using ReactJS and Django REST Framework, while actively exploring interactive media through Unity and Blender.',
        location: 'Surakarta, Central Java',
        avatarUrl: profileImg,
        cvUrl: '/cv.pdf',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
    },

    skills: [
        // Front-End Skills
        { id: '1', name: 'HTML', level: 88, category: 'Front-End' },
        { id: '2', name: 'Tailwind CSS', level: 85, category: 'Front-End' },
        { id: '3', name: 'JavaScript', level: 88, category: 'Front-End' },
        // Back-End Skills
        { id: '4', name: 'Django REST', level: 70, category: 'Back-End' },
        { id: '5', name: 'Python', level: 75, category: 'Back-End' },
        // Database
        { id: '6', name: 'MySQL', level: 70, category: 'Database' },
        // Game Development
        { id: '7', name: 'Unity Engine', level: 50, category: 'Game Dev' },
        { id: '8', name: 'Blender', level: 45, category: 'Game Dev' },
    ],

    contacts: [
        { id: '1', profileId: '1', platform: 'github', label: 'GitHub', value: 'https://github.com/mezuuu', isPrimary: true },
        { id: '2', profileId: '1', platform: 'linkedin', label: 'LinkedIn', value: 'https://www.linkedin.com/in/muhammad-akbar-velayati-875581398', isPrimary: false },
        { id: '3', profileId: '1', platform: 'email', label: 'Email', value: 'muhammadakbarvelayati123@gmail.com', isPrimary: true },
        { id: '4', profileId: '1', platform: 'instagram', label: 'Instagram', value: 'https://www.instagram.com/ini_akbaaar/', isPrimary: false },
        { id: '5', profileId: '1', platform: 'whatsapp', label: 'WhatsApp', value: '+6281392315858', isPrimary: false },
    ],

    education: [
        {
            id: '1',
            profileId: '1',
            institution: 'SMA Negeri 1 Bangsri',
            major: 'Language and Literature',
            degree: 'High School',
            startYear: 2020,
            endYear: 2023,
            description: 'SMA Negeri 1 Bangsri is a high school located in Bangsri, Jepara, Central Java, Indonesia.',
            locationUrl: 'https://maps.google.com/?q=SMA+Negeri+1+Bangsri+Jepara',
        },
        {
            id: '2',
            profileId: '1',
            institution: 'Universitas Muhammadiyah Surakarta',
            major: 'Informatics Engineering',
            degree: 'Bachelor',
            startYear: 2023,
            endYear: null,
            description: 'Relevant coursework: Web Development, Software Engineering, Algorithm Design, and Game Programming.',
            locationUrl: 'https://maps.google.com/?q=Universitas+Muhammadiyah+Surakarta',
        },
    ],

    projects: [
        {
            id: '1',
            profileId: '1',
            title: 'CV Builder Application',
            slug: 'cv-builder',
            description: 'A specialized CV builder application and talent platform designed to showcase student portfolios. Features include dynamic and responsive user interfaces, CRUD functionalities for student profiles, skills, and work experiences.',
            thumbnail: projectCVBuilder,
            isFeatured: true,
            createdAt: new Date('2024-01-15'),
            updatedAt: new Date('2024-01-15'),
            tags: ['Web App', 'Full Stack', 'CV Builder'],
            links: [
                { id: '1', projectId: '1', type: 'repo', label: 'GitHub', url: 'https://github.com/mezuuu/Aplikasi-Talenta-Mahasiswa-CV-Builder.git' },
            ],
            techStack: [
                { id: '1', name: 'React', type: 'frontend' },
                { id: '2', name: 'Tailwind', type: 'frontend' },
                { id: '3', name: 'Django', type: 'backend' },
            ],
        },
        {
            id: '2',
            profileId: '1',
            title: 'Personal Portfolio Website',
            slug: 'portfolio-website',
            description: 'Modern portfolio website with dark neon theme built using Next.js and Tailwind CSS, featuring responsive design and stunning animations.',
            thumbnail: projectPortfolio,
            isFeatured: false,
            createdAt: new Date('2024-03-15'),
            updatedAt: new Date('2024-03-15'),
            tags: ['Portfolio', 'UI/UX'],
            links: [
                { id: '4', projectId: '4', type: 'repo', label: 'GitHub', url: 'https://github.com/mezuuu/Porto.git' },
            ],
            techStack: [
                { id: '6', name: 'React', type: 'frontend' },
                { id: '2', name: 'Tailwind', type: 'frontend' },
            ],
        },
        {
            id: '3',
            profileId: '1',
            title: 'Planet AR Project',
            slug: 'planet-ar',
            description: 'Interactive game development project using Unity Engine with C# scripting, featuring 3D assets created in Blender.',
            thumbnail: projectPlanetAR,
            isFeatured: false,
            createdAt: new Date('2024-04-01'),
            updatedAt: new Date('2024-04-01'),
            tags: ['AR', '3D Modeling'],
            links: [
                { id: '5', projectId: '5', type: 'repo', label: 'GitHub', url: 'https://github.com/akbarvelayati/unity-game' },
            ],
            techStack: [
                { id: '7', name: 'Unity', type: 'tools' },
                { id: '8', name: 'C#', type: 'backend' },
            ],
        },
        {
            id: '4',
            profileId: '1',
            title: 'Blender 3D Animation',
            slug: 'blender-animation',
            description: '3D Animation projects using Blender for game development and interactive media.',
            thumbnail: projectBlender,
            isFeatured: false,
            createdAt: new Date('2024-04-15'),
            updatedAt: new Date('2024-04-15'),
            tags: ['3D Art', 'Animation'],
            links: [
                { id: '6', projectId: '6', type: 'repo', label: 'GitHub', url: 'https://github.com/akbarvelayati/blender-assets' },
            ],
            techStack: [
                { id: '9', name: 'Blender', type: 'tools' },
            ],
        },
    ],

    techStack: [
        { id: '1', name: 'React', type: 'frontend' },
        { id: '2', name: 'Next.js', type: 'frontend' },
        { id: '3', name: 'Tailwind', type: 'frontend' },
        { id: '4', name: 'Python', type: 'backend' },
        { id: '5', name: 'Django', type: 'backend' },
        { id: '6', name: 'Unity', type: 'tools' },
    ],
};
