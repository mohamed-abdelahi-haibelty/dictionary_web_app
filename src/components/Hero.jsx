//import NotFound from "./NotFound"
import Head from "./Head"
import { useContext } from 'react';
import { fontContext } from '../context/FontContext';
import Translate from "./Translate";
import Source from "./Source";

function Hero() {
  const {data} = useContext(fontContext)
  const {meanings, sourceUrls, word} = data.length > 0 && data[0]
  return (
    <div className='mr-auto ml-auto mt-7 w-[327px] md:w-[737px]'>
        {<Head/>}
        {meanings.map((m,i) => 
        <Translate 
            key={i} 
            partOfSpeech={m.partOfSpeech}
            definitions={m.definitions}
            synonyms={m.synonyms}  
        />
        )}
        {data.length > 0 && <Source sourceUrls={sourceUrls} word={word}/>}
        
    </div>
  )
}

export default Hero