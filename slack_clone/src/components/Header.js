import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"
import HeaderSearch from "./HeaderSearch"


function Header() {
    return (
        <div className='header'>
            <HeaderLeft/>
            <HeaderSearch/>
            <HeaderRight/>
        </div>
    )
}

export default Header
