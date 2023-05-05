import {CiSearch} from 'react-icons/ci'

function Search() {
  const fontType = JSON.parse(localStorage.fontType)
  return (
    <div>
        <div className="w-[327px] -z-10 relative px-6 py-4 flex items-center justify-between bg-gray-10 rounded-2xl">
            <input type="text" className={`w-full font-${fontType} outline-none pr-6 bg-transparent text-black-20 font-bold text-base placeholder-black-20/25`} placeholder='Search for any word...'/>
            <CiSearch className='text-primary absolute w-4 h-4 right-6'/>
        </div>
    </div>
  )
}

export default Search