import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core/';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white'
    },
    footer: {
      padding: '50px 80px 50px 80px'
    },
    footerBlock: {
      height: '100%',
      padding: '20px 20px 20px 20px'
    },
    header: {
      color: '#153587',
      fontSize: '20px',
      fontWeight: 700
    },
    text: {
      color: '#696969',
      textAlign: 'justify',
      fontSize: '13px',
      lineHeight: '25px',
      height: '100%'
    },
    checkCircleIcon: {
      color: '#153587',
      height: '20px'
    },
    listText: {
      color: '#696969'
    },
    copyright: {
      padding: '20px 80px 30px 80px',
      marginBottom: 0
    }
  })
);

const SharedFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid container className={classes.footer}>
        <Grid item xs={12} sm={6} md={3}>
          <Grid container className={classes.footerBlock} spacing={2}>
            <Grid item xs={12} className={classes.header}>
              About Us
            </Grid>
            <Grid item xs={12} className={classes.text}>
              The Singapore Management University Student Managed Investment Fund (SMU-SMIF) is Singapore's first
              investment fund to be managed directly by undergraduates
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grid container className={classes.footerBlock} spacing={2}>
            <Grid item xs={12} className={classes.header}>
              Our Mission
            </Grid>
            <Grid item xs={12} className={classes.text}>
              To be the premier student-managed investment fund, globally recognised for excellence in investment
              analysis and portfolio management. We offer an unparalleled opportunity to develop their skills in a
              professional setting, thereby ensuring that they can break into the industry with a coveted edge.
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grid container className={classes.footerBlock} spacing={2}>
            <Grid item xs={12} className={classes.header}>
              Our Values
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {['Responsibility', 'Commitment', 'Teamwork', 'Excellence', 'Integrity'].map((value) => (
                  <Grid item xs={12} key={value}>
                    <Grid container spacing={2}>
                      <Grid item xs={2}>
                        <CheckCircleIcon className={classes.checkCircleIcon} />
                      </Grid>
                      <Grid item xs={10} className={classes.listText}>
                        {value}
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grid container className={classes.footerBlock} spacing={2}>
            <Grid item xs={12} className={classes.header}>
              Sector Coverage
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {[
                  'Technology, Media and Telco',
                  'Resources',
                  'Real Estate',
                  'Consumers',
                  'Industrials',
                  'Financial Institution Groups'
                ].map((value) => (
                  <Grid item xs={12} key={value}>
                    <Grid container spacing={2}>
                      <Grid item xs={2}>
                        <CheckCircleIcon className={classes.checkCircleIcon} />
                      </Grid>
                      <Grid item xs={10} className={classes.listText}>
                        {value}
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Grid className={classes.copyright}>
        <Typography variant='body2' className={classes.text}>
          Copyright © 2018 SMU-SMIF
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SharedFooter;
