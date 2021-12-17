import styled from "styled-components";

export const Icon = styled.div`
  transition: 0.2s ease;
  position: fixed;
  z-index: 1000;
  width: 80px;
  height: 80px;
  right: 0;
  bottom: 0;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    transition: all 0.2s ease;
  }
`;
