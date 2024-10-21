import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Cards from './components/Cards/Cards'
import Calories from './components/Calories/Calories'
import Footer from './components/Footer/Footer'

function App() {
  const [calories, setCalories] = useState([]);
  const handleCook = card =>{
    const newCalories = [...calories, card]; 
    setCalories(newCalories); 
  }

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <div className='md:flex'>
    <Cards handleCook={handleCook}></Cards>
    <Calories calories={calories}></Calories>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
