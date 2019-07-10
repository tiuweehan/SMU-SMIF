import { Grid, Paper, Typography } from '@material-ui/core/';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: '50px 80px 50px 80px',
      marginBottom: 0
    },
    title: {
      color: '#153587'
    },
    text: {
      color: '#696969'
    },
    hr: {
      height: '1px',
      border: 'none',
      color: '#eee',
      backgroundColor: '#eee'
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
    <Paper elevation={1}>
      <Grid container className={classes.paper} spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography variant='h6' className={classes.title}>
            {'About Us'}
          </Typography>
          <br />
          <Typography variant='body2' className={classes.text}>
            The Singapore Management University Student Managed Investment Fund (SMU-SMIF) is Singapore's first
            investment fund to be managed directly by undergraduates
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h6' className={classes.title}>
            {'Our Mission'}
          </Typography>
          <br />
          <Typography variant='body2' className={classes.text}>
            To be the premier student-managed investment fund, globally recognised for excellence in investment analysis
            and portfolio management. We offer an unparalleled opportunity to develop their skills in a professional
            setting, thereby ensuring that they can break into the industry with a coveted edge.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h6' className={classes.title}>
            {'Our Values'}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h6' className={classes.title}>
            {'Sector Coverage'}
          </Typography>
        </Grid>
      </Grid>
      <hr className={classes.hr} />
      <Grid className={classes.copyright}>
        <Typography variant='body2' className={classes.text}>
          Copyright © 2018 SMU-SMIF
        </Typography>
      </Grid>
    </Paper>
  );
};

export default SharedFooter;
