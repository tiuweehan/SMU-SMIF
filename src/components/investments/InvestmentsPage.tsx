import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import SharedLayout from 'components/shared/SharedLayout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {}
  })
);

const InvestmentsPage: React.FC = () => {
  return (
    <SharedLayout
      deep={{
        backgroundImage: `${process.env.PUBLIC_URL}/assets/images/AboutUs.jpg`,
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
      <div style={{ height: '600px' }} />
    </SharedLayout>
  );
};

export default InvestmentsPage;
