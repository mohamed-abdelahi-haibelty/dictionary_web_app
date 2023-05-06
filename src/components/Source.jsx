import PropTypes from 'prop-types';
import {FiExternalLink} from "react-icons/fi"

function Source({sourceUrls, word}) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-[25px] mt-8 py-6">
            <span className={`text-sm text-gray-30  underline  md:text-xl`}>Source</span>
            <div className=" flex gap-[9px] items-center ">
                <a href={sourceUrls[0]} className={`text-sm dark:text-white text-black-20 underline  md:text-xl`}>{`https://en.wiktionary.org/wiki/${word}`}</a>
                <FiExternalLink className="text-gray-30 w-3 h-3"/>
            </div>
    </div>
  )
}

Source.propTypes = {
    word: PropTypes.string,
    sourceUrls: PropTypes.array
}

export default Source