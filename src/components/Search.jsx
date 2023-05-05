import {CiSearch} from 'react-icons/ci'

function Search() {
  const fontType = JSON.parse(localStorage.fontType)
  return (
    <div>
        <div className="w-[327px] dark:bg-black-30 md:w-[689px] lg:w-[736px] relative px-6 py-4 md:py-[22px] lg:py-[19px] flex items-center justify-between bg-gray-10 rounded-2xl">
            <input type="text" className={`w-full font-${fontType} dark:text-white cursor-pointer outline-none pr-6 bg-transparent text-black-20 font-bold text-base md:text-xl placeholder-black-20/25 dark:placeholder-white/25`} placeholder='Search for any word...'/>
            <CiSearch className='text-primary absolute w-4 h-4 right-6 pointer-events-none'/>
        </div>
    </div>
  )
}

export default Search