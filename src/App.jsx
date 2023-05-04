
import './App.css'

import Header from './components/Header'
import { fontContext } from './context/FontContext'

function App() {
  
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



  return (
    <div >
      <fontContext.Provider value={{handleFontType}}>
        <Header/>
      </fontContext.Provider>
    </div>
  )
}

export default App
