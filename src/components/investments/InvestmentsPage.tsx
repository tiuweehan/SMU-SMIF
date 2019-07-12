import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import LineBreak from 'components/utils/LineBreak';
import SharedLayout from 'components/shared/SharedLayout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    investmentApproachAndPhilosophy: {
      backgroundColor: 'white',
      padding: '20px 30px 0px 30px'
    },
    investmentApproachAndPhilosophyBlock: {
      padding: '0px 15px 0px 15px',
      marginBottom: '20px'
    },
    investmentApproachAndPhilosophyHeader: {
      textAlign: 'center',
      color: '#153587',
      fontSize: '29px',
      fontWeight: 700
    },
    investmentApproachAndPhilosophyBody: {
      color: '#696969',
      textAlign: 'justify',
      fontSize: '12px',
      lineHeight: '20px',
      height: '100%'
    },
    investmentApproachAndPhilosophyImage: {
      width: '100%',
      marginBottom: '10px'
    },
    sectorCoverage: {
      backgroundColor: 'white',
      padding: '20px 30px 0px 30px'
    },
    sectorCoverageBlock: {
      padding: '0px 5px 0px 5px',
      marginBottom: '20px'
    },
    sectorCoverageHeader: {
      textAlign: 'center',
      color: '#153587',
      fontSize: '42px',
      fontWeight: 700,
      marginBottom: '20px'
    },
    sectorCoverageSubHeader: {
      textAlign: 'center',
      color: '#153587',
      fontSize: '20px',
      fontWeight: 700
    }
  })
);

const InvestmentsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <SharedLayout
      deep={{
        backgroundImage: `${process.env.PUBLIC_URL}/assets/images/investments/Investments.jpg`,
        backgroundHeight: '490px',
        backgroundVerticalScale: '350px',
        parallaxStrength: 800,
        title: 'Investments'
      }}
      middle={{
        bufferColor: '#F2F3F5',
        verticalTranslate: '-40px',
        paddingBottom: '10px'
      }}
    >
      <Grid container spacing={2} className={classes.investmentApproachAndPhilosophy}>
        <Grid item xs={12} md={4} spacing={2}>
          <Grid container className={classes.investmentApproachAndPhilosophyBlock}>
            <Grid container justify='center' className={classes.investmentApproachAndPhilosophyHeader}>
              Invesment Approach
            </Grid>
            <LineBreak height={'7px'} />
            <Grid container justify='center' className={classes.investmentApproachAndPhilosophyBody}>
              Our investment approach is to identify and invest in listed companies demonstrating strong fundamentals at
              attractive prices using a bottom-up analysis. We believe that these companies will produce superior stock
              market returns in the long terms.
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/investments/InvestmentApproachAndPhilosophy.jpg`}
            alt='investments'
            className={classes.investmentApproachAndPhilosophyImage}
          />
        </Grid>
        <Grid item xs={12} md={4} spacing={2}>
          <Grid container className={classes.investmentApproachAndPhilosophyBlock}>
            <Grid container justify='center' className={classes.investmentApproachAndPhilosophyHeader}>
              Invesment Philosophy
            </Grid>
            <LineBreak height={'7px'} />
            <Grid container justify='center' className={classes.investmentApproachAndPhilosophyBody}>
              The fund adopts a style neutral investment policy while maintaining a medium to long-term perspective,
              with the view that its holdings will provide a positive return over next three to five years. The actual
              holding period may fluctuate as according to changes in market conditions
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <LineBreak height={'30px'} />
      <Grid container spacing={2} className={classes.sectorCoverage}>
        <Grid item xs={12} spacing={2} className={classes.sectorCoverageHeader}>
          Sector Coverage
        </Grid>
        {[
          { subHeader: 'Consumer', imageName: 'Consumer' },
          { subHeader: 'Resources', imageName: 'Resources' },
          { subHeader: 'Industrials', imageName: 'Industrials' },
          { subHeader: 'Technology, Media and TelCo', imageName: 'Technology' },
          { subHeader: 'Real Estate', imageName: 'RealEstate' },
          { subHeader: 'Financials', imageName: 'Financials' }
        ].map((coverage) => (
          <Grid item xs={12} sm={6} md={4} spacing={2} key={coverage.subHeader}>
            <Grid container className={classes.sectorCoverageBlock}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/investments/${coverage.imageName}.jpg`}
                alt={coverage.subHeader}
                className={classes.investmentApproachAndPhilosophyImage}
              />
              <Grid container justify='center' className={classes.sectorCoverageSubHeader}>
                {coverage.subHeader}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </SharedLayout>
  );
};

export default InvestmentsPage;
