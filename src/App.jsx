import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Banner from './components/Banner'
import Payment from './components/PaymentMetod'
import Cards from './components/Card'
import ContainerCard from './components/CardContainer'
import MeliAds from './components/MeliAds'
import CardBeneficios from './components/CardsBeneficios.jsx'
import CardBenSection from './components/CardBenSection.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="AllConten">
      <NavBar />
      <Banner />
      <Payment />
      <ContainerCard/>
      <MeliAds />
      <CardBenSection/>
      </div>
    </>
  )
}

export default App
