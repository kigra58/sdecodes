import Layout from './components/common/Layout'
import HomeHero from './components/HomeHero'
import AboutSkills from './components/AboutSkills'
import ProjectsPortfolio from './components/ProjectsPortfolio'
import ExperienceContact from './components/ExperienceContact'
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
      </Layout>
    </ThemeProvider>
  )
}

export default App
