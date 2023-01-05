import { Grid, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: '1000vh',
  },
  left: {
    backgroundColor: '#1F1F1F',
  },
  right: {
    backgroundColor: '#FFFFFF',
  },
});

export default function SplitScreen(props) {
  const classes = useStyles();

  return (
      // <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <Grid container className={classes.root}>
      <Grid item xs={6} className={classes.left}>
        Left Side
      </Grid>
      <Grid item xs={6} className={classes.right}>
        Right Side
      </Grid>
    </Grid>
  );
}
