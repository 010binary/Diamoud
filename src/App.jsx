import React from 'react'
import './App.css'
import HeroPage from './Components/Heropage/Hero.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
const Bridge = React.lazy(() => import('./Components/Bridge/Bridge.jsx'))
const Pagethree = React.lazy(() => import('./Components/Pagethree/Pagethree.jsx'))
const Pagetwo = React.lazy(() => import('./Components/Pagetwo/Pagetwo.jsx'))
const Pagefour = React.lazy(() => import('./Components/Pagefour/Pagefour.jsx'))
const Subscribe = React.lazy(() => import('./Components/suscribe/Subscribe.jsx'))
const Footer = React.lazy(() => import('./Components/footer/Footer.jsx'))


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
        <Pagefour />
        <Subscribe />
        <Footer />
      </main>
    </>
  )
}

export default App
