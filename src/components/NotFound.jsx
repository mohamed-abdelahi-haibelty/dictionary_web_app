function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
        <span className="text-[64px] mb-11">😕</span>
        <h2 className={`text-xl text-black-20 mb-6 dark:text-white font-bold `}>No Definitions Found</h2>
        <p className=" text-gray-30 text-lg font-normal text-center">
            Sorry pal, we could not find definitions for the word you were looking for.
            You can try the search again at later time or head to the web instead.
        </p>
    </div>
  )
}

export default NotFound