import React from 'react'
import './App.css'
import HeroPage from './Components/Heropage/Hero.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
const Bridge = React.lazy(() => import('./Components/Bridge/Bridge.jsx'))
const Pagethree = React.lazy(() => import('./Components/Pagethree/Pagethree.jsx'))
const Pagetwo = React.lazy(() => import('./Components/Pagetwo/Pagetwo.jsx'))
//import Pagethree from './Components/Pagethree/Pagethree.jsx'
// import Pagetwo from './Components/Pagetwo/Pagetwo.jsx'
// import Bridge from './Components/Bridge/Bridge.jsx'


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
