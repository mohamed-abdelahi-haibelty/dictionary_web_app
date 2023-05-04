import PropTypes from 'prop-types';


function Model(props) {

  return (
    <div className=" model w-[120px] md:w-[183px] text-xs md:text-lg text-black-20 bg-white font-bold  rounded-2xl shadow-lt flex flex-col px-4 py-4 md:px-6 md:py-6 gap-2 md:gap-4">
            {props.children}
    </div>
  )

}


Model.propTypes = {
  children: PropTypes.any
}

export default Model