import { IoIosArrowDown } from "react-icons/io";

function FontSwitcher() {
  return (
    <div className="flex dark:text-white items-center gap-4 w-14 md:w-[66px] lg:w-[70px] text-sm md:text-lg font-mono font-bold text-black-20 leading-6">
        <span>Mono</span>
        <IoIosArrowDown className="dark:text-primary"/>
    </div>
  )
}

export default FontSwitcher