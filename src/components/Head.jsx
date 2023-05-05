import {BsFillCaretRightFill} from 'react-icons/bs'
import { useContext } from 'react';
import { fontContext } from '../context/FontContext';
import useSound from 'use-sound'

function Head() {
 const {data} = useContext(fontContext)
 const {word, phonetic, phonetics} = data[0]
 let audio = phonetics.find(el => el.audio && el).audio
 const fontType = JSON.parse(localStorage.fontType )

 const [playSound] = useSound(audio)

  return (
    <div className="flex w-full justify-between items-center">
        <div className="">
            <h2 className={`mb-[9px] text-[32px] md:text-[64px] font-${fontType} font-bold text-black-20 dark:text-white`}>{word}</h2>
            <span className={`text-primary text-lg md:text-2xl font-normal font-${fontType}`}>{phonetic}</span>
        </div>
        <button onClick={() => playSound()} className=" w-12 h-12 md:w-[75px] md:h-[75px] rounded-full flex items-center justify-center bg-primary/25 outline-none border-none cursor-pointer">
           <BsFillCaretRightFill className='text-primary w-[13px] h-[13px] md:w-[21px] md:h-[21px]'/>
        </button>
    </div>
  )
}

export default Head