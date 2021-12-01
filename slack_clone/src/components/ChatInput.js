import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import {db} from '../firebase'
import { addDoc, collection } from "firebase/firestore";

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

        const messageCol=collection(db,'rooms',channelId,'messages')
        addDoc(messageCol,
            {
                message: input,
                user:"Richie",
            })

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

