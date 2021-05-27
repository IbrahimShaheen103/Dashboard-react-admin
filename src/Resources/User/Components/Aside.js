import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { TextField } from "react-admin";
import Fade from 'react-reveal/Fade'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: '10px'
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
    },
    paperT: {
        width: '100%',
        marginTop: -50,
        marginBottom: 40
    }
}))

const Aside = ({ record }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}  >
                        <div style={{ margin: '1em' }}>
                            <Paper className={classes.paperT} elevation={7}>
                                <Typography variant='h5' >Compony Details</Typography>
                            </Paper>
                            <Fade>
                            {record && (
                                <Typography variant='body2'>
                                    Name: <TextField source='company.name' variant='overline' /><br />
                                    Descrebtion: <TextField source='company.catchPhrase' variant='overline' />
                                </Typography>
                            )}
                            </Fade>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default Aside;