import styled from "styled-components";

import { hover, linkLine, rem } from "utils/styles";
import { breakpoints } from "styles/Breakpoints";

export const Header = styled.header`
  padding: ${rem(6)} var(--side-padding);
  margin: 0 0 ${rem(17)};
`;

export const SecondaryNav = styled.nav`
  padding: ${rem(6)} 0;
  color: ${({ theme }) => theme.colors.primary};
  line-height: ${rem(19)};
  display: flex;
  gap: ${rem(14)};
  & > a {
    ${({ theme }) => linkLine(theme.colors.primary)};
    ${hover("opacity: 0.7")}
  }
`;

export const TwoColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PrimaryNav = styled.nav`
  display: flex;
  gap: ${rem(19)};
  font-size: ${rem(22)};
  & > a {
    ${({ theme }) => linkLine(theme.colors.text)};
    ${hover("opacity: 0.7")}
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${rem(19)};
  .item {
    display: flex;
    align-items: center;
    gap: ${rem(9)};
    transition: color 400ms;
    ${({ theme }) =>
      hover(
        `color: ${theme.colors.primary}; > i { color: ${theme.colors.primary} }`
      )}
    i {
      color: ${({ theme }) => theme.colors.accent};
      font-size: ${rem(30)};
      position: relative;
      transition: color 400ms;
      b {
        position: absolute;
        font-size: ${rem(12)};
        font-weight: 700;
        top: ${rem(-10)};
        right: ${rem(-10)};
        font-family: ${({ theme }) => theme.font};
        color: ${({ theme }) => theme.colors.primaryRc};
        background: ${({ theme }) => theme.colors.primary};
        padding: ${rem(5)};
        text-align: center;
        min-width: ${rem(20)};
        border-radius: ${rem(12)};
        box-shadow: ${({ theme }) =>
          `0 0 0 ${rem(2)} ${theme.colors.primary20}`};
      }
    }
  }
`;

export const ThemeSwitcher = styled.div`
  width: ${rem(55)};
  height: ${rem(20)};
  background: ${({ theme }) => theme.colors.accentLight};
  padding: ${rem(2)};
  border-radius: ${rem(20)};
  position: relative;
  cursor: pointer;
  > span {
    font-size: ${rem(10)};
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    line-height: 1;
    width: 100%;
    height: 100%;
    transition: padding 400ms;
    ${({ active }) =>
      active ? `padding: 0 ${rem(16)} 0 0` : `padding: 0  0 0 ${rem(16)}`}
  }
  > i {
    position: absolute;
    top: ${rem(2)};
    left: ${({ active }) => rem(active ? 37 : 2)};
    width: ${rem(16)};
    height: ${rem(16)};
    display: block;
    border-radius: 50%;
    transition: left 400ms;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: ${rem(1)} 0 ${rem(26)};
  gap: ${rem(58)};
  align-items: center;
  .logo {
    font-size: ${rem(35)};
    display: inline-flex;
  }
  @media ${breakpoints.mobile} {
    margin: ${rem(16)} 0 0;
    padding: 0;
  }
`;

export const ContactNumber = styled.a`
  font-size: ${rem(22)};
  color: ${({ theme }) => theme.colors.primary};
  transition: color 400ms;
  ${({ theme }) => hover(`color: ${theme.colors.primaryDark}`)}
  > i {
    margin: 0 ${rem(8)} 0 0;
  }
  > span {
    ${({ theme }) => linkLine(theme.colors.primary)};
  }
`;
