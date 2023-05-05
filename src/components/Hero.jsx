//import NotFound from "./NotFound"
import Head from "./Head"
import { useContext } from 'react';
import { fontContext } from '../context/FontContext';

function Hero() {
  const {data} = useContext(fontContext)
  return (
    <div className='mr-auto ml-auto mt-7 w-[327px] md:w-[737px]'>
        {data.length > 0 && <Head/>}
    </div>
  )
}

export default Hero