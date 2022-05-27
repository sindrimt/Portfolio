import React from "react";
import styled from "styled-components";

export default function FirstPost() {
  return (
    <Wrapper>
      <object data="/images/oving.pdf" type="application/pdf" width="100%" height="99.8%" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
