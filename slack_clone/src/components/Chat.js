import { makeStyles } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"

import { useSelector } from 'react-redux'
import { collection,doc } from '@firebase/firestore'
import {db} from '../firebase'
import {useCollection, useDocument} from "react-firebase-hooks/firestore"



const useStyles=makeStyles({star:{
    fontSize:15,
}})

const Chat = () => {

    //now correction
    const roomId = useSelector((state) => state.app.roomId)
    console.log(roomId)
    const [roomDetails]=useDocument(roomId && doc(db,'rooms',roomId))

    const [roomMessage]=useCollection(roomId && collection(db,'rooms',roomId,'messages'))
    console.log(roomDetails?.data())
    console.log(roomMessage)


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
        
        <ChatInput channelName={roomDetails?.data().name}channelId={roomId}/>
        </div>
    )
}

export default Chat
