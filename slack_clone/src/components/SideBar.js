import SideBarHeader from './SideBarHeader'
import SideBarOption from './SideBarOption'

import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'


function SideBar() {
    return (
        <div className='sidebar'>
            <SideBarHeader />
            <SideBarOption Icon={InsertCommentIcon} title='Threads' />
            <SideBarOption Icon={InboxIcon} title="Mentions and comments" />
            <SideBarOption Icon={DraftsIcon} title='Saved items' />
            <SideBarOption Icon={BookmarkBorderIcon} title='Channels' />
            <SideBarOption Icon={PeopleAltIcon} title='People and user groups' />
            <SideBarOption Icon={AppsIcon} title='Apps' />
            <SideBarOption Icon={FileCopyIcon} title='File browser' />
            <SideBarOption Icon={ExpandLessIcon} title='Slow less' />

        </div>
    )
}

export default SideBar
