import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    main:
    {
        fontSize: 20,
        marginRight: 5
    }
})

function SideBarOption({ title, Icon, AddChannelOption }) {

    const addChannel =()=>{
        //add a room.
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
