import Layout from './components/layout/Layout.tsx';
import Hero from './features/home/Hero.tsx';
import Projects from './features/projects/Projects.tsx';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  );
}

export default App
