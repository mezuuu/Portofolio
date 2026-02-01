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

function App() {
  const { profile, skills, projects, education, contacts, techStack } = portfolioData;

  return (
    <div className="min-h-screen bg-dark-bg">
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

export default App;
