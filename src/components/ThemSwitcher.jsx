import {HiOutlineMoon} from 'react-icons/hi'
import { useState } from 'react'

function ThemSwitcher() {
  const [toggle, setToggle] = useState(false)

  const handelToggle = () => {
      document.documentElement.classList.toggle('dark')
      setToggle(prevToggle => !prevToggle)
  }

  return (
    <div className="flex items- gap-3">
            
        <label htmlFor="toggle" className="relative cursor-pointer bg-gray-30 dark:bg-primary w-10 h-5 rounded-[10px]">
            <input type="checkbox" checked={toggle} onChange={handelToggle} id="toggle" className="opacity-0 w-0 h-0"/>
            <span className= {`absolute w-[14px]  rounded-full h-[14px] bg-white left-[3px] top-[3px] bottom-[3px] ${toggle && "translate-x-5"} ease-out duration-300`}></span>
        </label>
        
        <HiOutlineMoon className='w-[20px] h-[20px] text-gray-30 dark:text-primary'/>

    </div>
  )
}

export default ThemSwitcher