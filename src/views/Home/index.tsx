
// 

import React from 'react';

import MeetingFormSelector from '../../containers/MeetingFormSelector';
import { StyledLayout } from './Styled';
import { VersionLabel } from '../../utils/VersionLabel';

const Home = () => (
  <StyledLayout>
    <MeetingFormSelector />
    <VersionLabel />
  </StyledLayout>
);

export default Home;
