import styled from "styled-components";

import { hover, rem } from "utils/styles";
import { breakpoints } from "styles/Breakpoints";

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 ${rem(50)};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 ${rem(14)};
  @media ${breakpoints.mobile} {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: ${rem(50)};
    > button {
      width: 100%;
    }
  }
`;

export const NameAndNavigation = styled.div`
  display: flex;
  gap: ${rem(39)};
  align-items: center;
  > h3 {
    font-weight: 700;
    font-size: ${rem(25)};
    line-height: ${rem(30)};
  }
`;

export const Navs = styled.div`
  display: flex;
  gap: ${rem(10)};
  @media ${breakpoints.mobile} {
    display: none;
  }
  > i {
    &.icon-arrow-right {
      pointer-events: ${({ prev }) => !prev && "none"};
      opacity: ${({ prev }) => !prev && "0.5"};
    }
    &.icon-arrow-left {
      pointer-events: ${({ next }) => !next && "none"};
      opacity: ${({ next }) => !next && "0.5"};
    }
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${rem(46)};
    height: ${rem(46)};
    background: ${({ theme }) => theme.colors.accentLight};
    transition: all 400ms;
    ${({ theme }) =>
      hover(
        `background: ${theme.colors.primary}; color: ${theme.colors.primaryRc};`
      )}
  }
`;

export const ScrollBlock = styled.div`
  display: flex;
  gap: ${rem(42)};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
    height: 0;
  }
  @media ${breakpoints.notDesktop} {
    gap: ${rem(18)};
  }
`;

export const CategoryItem = styled.div`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  width: ${rem(197)};
  transition: opacity 400ms;
  @media ${breakpoints.notDesktop} {
    width: ${rem(120)};
  }
  ${hover(`opacity: 0.8`)}
  h4 {
    font-weight: 700;
    font-size: ${rem(16)};
    line-height: ${rem(19)};
    margin: ${rem(14)} 0 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
  > img {
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: ${rem(8)};
    border: ${({ theme }) => `${rem(1)} solid ${theme.colors.accentLight}`};
  }
`;
