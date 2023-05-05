import Switcher from "./Switcher"
import Search from "./Search"

function Header() {
  return (
    <div className="mt-6 w-[327px] flex flex-col gap-6 md:w-[689px] mr-auto ml-auto lg:w-[736px]">
        <Switcher/>
        <Search/>
    </div>
  )
}

export default Header