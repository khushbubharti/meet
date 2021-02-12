
// 

import styled from 'styled-components';

export const StyledDiv = styled.div`
  margin-bottom: 1rem;
  margin-left: 1rem;
  display: inline-flex;
  flex-direction: column;

  & > .sip-uri-heading {
    font-size: 1.25rem;
    font-weight: bold;
  }

  & > .sip-uri-data {
    word-break: break-all;
  }

  & > .btn-copy {
    align-self: center;
  }
`;
