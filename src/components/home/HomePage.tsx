import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '620px'
    },
    container: {
      height: '100%'
    },
    textbox: {
      background: 'repeating-linear-gradient(45deg,#FFFFFF,#EEEEEE 5px,#FFFFFF 5px,#EEEEEE 10px);',
      height: '100%',
      padding: '80px'
    },
    text: {
      color: '#153587'
    },
    picture: {
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/Slide3.jpg)`,
      backgroundSize: 'contain'
    }
  })
);

const HomePage: React.FC = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={4}>
          <Grid container className={classes.textbox} justify='center' alignContent='center'>
            <Box fontSize='h4.fontSize' fontWeight='bold' textAlign='center' className={classes.text}>
              Singapore's first investment fund professionally managed by undergraduates
            </Box>
          </Grid>
        </Grid>
        <Grid item className={classes.picture} xs={8} />
      </Grid>
    </div>
  );
};

export default HomePage;
