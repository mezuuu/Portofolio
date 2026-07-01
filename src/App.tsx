import './index.css';
import {
  Navbar,
  Hero,
  About,
  TechStack,
  Projects,
  Skills,
  Education,
  Contact,
  Footer
} from './components';
import { portfolioData } from './data/portfolio';

function AppContent() {
  const { profile, skills, projects, education, contacts, techStack } = portfolioData;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero profile={profile} contacts={contacts} />
        <About profile={profile} />
        <TechStack techStack={techStack} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Education education={education} />
        <Contact contacts={contacts} />
      </main>
      <Footer contacts={contacts} />
    </div>
  );
}

function App() {
  return (
    <AppContent />
  );
}

export default App;
