import { makeStyles } from "@material-ui/core"
import { db } from "../firebase"
import { addDoc, collection } from "firebase/firestore";
// import {useCollection} from "react-firebase-hooks/firestore"

const useStyles = makeStyles({
    main:
    {
        fontSize: 20,
        marginRight: 5
    }
})

const SideBarOption = ({ title, Icon, AddChannelOption ,id }) => {


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
            // old syntax
            // db.collection('rooms').add({
            //     name:channelName
            // })
        }

    }

    const selectChannel =()=>{
        //select a room.
    }

    
    const classes = useStyles();
    return (<>
        <div className='side-bar-options' onClick={AddChannelOption?addChannel:selectChannel} ><Icon className={classes.main} />{title}
        </div>
    </>
    )
}

export default SideBarOption
