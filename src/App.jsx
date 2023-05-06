
import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import { fontContext } from './context/FontContext'



function App() {

  const [data, setData] = useState([])
  const [font, setFont] = useState(() => {
    return localStorage.fontType? JSON.parse(localStorage.fontType): {text:"Mono", value:"Inconsolata"}
  })
  
  if(!localStorage.fontType){
    localStorage.fontType = JSON.stringify(font)
  }

  const handleFontType = (type) => {
      switch(type){
        case "Mono":
          setFont({text:"Mono", value:"Inconsolata"})
          localStorage.setItem("fontType", JSON.stringify({text:"Mono", value:"Inconsolata"}))
          break
        case "Serif":
          setFont({text:"Serif", value:"Lora"})
          localStorage.setItem("fontType", JSON.stringify({text:"Serif", value:"Lora"}))
          break
        case "Sans Serif":
          setFont({text:"Sans Serif", value:"Inter"})
          localStorage.setItem("fontType", JSON.stringify({text:"Sans Serif", value:"Inter"}))
          break
      }
  }


  useEffect(() => {
    if(localStorage.fontType){
      localStorage.fontType = JSON.stringify(font)
      let txt = JSON.parse(localStorage.fontType)
      document.body.style.fontFamily = txt.value
    }
  }, [font])

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.toggle = true
    } 
  }, [])

  return (
    <div >
      <fontContext.Provider value={{handleFontType, data, setData, font}}>
        <Header/>
        <Hero/>
      </fontContext.Provider>
    </div>
  )
}

export default App
