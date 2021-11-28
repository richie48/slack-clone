import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import {db} from '../firebase'

import { Timestamp } from '@firebase/firestore'

const ChatInput = ({channelName,channelId})=>{
    // const inputRef = useRef(null);
    const [input,setInput]=useState('')

    const sendMessage = e => {
        e.preventDefault()//So the page does not refresh when we fill the form
        //this function is runing meaning its not recelving an id
        if (!channelId){
            console.log(channelId)
            return false
        }
    
        db.collection('rooms').doc(channelId).collection('message').addDoc({ message:
            {
                message: input,
                timestamp:Timestamp,
                user:"Richie"
            }})
        setInput('')
        console.log('i got here')

    }

    return(
        <div className='chat-input'>
            <form>
                <input value={input} onChange={e=> setInput(e.target.value)} className='' placeholder="  message room"/>
                <Button type='submit' onClick={sendMessage}> Send</Button>
            </form>
        </div>
    )

}

export default ChatInput

