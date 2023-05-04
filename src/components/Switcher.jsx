import IconoirBook from '../assets/iconoirBook.svg'
import FontSwitcher from './fontSwitcher'
import ThemSwitcher from './ThemSwitcher'
import Model from './Model'
import { fontContext } from '../context/FontContext';
import { useContext } from 'react';

import { useState } from 'react'

function Switcher() {

  const [showPopUp, setShowPopUp] = useState(false)
  const fonts = ['Mono', "Sans Serif", "Serif"]
  const {handleFontType} = useContext(fontContext)

  return (
    <div>
        <div className="flex items-center justify-between">
            <img src={IconoirBook} alt="book svg" />
            <div className="flex items-center">
                <div className="pr-4 md:pr-[26px] relative cursor-pointer" onClick={() => setShowPopUp(prevShowPopUp => !prevShowPopUp)}>
                    <FontSwitcher/>
                   {showPopUp && ( 
                        <div className="absolute right-0 top-8 md:top-10">
                            <Model>
                                {fonts.map((font, indx) => <span onClick={() => handleFontType(font)} key={indx} >{font}</span>)}
                            </Model>
                        </div>)
                    }
                </div>
                <div className="pl-4 md:pl-[26px] border-l border-gray-20">
                    <ThemSwitcher/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Switcher