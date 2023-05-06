import { IoIosArrowDown } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { fontContext } from "../context/FontContext";


function FontSwitcher() {
  const {font} = useContext(fontContext)
  const [title, setTitle] = useState(font.text)

  useEffect(() => {
    setTitle(font.text)
  }, [font])
  
  return (
      <div className={`relative flex dark:text-white items-center gap-4 text-sm md:text-lg  font-bold text-black-20 leading-6`}>
        <span>{title}</span>
        <IoIosArrowDown className="dark:text-primary"/>
      </div>
  )
}

export default FontSwitcher