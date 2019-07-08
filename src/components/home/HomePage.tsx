import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core/';
import Slide3 from 'assets/images/Slide-3.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '620px'
    },
    container: {
      height: '100%'
    },
    textbox: {
      background:
        'repeating-linear-gradient(45deg,#FFFFFF,#EEEEEE 5px,#FFFFFF 5px,#EEEEEE 10px);',
      height: '100%',
      padding: '80px'
    },
    text: {
      color: '#153587'
    },
    picture: {
      backgroundImage: `url(${Slide3})`,
      backgroundSize: 'contain'
    }
  })
);

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={4}>
          <Grid
            container
            className={classes.textbox}
            justify='center'
            alignContent='center'
          >
            <Box
              fontSize='h4.fontSize'
              fontWeight='bold'
              textAlign='center'
              className={classes.text}
            >
              Singapore's first investment fund professionally managed by
              undergraduates
            </Box>
          </Grid>
        </Grid>
        <Grid item className={classes.picture} xs={8} />
      </Grid>
    </div>
  );
};

export default HomePage;
