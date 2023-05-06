import {CiSearch} from 'react-icons/ci'
import { useContext, useRef } from 'react';
import { fontContext } from '../context/FontContext';
import axios from 'axios';


function Search() {
  const fontType = JSON.parse(localStorage.fontType)
  const {setData} = useContext(fontContext)
  const paraRef = useRef(null)
  const divRef = useRef(null)
 
  const handelSearch = async (e) => {
        if (e.key === 'Enter'){
            const word = e.target.value
            if (word){
                paraRef.current.classList.add("hidden")
                divRef.current.classList.remove('border', 'border-secondry')
                const options = {
                    method: "Get",
                    url: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
                    responseType: 'json'
                }
                try{
                   const response =  await axios.request(options)
                   console.log(response.data)
                   setData(response.data)
                }catch(error){
                    console.error(error.response.status)
                }
                e.target.value = ''
            }else{
                paraRef.current.classList.remove("hidden")
                divRef.current.classList.add('border', 'border-secondry')
            }
        }
  }

  return (
    <div className='flex flex-col '>
        <div ref={divRef} className="w-[327px] dark:bg-black-30 md:w-[689px] lg:w-[736px] relative px-6 py-4 md:py-[22px]  lg:py-[19px] flex items-center justify-between bg-gray-10 rounded-2xl">
            <input  type="text" required onKeyDown={handelSearch} className={`w-full  font-${fontType} dark:text-white  outline-none pr-6 bg-transparent text-black-20 font-bold text-base md:text-xl placeholder-black-20/25 dark:placeholder-white/25`} placeholder='Search for any word...'/>
            <CiSearch className='text-primary absolute w-4 h-4 right-6 pointer-events-none'/>
        </div>
        <p ref={paraRef} className={'hidden text-secondry text-base md:text-xl font-${fontType}'}>Whoops, can’t be empty…</p>
    </div>
  )
}

export default Search