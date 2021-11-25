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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'

import { db } from "../firebase"
import { collection } from "firebase/firestore";
import {useCollection} from "react-firebase-hooks/firestore"



const SideBar = () => {
    const [channels,loading,error]=useCollection(collection(db,"rooms"))

    // channels?.docs.map((doc)=> console.log(doc.data().name))

    return (
        <div className='sidebar'>
            <SideBarHeader />
            <SideBarOption Icon={InsertCommentIcon} title='Threads' /><br />
            <SideBarOption Icon={InboxIcon} title="Mentions and comments" /><br />
            <SideBarOption Icon={DraftsIcon} title='Saved items' /><br />
            <SideBarOption Icon={BookmarkBorderIcon} title='Channels' /><br />
            <SideBarOption Icon={PeopleAltIcon} title='People and user groups' /><br />
            <SideBarOption Icon={AppsIcon} title='Apps' /><br />
            <SideBarOption Icon={FileCopyIcon} title='File browser' /><br />
            <SideBarOption Icon={ExpandLessIcon} title='Slow less' />
            <hr />
            <SideBarOption Icon={ExpandMoreIcon} title='Slow less' />
            <hr />
            <SideBarOption Icon={AddIcon} AddChannelOption title='Add channel' />
            {channels?.docs.map((doc) => <SideBarOption key={doc.id} id={doc.id} title={doc.data().name} />)}
        </div>
    )
}

export default SideBar
