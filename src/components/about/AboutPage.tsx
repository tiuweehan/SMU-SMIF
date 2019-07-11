import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SharedLayout from 'components/shared/SharedLayout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mission: {
      backgroundColor: 'white',
      padding: '30px 30px 50px 30px'
    },
    missionHeader: {
      color: '#153587',
      fontSize: '42px',
      fontWeight: 700
    },
    missionBody: {
      color: 'black',
      fontFamily: '"Arial", Arial, Tahoma, sans-serif',
      fontSize: '18px',
      textAlign: 'center'
    },
    valuesAndStory: {
      marginTop: '60px'
    },
    values: {
      backgroundColor: 'rgb(67, 93, 159)',
      padding: '35px 35px 35px 35px',
      height: '100%'
    },
    valuesTitle: {
      color: 'white',
      fontSize: '40px',
      fontWeight: 700
    },
    valuesBody: {},
    story: {
      backgroundColor: 'white',
      height: '100%'
    }
  })
);

const AboutPage: React.FC = () => {
  const classes = useStyles();
  return (
    <SharedLayout
      deep={{
        backgroundImage: `${process.env.PUBLIC_URL}/assets/images/AboutUs.jpg`,
        backgroundHeight: '570px',
        backgroundVerticalScale: '350px',
        parallaxStrength: 800,
        title: 'About Us'
      }}
      middle={{
        bufferColor: '#F2F3F5',
        verticalTranslate: '-40px',
        paddingBottom: '10px'
      }}
    >
      <Grid container spacing={2} className={classes.mission}>
        <Grid item xs={12} className={classes.missionHeader}>
          <Grid container justify='center' alignContent='center'>
            Our Mission
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.missionBody}>
          <Grid container justify='center' alignContent='center'>
            To be the premier student-managed investment fund, globally recognised for excellence in investment analysis
            and portfolio management. We offer members an unparalleled opportunity to develop their skills in a
            professional setting, thereby ensuring that they can break into the industry with a coveted edge.
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.valuesAndStory}>
        <Grid item xs={12} md={3}>
          <Grid container className={classes.values}>
            <Grid item xs={12} className={classes.valuesTitle}>
              <Grid container justify='center' alignContent='center'>
                Our Values
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.valuesBody}>
              <Grid container>
                <img src={`${process.env.PUBLIC_URL}/assets/images/TickIcon.png`} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container className={classes.story}></Grid>
        </Grid>
      </Grid>
    </SharedLayout>
  );
};

export default AboutPage;
