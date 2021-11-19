import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'

function sideBarHeader() {
    return (
    <div className='sidebar-header-split'>
        <div className='sidebar-header'>
            <h3>RICHIE'S SLACK</h3>
            <h4><FiberManualRecordIcon/> Odior Richard </h4>
        </div>
        <div>
           <CreateIcon/>
        </div>
    </div>
    )
}

export default sideBarHeader
