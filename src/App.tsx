import './App.css'
import AboutSection from './components/AboutSection'
import FooterSection from './components/FooterSection'
import Header from './components/Header'
import NavBar from './components/NavBar'
import ProjectsSection from './components/ProjectsSection'

function App() {

  return (
    <>
      <NavBar/>
      <main>
        <Header/> 
        <AboutSection/>
        <ProjectsSection/>
      </main>
      <FooterSection/>
    </>
  )
}

export default App
