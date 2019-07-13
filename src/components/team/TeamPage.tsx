import * as React from 'react';
import { Grid } from '@material-ui/core';
import SharedLayout from 'components/shared/SharedLayout';
import CohortExpansionPanel from './CohortExpansionPanel';

const TeamPage: React.FC = () => {
  return (
    <SharedLayout
      deep={{
        backgroundImage: `${process.env.PUBLIC_URL}/assets/images/about/AboutUs.jpg`,
        backgroundHeight: '570px',
        backgroundVerticalScale: '350px',
        parallaxStrength: 800,
        title: 'Team'
      }}
      middle={{
        bufferColor: '#F2F3F5',
        verticalTranslate: '-40px',
        paddingBottom: '10px'
      }}
    >
      <CohortExpansionPanel />
    </SharedLayout>
  );
};

export default TeamPage;
