
import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import { fontContext } from './context/FontContext'



function App() {

  const [data, setData] = useState([])
  
  if(!localStorage.fontType){
    localStorage.fontType = JSON.stringify({text:"Mono", value:"mono"})
  }

  const handleFontType = (type) => {
      switch(type){
        case "Mono":
          localStorage.fontType = JSON.stringify({text:"Mono", value:"mono"})
          break
        case "Serif":
          localStorage.fontType = JSON.stringify({text:"Serif", value:"serif"})
          break
        case "Sans Serif":
          localStorage.fontType = JSON.stringify({text:"Sans Serif", value:"sansSerif"})
          break
      }
  }

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.toggle = true
    } 
  }, [])

  return (
    <div >
      <fontContext.Provider value={{handleFontType, data, setData}}>
        <Header/>
        <Hero/>
      </fontContext.Provider>
    </div>
  )
}

export default App
