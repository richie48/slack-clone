import { makeStyles } from "@material-ui/core"
import { db } from "../firebase"
import { addDoc, collection } from "firebase/firestore";
// import {useCollection} from "react-firebase-hooks/firestore"
import  {enterRoom } from "../features/appSlice"

import { useDispatch} from 'react-redux';



import PropTypes from 'prop-types';

const useStyles = makeStyles({
    main:
    {
        fontSize: 20,
        marginRight: 5
    }
})

const SideBarOption = ({ title, Icon, AddChannelOption ,id }) => {
    const dispatch = useDispatch()
    const addChannel =()=>{
        const channelName=prompt('please enter the channel name')
        if (channelName){
            try {
                addDoc(collection(db,"rooms"),
                {
                name:channelName
                })
            } catch (error) {
                console.log(error)
            }
            // old syntax      // db.collection('rooms').add({      //name:channelName      // })
        }

    }
    
    //
    const selectChannel = () =>{
        //select a room.
        if (id){
            dispatch(enterRoom({
                roomId:id}))
            console.log(id)
        }
    }

    
    const classes = useStyles();
    return (<>
    {/* 'channel-with-icon''added-channels' */}
        <div className='side-bar-options' onClick={AddChannelOption?addChannel:selectChannel} >
            {!Icon?(<div className= 'added-channels'><span>#</span>&nbsp;&nbsp;{title}</div >):(<div className='channel-with-icon'><Icon className={classes.main} /> {title}</div>)}
        </div>
    </>
    )
}

SideBarOption.propTypes = { title: PropTypes.any.isRequired}

export default SideBarOption
