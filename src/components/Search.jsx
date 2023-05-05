import {CiSearch} from 'react-icons/ci'
//import { useEffect, useContext } from 'react';
//import { fontContext } from '../context/FontContext';
import axios from 'axios';


function Search() {
  const fontType = JSON.parse(localStorage.fontType)
 
  const handelSearch = async (e) => {
        if (e.key === 'Enter'){
            const word = e.target.value
            const options = {
                method: "Get",
                url: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
                responseType: 'json'
            }
            try{
               const response =  await axios.request(options)
               console.log(response)
            }catch(error){
                console.error(error.response.status)
            }
        }
  }

  return (
    <div className='flex flex-col '>
        <div className="w-[327px] dark:bg-black-30 md:w-[689px] lg:w-[736px] relative px-6 py-4 md:py-[22px] lg:py-[19px] flex items-center justify-between bg-gray-10 rounded-2xl">
            <input type="text" onKeyDown={handelSearch} className={`w-full peer focus:invalid::border-secondry font-${fontType} dark:text-white cursor-pointer outline-none pr-6 bg-transparent text-black-20 font-bold text-base md:text-xl placeholder-black-20/25 dark:placeholder-white/25`} placeholder='Search for any word...'/>
            <CiSearch className='text-primary absolute w-4 h-4 right-6 pointer-events-none'/>
        </div>
        <p className='invisible peer-invalid:visible text-secondry text-base md:text-lg'>Whoops, can’t be empty…</p>
    </div>
  )
}

export default Search