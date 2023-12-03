import './App.css'
import Bridge from './Components/Bridge/Bridge.jsx'
import HeroPage from './Components/Heropage/Hero.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <HeroPage />
        <Bridge />
      </main>
    </>
  )
}

export default App
