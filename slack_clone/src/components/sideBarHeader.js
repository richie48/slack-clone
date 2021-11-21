import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'

function sideBarHeader() {
    return (
        <div className='sidebar-header'>
            <div><h3>Richie's Slack</h3></div>
            <div className='name-line'><div><h4><FiberManualRecordIcon/> Odior Richard </h4></div><div className='create-icon'><CreateIcon/></div></div>
        </div>
    )
}

export default sideBarHeader
