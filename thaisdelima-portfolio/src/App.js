import React from "react";

import Bio from "pages/Bio";
import BioImage from "components/BioImage";
import styled from "styled-components";

const AppStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #444972;
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
