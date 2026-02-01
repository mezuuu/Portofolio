// TypeScript interfaces for Portfolio

export interface UserProfile {
    id: string;
    fullName: string;
    brandName: string;
    headline: string;
    bio: string;
    location: string;
    avatarUrl: string;
    cvUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Skill {
    id: string;
    name: string;
    level: number; // 0-100 percentage
    category: string;
}

export interface Contact {
    id: string;
    profileId: string;
    platform: 'whatsapp' | 'instagram' | 'github' | 'email' | 'linkedin';
    label: string;
    value: string;
    isPrimary: boolean;
}

export interface Education {
    id: string;
    profileId: string;
    institution: string;
    major: string;
    degree: string;
    startYear: number;
    endYear: number | null;
    description: string;
    locationUrl?: string;
}

export interface Project {
    id: string;
    profileId: string;
    title: string;
    slug: string;
    description: string;
    thumbnail: string;
    isFeatured: boolean;
    createdAt: Date;
    updatedAt: Date;
    tags: string[];
    links: ProjectLink[];
    techStack: TechStack[];
}

export interface ProjectLink {
    id: string;
    projectId: string;
    type: 'repo' | 'github' | 'repository' | 'demo' | 'docs' | 'video';
    label: string;
    url: string;
}

export interface TechStack {
    id: string;
    name: string;
    type: 'frontend' | 'backend' | 'tools' | 'database';
}

// Portfolio Data Interface
export interface PortfolioData {
    profile: UserProfile;
    skills: Skill[];
    contacts: Contact[];
    education: Education[];
    projects: Project[];
    techStack: TechStack[];
}
