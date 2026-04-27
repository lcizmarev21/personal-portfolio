import Layout from './components/layout/Layout.tsx';
import Contact from './features/contact/Contact.tsx';
import Hero from './features/home/Hero.tsx';
import Projects from './features/projects/Projects.tsx';
import Skills from './features/skills/Skills.tsx';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App
