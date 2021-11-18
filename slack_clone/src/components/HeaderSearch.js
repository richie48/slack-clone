import {ClockIcon} from '@heroicons/react/outline'
import SearchIcon from "@material-ui/icons/Search"

function HeaderSearch() {

    const searchThis =()=>{}
    return (
        <>
        <div className='combine'>
            <div className='clock-icon'> <ClockIcon /> </div>
            <div className='header-search'>
            <input className='search-field' type='text' onChange={searchThis} placeholder='type here...'></input>
            <div className='searchicon'><SearchIcon/></div>
            </div>
        </div>

        </>
    )
}

export default HeaderSearch
