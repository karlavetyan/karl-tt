import styled from "styled-components";

import { hover, linkLine, rem } from "utils/styles";

import { breakpoints } from "styles/Breakpoints";

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
  @media ${breakpoints.notDesktop} {
    margin: ${rem(16)} 0 0;
  }
`;

export const TwoColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${breakpoints.notDesktop} {
    display: none;
  }
`;

export const PrimaryNav = styled.nav`
  display: flex;
  gap: ${rem(19)};
  font-size: ${rem(22)};
  text-align: center;
  & > a {
    ${hover("opacity: 0.7")};
    @media ${breakpoints.desktop} {
      ${({ theme }) => linkLine(theme.colors.text)};
    }
    @media ${breakpoints.notDesktop} {
      padding: ${rem(16)} 0;
    }
  }
  @media ${breakpoints.notDesktop} {
    flex-direction: column;
    width: 100%;
    gap: ${rem(6)};
    padding: ${rem(20)} 0;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  height: 100%;
  max-height: ${({ isActive }) => (!isActive ? 0 : `calc(100% - ${rem(60)})`)};
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  z-index: 11;
  overflow: hidden;
  transition: max-height 400ms;
  padding: 0 var(--side-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  gap: ${rem(30)};
  @media ${breakpoints.desktop} {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${rem(19)};
  @media ${breakpoints.notDesktop} {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  .item {
    display: flex;
    align-items: center;
    gap: ${rem(9)};
    transition: color 400ms;
    @media ${breakpoints.notDesktop} {
      width: 100%;
      justify-content: center;
      padding: ${rem(10)} 0;
    }
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
  @media ${breakpoints.desktop} {
    ${ThemeSwitcher} {
      display: none;
    }
  }
  @media ${breakpoints.notDesktop} {
    margin: 0;
    padding: 0;
    gap: ${rem(26)};
    grid-template-columns: 1fr auto auto;
    ${ThemeSwitcher} {
      display: flex;
    }
  }
`;

export const Burger = styled.div`
  position: relative;
  display: flex;
  width: ${rem(30)};
  height: ${rem(22)};
  align-items: center;
  justify-content: center;
  line-height: 1;
  cursor: pointer;
  @media ${breakpoints.desktop} {
    display: none;
  }
  ${({ isActive }) =>
    isActive &&
    `.burger-icon {
      background-color: transparent !important;
      &:before {
        transform: translateY(${rem(10)}) rotate(42deg);
      }
      &:after {
        transform: translateY(${rem(-9)}) rotate(-42deg);
      }
    }`}
  .burger-icon {
    &:before,
    &,
    &:after {
      background: ${({ theme }) => theme.colors.text};
      height: ${rem(3)};
      width: ${rem(30)};
      transition: transform 400ms, background-color 400ms;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 0;
    }
    &:before {
      top: 0;
    }
    &:after {
      bottom: 0;
    }
  }
`;

export const ContactNumber = styled.a`
  font-size: ${({ isFooter }) => rem(isFooter ? 16 : 22)};
  color: ${({ isFooter, theme }) =>
    theme.colors[isFooter ? "footerText" : "primary"]};
  transition: color 400ms;
  ${({ isFooter, theme }) =>
    hover(`color: ${theme.colors[isFooter ? "accentLight" : "primaryDark"]}`)}
  > i {
    margin: 0 ${rem(8)} 0 0;
    color: ${({ theme }) => theme.colors.primary};
  }
  > span {
    ${({ isFooter, theme }) =>
      linkLine(theme.colors[isFooter ? "footerText" : "primary"])};
  }
`;

export const Header = styled.header`
  padding: ${rem(6)} var(--side-padding) ${rem(17)};
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  @media ${breakpoints.notDesktop} {
   ${SecondaryNav}, ${PrimaryNav}, ${ContactNumber}, ${Menu}, .search{
     display: none;
   }
  }
  @media ${breakpoints.notDesktop} {
    padding: ${rem(18)} var(--side-padding);
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all 400ms;
  }
`;
