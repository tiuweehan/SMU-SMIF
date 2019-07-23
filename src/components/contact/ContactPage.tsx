import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SharedLayout from 'components/shared/SharedLayout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contact: {
      backgroundColor: 'white',
      padding: '30px 30px 50px 30px'
    },
    contactHeader: {
      color: '#153587',
      fontSize: '38px',
      fontWeight: 700
    },
    contactBody: {
      color: '#696969',
      fontFamily: '"Arial", Arial, Tahoma, sans-serif',
      fontSize: '12px',
      textAlign: 'center'
    },
    contactEmail: {
      color: '#b89788',
      fontSize: '30px',
      fontWeight: 700
    },
    email: {
      overflowX: 'scroll'
    }
  })
);

const ContactPage: React.FC = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);
  const classes = useStyles();

  return (
    <SharedLayout
      deep={{
        backgroundImage: `${process.env.PUBLIC_URL}/assets/images/about/AboutUs.jpg`,
        backgroundHeight: '570px',
        backgroundVerticalScale: '350px',
        parallaxStrength: 800,
        title: 'Contact Us'
      }}
      middle={{
        bufferColor: '#F2F3F5',
        verticalTranslate: '-40px',
        paddingBottom: '10px'
      }}
    >
      <Grid container spacing={2} className={classes.contact}>
        <Grid item xs={12} className={classes.contactHeader}>
          <Grid container justify='center' alignContent='center'>
            Leave us your message
          </Grid>
        </Grid>
        &nbsp;
        <Grid item xs={12} className={classes.contactBody}>
          <Grid container justify='center' alignContent='center'>
            We will get back to you as soon as possible
          </Grid>
        </Grid>
        &nbsp;
        <Grid item xs={12} className={classes.contactEmail}>
          <Grid container justify='center' alignContent='center' className={classes.email}>
            smusmif@sa.smu.edu.sg
          </Grid>
        </Grid>
      </Grid>
    </SharedLayout>
  );
};

export default ContactPage;
