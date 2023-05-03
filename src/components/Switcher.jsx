import IconoirBook from '../assets/iconoirBook.svg'
import FontSwitcher from './fontSwitcher'
import ThemSwitcher from './ThemSwitcher'

function Switcher() {
  return (
    <div>
        <div className="flex items-center justify-between">
            <img src={IconoirBook} alt="book svg" />
            <div className="flex items-center">
                <div className="pr-4 md:pr-[26px] ">
                    <FontSwitcher/>
                </div>
                <div className="pl-4 md:pl-[26px] border-l border-gray-20">
                    <ThemSwitcher/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Switcher