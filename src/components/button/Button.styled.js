import styled from "styled-components";

import { hover, rem } from "utils/styles";

export const Button = styled.button`
  background: ${({ theme }) => theme.styles.primary};
  font-weight: 700;
  font-size: ${({ isSmall }) => rem(!isSmall ? 22 : 16)};
  border-radius: ${rem(16)};
  padding: 0 ${rem(47)};
  min-height: ${rem(65)};
  min-width: ${({ isSmall }) => rem(isSmall ? 0 : 320)};
  position: relative;
  cursor: pointer;
  ${({ theme }) => hover(`background: ${theme.styles.primaryLight}`)}
  > a {
    opacity: 0;
    font-size: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
