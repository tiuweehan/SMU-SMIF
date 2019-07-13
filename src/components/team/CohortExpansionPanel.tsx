import * as React from 'react';
import DetailedProfileCard from './DetailedProfileCard';

const CohortExpansionPanel: React.FC = () => {
  return (
    <DetailedProfileCard
      name={'Zaf Tiu Wee Yong'}
      role={'President'}
      displayPictureUrl={
        'https://media.licdn.com/dms/image/' +
        'C5103AQG4O_eLw4TRaA/profile-displayphoto' +
        '-shrink_800_800/0?e=1568246400&v=beta&' +
        't=69ulx23MTA910e35olkbyFR3RRLJIBzJaENsGVMJJkg'
      }
      linkedinUrl={'https://www.linkedin.com/in/zaf-tiu'}
      description={
        'Cipto was a member of SMU-SMIF during his time at SMU. ' +
        'He is currently a Director at Druk Asia Private ' +
        'Limited, a travel and tour agency. Cipto previously worked as an equity analyst ' +
        'at Aberdeen Asset Management, and as an analyst at JPMorgan.'
      }
    />
  );
};

export default CohortExpansionPanel;
