import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Slide from 'react-reveal/Slide';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'start',
        padding: '5px',
        margin: '5px',
        display:'grid'
    },
    lable: {
        display: 'inline',
        color:theme.palette.text.secondary,   
    },
    data:{
        display: 'inline',
        color:theme.palette.text.primary,   
    }
}));
const AddressPanal = ({ record }) => {
    const classes = useStyles();
    return (
        <Slide left>
        <Grid container spacing={3}>
            <Grid item xs={3} />
            <Grid item xs={6}>
                <Paper className={classes.paper} elevation={6} >
                    <Typography color='textPrimary' variant='h5'>Address : -</Typography>
                    <Typography className={classes.lable}>Street :
                        <Typography className={classes.data}>{record.address.street}</Typography>
                    </Typography>
                    <Typography className={classes.lable}>City :
                        <Typography className={classes.data}>{record.address.city}</Typography>
                    </Typography>
                    <Typography className={classes.lable}>Street :
                        <Typography className={classes.data}>{record.address.street}</Typography>
                    </Typography>
                    <Typography className={classes.lable}>Zip-Code :
                        <Typography className={classes.data}>{record.address.zipcode}</Typography>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
        </Slide >
    )
}

export default AddressPanal;