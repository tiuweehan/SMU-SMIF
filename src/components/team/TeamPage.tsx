import * as React from 'react';
import { Grid } from '@material-ui/core';
import ProfileCard from './ProfileCard';

const TeamPage: React.FC = () => {
  return (
    <Grid container justify='center' alignContent='center'>
      <ProfileCard />
    </Grid>
  );
};

export default TeamPage;
