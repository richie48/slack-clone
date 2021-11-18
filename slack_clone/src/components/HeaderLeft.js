import HeaderAvatar from "./HeaderAvatar"
import {ClockIcon} from '@heroicons/react/outline'

function HeaderLeft() {
    return (
        <div className='header-left'>
            <HeaderAvatar/>
            <div className='clock-icon'> <ClockIcon /> </div>
        </div>
    )
}

export default HeaderLeft
