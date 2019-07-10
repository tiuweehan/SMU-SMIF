import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import SharedLayout from 'components/shared/SharedLayout';
import InvestmentsBackground from 'assets/images/Investments.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {}
  })
);

const InvestmentsPage: React.FC = () => {

  return (
    <SharedLayout
      deep={{
        backgroundImage: InvestmentsBackground,
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
