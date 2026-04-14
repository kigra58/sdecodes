import Layout from './components/common/Layout'
import HomeHero from './components/HomeHero'
import AboutSkills from './components/AboutSkills'
import ProjectsPortfolio from './components/ProjectsPortfolio'
import ExperienceContact from './components/ExperienceContact'
import TrendingRepoCard from './components/common/TrendingRepoCard'
import { ThemeProvider } from './contexts/ThemeContext'
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HomeHero />
        <AboutSkills />
        <ProjectsPortfolio />
        <ExperienceContact />
        <TrendingRepoCard />
      </Layout>
    </ThemeProvider>
  )
}

export default App
