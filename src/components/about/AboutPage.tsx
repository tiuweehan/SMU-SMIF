import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Box, Typography, Paper } from '@material-ui/core/';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    parent: {
      position: 'relative'
    },
    aspectRatio: {
      width: '100%',
      height: 'auto'
    },
    content: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0
    },
    aboutUs: {
      width: '100%',
      height: '100%'
    },
    whiteText: {
      color: 'white',
      font: 'Arial Arial Tahoma sans-serif'
    },
    missionAndStory: {
      width: '100%',
      height: '100%',
      backgroundColor: '#F2F3F5'
    },
    paper: {
      width: '85%',
      height: '30%',
      padding: '40px 60px 40px 60px'
    },
    title: {
      color: '#1b3782'
    }
  })
);

const AboutPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.parent}>
        {/* <img className={classes.aspectRatio} src={BackgroundPicture} /> */}
        <div className={classes.content}>
          <Grid container className={classes.aboutUs} justify='center' alignContent='center'>
            <Typography variant='h2' className={classes.whiteText}>
              About Us
            </Typography>
          </Grid>
        </div>
      </div>
      <div className={classes.parent}>
        {/* <img className={classes.aspectRatio} src={BackgroundPicture} /> */}
        <div className={classes.content}>
          <Grid container className={classes.missionAndStory} justify='center' alignContent='center'>
            <Paper className={classes.paper} elevation={0}>
              <Grid container justify='center' alignContent='center' spacing={2}>
                <Grid item>
                  <Typography variant='h3' className={classes.title}>
                    Our Mission
                  </Typography>
                </Grid>
                <Grid item>
                  <Box textAlign='center'>
                    To be the premier student-managed investment fund, globally recognised for excellence in investment
                    analysis and portfolio management. We offer members an unparalleled opportunity to develop their
                    skills in a professional setting, thereby ensuring that they can break into the industry with a
                    coveted edge.
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
