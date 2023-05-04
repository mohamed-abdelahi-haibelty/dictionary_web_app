import { IoIosArrowDown } from "react-icons/io";
import { fontContext } from '../context/FontContext';
import { useContext } from 'react';


function FontSwitcher() {
  const {fontType} = useContext(fontContext)
  return (
      <div className={`relative flex dark:text-white items-center gap-4 text-sm md:text-lg font-${fontType.value} font-bold text-black-20 leading-6`}>
        <span>{fontType.text}</span>
        <IoIosArrowDown className="dark:text-primary"/>
      </div>
  )
}

export default FontSwitcher