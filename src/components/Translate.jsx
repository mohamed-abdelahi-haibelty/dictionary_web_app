import PropTypes from 'prop-types';

function Translate({partOfSpeech, definitions, synonyms}) {
  const fontType = JSON.parse(localStorage.fontType)
  return (
    <div className="mt-[34px] w-full">
        <div className="flex justify-between items-center mb-[35px]">
            <span className={`text-black-20 dark:text-white font-bold text-lg md:text-2xl font-${fontType}`}>{partOfSpeech}</span>
            <span className="border-t w-[266px] dark:border-black-10 md:w-[608px] lg:w-[656px] border-gray-20"></span>
        </div>
        <span className={`block text-base text-gray-30 font-${fontType} md:text-xl`}>Meaning</span>
        
        <ul className={`marker:text-primary mb-6 list-disc pl-5 dark:text-white font-normal font-${fontType} mt-[17px] flex flex-col gap-[13px] leading-6 md:text-lg text-[15px] text-black-20`}>
            {definitions.map((def, i) => <li key={i} className="pl-5" >{def.definition}</li>)}
        </ul>

       {synonyms.length > 0 &&    
        <div className="flex gap-6 md:gap-10">
            <span className={`text-base text-gray-30 font-${fontType} md:text-xl`}>Synonyms</span>
            <span className={`text-base text-primary font-${fontType} md:text-xl`}>{synonyms[0]}</span>
        </div>
        }
    </div>
  )
}

Translate.propTypes = {
    partOfSpeech: PropTypes.string,
    definitions: PropTypes.array,
    synonyms: PropTypes.array
}

export default Translate