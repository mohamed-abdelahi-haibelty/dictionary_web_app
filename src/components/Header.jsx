import Switcher from "./Switcher"
import Search from "./Search"

function Header() {
  return (
    <div className="mr-6 ml-6 mt-6 w-[327px] flex flex-col gap-6 md:w-[689px] md:mr-auto md:ml-auto lg:w-[736px]">
        <Switcher/>
        <Search/>
    </div>
  )
}

export default Header