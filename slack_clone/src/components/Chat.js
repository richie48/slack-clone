import { makeStyles } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'

import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

const useStyles=makeStyles({star:{
    fontSize:15,
}})

function Chat() {

    const roomId = useSelector()

    const classes=useStyles()
    return (
        <div className="chat">
            <div className='chat-room'>
                <div>
                    <strong>#room-name</strong>
                    <StarBorderOutlinedIcon className={classes.star}/>
                </div>
                <div>
                    <InfoOutlinedIcon className={classes.star}/>Details
                </div>
            </div>

        {/*messages*/}
        <ChatMessages/>
        
        <ChatInput channelId={roomId}/>
        </div>
    )
}

export default Chat
