import { Grid, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  left: {
    backgroundColor: '#1F1F1F',
    color: '#ffffff'
  },
  right: {
    backgroundColor: '#FFFFFF',
    color: '#1F1F1F'
  },
  h1: {
    fontSize: '32px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '500'
  },
  h2: {
    fontSize: '72px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '800'
  },
  h3: {
    fontSize: '18px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '400'
  },
});

export default function SplitScreen(props) {
  const classes = useStyles();

  return (
      // <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <Grid container className={classes.root}>
      <Grid item xs display="flex" justifyContent="center" alignItems="center" xs={6} className={classes.left}>
        <div style={{ display: "block" }}>
          <h1 className={classes.h1} style={{ paddingLeft: 50 }}>ThanksGPT</h1> 
          <h2 className={classes.h2} style={{ paddingLeft: 50 }}>Let's Get Started.</h2>
          <h3 className={classes.h3} style={{ paddingLeft: 50 }}>ThanksGPT allows users to generate personalized thank you notes for all occasions with ease and efficiency. With this tool, generating content quickly is a breeze.</h3>
        </div>
      </Grid>
      <Grid item xs display="flex" justifyContent="center" alignItems="center" xs={6} className={classes.right}>
        Right Side
      </Grid>
    </Grid>
  );
}
