import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import { makeStyles } from "@mui/styles";

//styling materialui icons
const useStyles = makeStyles({
    iconroot: {
        fontSize: 12, color: "green",
    }
});

function SideBarHeader() {
    const classes = useStyles();
    return (
        <div className='sidebar-header'>
            <div className='info'><h3>Richie's Slack</h3><h4><FiberManualRecordIcon className={classes.iconroot} /> Odior Richard </h4></div>
            <div className='create-icon'><CreateIcon /></div>
        </div>
    )
}

export default SideBarHeader
