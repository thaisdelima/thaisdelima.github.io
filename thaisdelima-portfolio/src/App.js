import React from 'react';

import Bio from 'pages/Bio';
import BioImage from 'components/BioImage';
import styled from 'styled-components';

const AppStyle = styled.div`
  height: 100vh;
  /* background-color: #444972; */
  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function App() {
  return (
    <AppStyle>
      <BioImage />
      <Bio />
    </AppStyle>
  );
}

export default App;
