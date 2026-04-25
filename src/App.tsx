import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomeHero from './components/HomeHero';
import TrendingRepoCard from './components/common/TrendingRepoCard';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';
import './components/leetcode/leetcode.css';

const AboutSkills = React.lazy(() => import('./components/AboutSkills'));
const ProjectsPortfolio = React.lazy(() => import('./components/ProjectsPortfolio'));
const ExperienceContact = React.lazy(() => import('./components/ExperienceContact'));
const LeetcodePage = React.lazy(() => import('./components/leetcode/LeetcodePage'));

const HomePage = () => (
  <>
    <HomeHero />
    <Suspense fallback={<div>Loading...</div>}>
      <AboutSkills />
      <ProjectsPortfolio />
      <ExperienceContact />
    </Suspense>
    <TrendingRepoCard />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/leetcode"
            element={
              <Suspense fallback={<div className="px-4 py-16 text-center">Loading...</div>}>
                <LeetcodePage />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App
