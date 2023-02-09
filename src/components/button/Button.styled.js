import styled from "styled-components";

import { hover, rem } from "utils/styles";
import { breakpoints } from "styles/Breakpoints";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryRc};
  ${({ withShadow }) =>
    withShadow && `box-shadow: 0 ${rem(4)} ${rem(11)} rgba(33, 33, 33, 0.35)`};
  font-weight: 700;
  font-size: ${({ isSmall }) => rem(!isSmall ? 22 : 16)};
  border-radius: ${({ smallRadius, largeRadius }) =>
    rem(largeRadius ? 30 : smallRadius ? 8 : 16)};
  padding: ${({ isSmall }) => `0 ${rem(isSmall ? 24 : 47)}`};
  min-height: ${({ isSmall }) => rem(isSmall ? 50 : 65)};
  min-width: ${({ isSmall }) => rem(isSmall ? 0 : 320)};
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${rem(30)};
  ${({ theme }) => hover(`background: ${theme.colors.primaryLight}`)}
  > i {
    font-size: ${rem(28)};
  }
  @media ${breakpoints.mobile} {min-height: ${rem(60)}
`;
