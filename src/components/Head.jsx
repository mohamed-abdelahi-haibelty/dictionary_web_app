import {BsFillCaretRightFill} from 'react-icons/bs'
//{word, phonetic, url}
function Head() {
 const fontType = JSON.parse(localStorage.fontType )
  return (
    <div className="flex w-full justify-between items-center">
        <div className="">
            <h2 className={`mb-[9px] text-[32px] md:text-[64px] font-${fontType} font-bold text-black-20 dark:text-white`}>keyboard</h2>
            <span className={`text-primary text-lg md:text-2xl font-normal font-${fontType}`}>/ˈkiːbɔːd/</span>
        </div>
        <button className=" w-12 h-12 md:w-[75px] md:h-[75px] rounded-full flex items-center justify-center bg-primary/25 outline-none border-none cursor-pointer">
           <BsFillCaretRightFill className='text-primary w-[13px] h-[13px] md:w-[21px] md:h-[21px]'/>
        </button>
    </div>
  )
}

export default Head