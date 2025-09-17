import './App.css'
import AboutSection from './components/AboutSection'
import Header from './components/Header'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <main>
        <Header/> 
        <AboutSection/>
      </main>
      <footer></footer>
    </>
  )
}

export default App
