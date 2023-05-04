
import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import { fontContext } from './context/FontContext'

function App() {
  
  const [fontType, setFontType] = useState({text:"Mono", value:"mono"})

  const handleFontType = (type) => {
      switch(type){
        case "Mono":
          setFontType({text:"Mono", value:"mono"})
          break
        case "Serif":
          setFontType({text:"Serif", value:"serif"})
          break
        case "Sans Serif":
          setFontType({text:"Sans Serif", value:"sansSerif"})
          break
      }
  }



  return (
    <div >
      <fontContext.Provider value={{fontType, handleFontType}}>
        <Header/>
      </fontContext.Provider>
    </div>
  )
}

export default App
