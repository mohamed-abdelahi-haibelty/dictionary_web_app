import {HiOutlineMoon} from 'react-icons/hi'

function ThemSwitcher() {
  return (
    <div className="flex items- gap-3">
            
        <label htmlFor="toggle" className="relative bg-gray-30 w-10 h-5 rounded-[10px]">
            <input type="checkbox" id="toggle" className="opacity-0 w-0 h-0"/>
            <span className="absolute w-[14px] rounded-full h-[14px] bg-white left-[3px] top-[3px] bottom-[3px]"></span>
        </label>
        
        <HiOutlineMoon className='w-[20px] h-[20px] text-gray-30'/>

    </div>
  )
}

export default ThemSwitcher