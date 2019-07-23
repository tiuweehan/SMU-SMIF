import * as React from 'react';
import SharedLayout from 'components/shared/SharedLayout';
import CohortExpansionPanel from './CohortExpansionPanel';
import { SMIFData } from './types';

const TeamPage: React.FC = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);
  const [smifData, setSmifData] = React.useState<SMIFData>({});
  const [currentlyExpanded, setCurrentlyExpanded] = React.useState<number>(0);

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
        .sort((a, b) => {
          const year1 = parseInt(a, 10);
          const year2 = parseInt(b, 10);
          return isNaN(year1) && !isNaN(year2) ? 1 : !isNaN(year1) && isNaN(year2) ? -1 : year2 - year1;
        })
        .map((year, index) => (
          <CohortExpansionPanel
            key={index}
            cohortData={smifData[year]}
            defaultExpanded={index === 0}
            isExpanded={currentlyExpanded === index}
            setIsExpanded={(shouldExpand) => setCurrentlyExpanded(shouldExpand ? index : -1)}
          />
        ))}
    </SharedLayout>
  );
};

export default TeamPage;
