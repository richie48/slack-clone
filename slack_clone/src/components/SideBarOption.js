import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    main:
    {
        fontSize: 20,
        marginRight: 5
    }
})

function SideBarOption({ title, Icon, AddChannelOption }) {

    const classes = useStyles();
    return (<>
        <div className='side-bar-options'><Icon className={classes.main} />{title}
        </div>
    </>
    )
}

export default SideBarOption
