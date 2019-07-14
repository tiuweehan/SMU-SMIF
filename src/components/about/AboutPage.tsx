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
      fontSize: '16px',
      textAlign: 'center'
    },
    valuesAndStory: {
      marginTop: '60px'
    },
    values: {
      backgroundColor: 'rgb(67, 93, 159)',
      padding: '40px 35px 40px 35px',
      height: '100%'
    },
    valuesHeader: {
      color: 'white',
      fontSize: '40px',
      fontWeight: 700
    },
    valuesBody: {
      padding: '15px 15px 15px 15px',
      color: '#c7cfe2',
      fontSize: 14
    },
    story: {
      backgroundColor: 'white',
      padding: '40px 40px 40px 40px',
      height: '100%'
    },
    storyHeader: {
      color: '#153587',
      fontSize: '40px',
      fontWeight: 700
    },
    storyBody: {
      font: 'inherit',
      fontSize: 14,
      color: '#696969',
      textAlign: 'justify'
    }
  })
);

const AboutPage: React.FC = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);
  const classes = useStyles();

  return (
    <SharedLayout
      deep={{
        backgroundImage: `${process.env.PUBLIC_URL}/assets/images/about/AboutUs.jpg`,
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
            <Grid item xs={12} className={classes.valuesHeader}>
              <Grid container justify='center' alignContent='center'>
                Our Values
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} className={classes.valuesBody}>
                {['Responsibility', 'Commitment', 'Teamwork', 'Excellence', 'Integrity'].map((value) => (
                  <Grid item xs={12} key={value}>
                    <Grid container>
                      <Grid item xs={2}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/about/TickIcon.png`} alt='Tick' />
                      </Grid>
                      <Grid item xs={10}>
                        {value}
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container className={classes.story}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item className={classes.storyHeader}>
                  Our Story
                </Grid>
                <Grid item className={classes.storyBody}>
                  <Grid>
                    SMU-SMIF was founded by Mr See Yong Sheng, Mr Ye Junjie Jacky and Mr Poh Wei Jin Gerald in Aug 2005.
                    The idea for the fund came from the success of similar initiatives in universities overseas.
                    Believing that no other university in Asia had a similar set-up, the three founders decided to blaze
                    the trail and started SMU-SMIF.
                  </Grid>
                  &nbsp;
                  <Grid>
                    SMU-SMIF started with six sector teams, each helmed by one Sector Head and four to five analysts.
                    The teams were in turn advised by the founders and SMU-SMIF's investment advisory committee. This
                    high-level committee initially comprised of Assistant Professor Chua Choong Tze and Mr Ng Soo Nam
                    (CIO of Mirae Asset Management) and Associate Professor Francis Koh.
                  </Grid>
                  &nbsp;
                  <Grid>SMU-SMIF commenced its investment Fund 1 with a mock portfolio in January 2006. [ ]</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SharedLayout>
  );
};

export default AboutPage;
