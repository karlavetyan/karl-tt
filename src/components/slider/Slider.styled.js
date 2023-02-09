import styled from "styled-components";

import { rem } from "utils/styles";
import { breakpoints } from "styles/Breakpoints";

export const Slider = styled.div`
  overflow: hidden;
  border-radius: ${rem(16)};
  margin: 0 0 ${rem(70)};
  .carousel {
    &:not(:hover) .control-arrow {
      opacity: 0;
    }
    .control-dots {
      display: flex;
      justify-content: flex-end;
      margin: 0;
      padding: ${rem(20)};
      z-index: 5;
      .dot {
        margin: 0 ${rem(4)};
        border-radius: ${rem(4)};
        transition: width 400ms;
        box-shadow: none;
        &.selected {
          width: ${rem(26)};
        }
      }
    }
    .control-arrow {
      cursor: pointer;
      width: ${rem(55)};
      height: ${rem(55)};
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 ${rem(10)};
      font-size: ${rem(26)};
      @media ${breakpoints.tablet} {
        font-size: ${rem(14)};
        width: ${rem(36)};
        height: ${rem(36)};
      }
      @media ${breakpoints.mobile} {
        display: none;
      }
      &:before {
        border: none !important;
        font-family: "task-icons" !important;
      }
      &.control-next:before {
        content: "\\e904";
        margin: 0 0 0 ${rem(4)};
      }
      &.control-prev:before {
        content: "\\e903";
        margin: 0 ${rem(4)} 0 0;
      }
    }
  }
`;

export const SliderItem = styled.div`
  position: relative;
  z-index: 1;
  min-height: ${rem(675)};
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  @media ${breakpoints.notDesktop} {
    min-height: ${rem(500)};
    height: 100%;
  }
  border-radius: ${({ isSecondary }) => isSecondary && rem(16)};
  overflow: ${({ isSecondary }) => isSecondary && "hidden"};
  border: ${({ isSecondary, theme }) =>
    isSecondary && `${rem(1)} solid ${theme.colors.accentSoft}`};
  img {
    width: ${({ visibleImage }) => (visibleImage ? "60%" : "100%")};
    object-fit: cover;
    height: 100%;
    position: absolute;
    z-index: -1;
    right: 0;
    top: 0;
    @media ${breakpoints.mobile} {
      position: static;
      width: 100%;
    }
  }
  .content {
    padding: ${rem(84)} ${rem(96)};
    @media ${breakpoints.notDesktop} {
      padding: ${rem(40)};
    }
    @media ${breakpoints.mobile} {
      background: ${({ isSecondary, theme }) =>
        theme.colors[isSecondary ? "background" : "primaryDark"]};
      padding: ${({ isSecondary, theme }) =>
        isSecondary
          ? `${rem(20)} ${rem(30)}`
          : `${rem(30)} ${rem(30)} ${rem(50)}`};
      button {
        width: 100%;
      }
    }
    top: 0;
    left: 0;
    color: ${({ theme, isSecondary }) =>
      theme.colors[isSecondary ? "text" : "primaryRc"]};
    display: flex;
    position: relative;
    z-index: 4;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    text-align: left;
    h3 {
      max-width: ${({ isSecondary }) => rem(isSecondary ? 600 : 580)};
      font-weight: 700;
      font-size: ${({ isSecondary }) => rem(isSecondary ? 35 : 46)};
      line-height: ${({ isSecondary }) => rem(isSecondary ? 42 : 56)};
      margin: 0 0 ${rem(40)};
      @media ${breakpoints.notDesktop} {
        line-height: ${rem(38)};
        max-width: ${rem(400)};
        font-size: ${rem(28)};
        margin: 0 0 ${rem(20)};
      }
      & + button {
        margin: ${rem(70)} 0 0;
        @media ${breakpoints.notDesktop} {
          margin: ${rem(30)} 0 0;
        }
      }
    }
    p {
      max-width: ${rem(570)};
      font-size: ${rem(22)};
      line-height: ${rem(27)};
    }
    button {
      margin: ${rem(50)} 0 0;
    }
  }
  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    top: 0;
    right: 0;
  }
  &:before {
    background: ${({ isSecondary, theme }) =>
      isSecondary
        ? `linear-gradient(90deg, ${theme.colors.background} 7.65%, ${theme.colors.background90} 23.96%, rgba(255, 255, 255, 0) 73.83%);`
        : theme.colors.primary60};
    z-index: 2;
    @media ${breakpoints.notMobile} {
      width: ${({ isSecondary }) => isSecondary && "75%"};
    }
    @media ${breakpoints.mobile} {
      background: ${({ isSecondary, theme }) =>
        isSecondary && theme.colors.background60} !important;
    }
  }
  &:after {
    @media ${breakpoints.mobile} {
      display: none;
    }
    z-index: 3;
    background: ${({ isSecondary, theme }) =>
      `linear-gradient(90.36deg, ${
        theme.colors[isSecondary ? "background" : "primaryDark"]
      } 29.82%, rgba(0, 0, 0, 0) 99.68%)`};
  }
`;
