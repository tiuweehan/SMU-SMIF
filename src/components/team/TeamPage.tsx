import * as React from 'react';
import { Grid } from '@material-ui/core';
import CohortExpansionPanel from './CohortExpansionPanel';

const TeamPage: React.FC = () => {
  return (
    <Grid container justify='center' alignContent='center'>
      <CohortExpansionPanel />
    </Grid>
  );
};

export default TeamPage;
