
import Layout from './components/common/Layout';
import HomeHero from './components/HomeHero';
import TrendingRepoCard from './components/common/TrendingRepoCard';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

import React, { Suspense } from 'react';
const AboutSkills = React.lazy(() => import('./components/AboutSkills'));
const ProjectsPortfolio = React.lazy(() => import('./components/ProjectsPortfolio'));
const ExperienceContact = React.lazy(() => import('./components/ExperienceContact'));


function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HomeHero />
        <Suspense fallback={<div>Loading...</div>}>
          <AboutSkills />
          <ProjectsPortfolio />
          <ExperienceContact />
        </Suspense>
        <TrendingRepoCard />
      </Layout>
    </ThemeProvider>
  );
}

export default App
