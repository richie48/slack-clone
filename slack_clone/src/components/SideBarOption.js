import { makeStyles } from "@material-ui/core"
import { db } from "../firebase"

const useStyles = makeStyles({
    main:
    {
        fontSize: 20,
        marginRight: 5
    }
})

function SideBarOption({ title, Icon, AddChannelOption }) {

    const addChannel =()=>{
        const channelName=prompt('please enter the channel name')

        if (channelName){
            db.collection('rooms').add({
                name:channelName
            })
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
