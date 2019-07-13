import * as React from 'react';
import SharedLayout from 'components/shared/SharedLayout';
import CohortExpansionPanel from './CohortExpansionPanel';
import { SMIFData } from './types';

const TeamPage: React.FC = () => {
  const [smifData, setSmifData] = React.useState<SMIFData>({});

  React.useEffect(() => {
    fetch('assets/data/team/profiles.json')
      .then((response) => response.json())
      .then((response) => setSmifData(response));
  }, []);

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
      {Object.keys(smifData)
        .reverse()
        .map((year, index) => (
          <CohortExpansionPanel key={index} cohortData={smifData[year]} defaultExpanded={index === 0} />
        ))}
    </SharedLayout>
  );
};

export default TeamPage;
