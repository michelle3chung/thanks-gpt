import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100vh',
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
