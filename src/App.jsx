import './App.css'
import Bridge from './Components/Bridge/Bridge.jsx'
import HeroPage from './Components/Heropage/Hero.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import Pagethree from './Components/Pagethree/Pagethree.jsx'
import Pagetwo from './Components/Pagetwo/Pagetwo.jsx'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <HeroPage />
        <Bridge />
        <Pagetwo />
        <Pagethree />
      </main>
    </>
  )
}

export default App
