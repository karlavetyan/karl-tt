import styled from "styled-components";

import { media, rem } from "utils/styles";

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
      ${media(
        "tablet",
        `font-size: ${rem(14)}; width: ${rem(30)}; height: ${rem(30)};`
      )}
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
  height: ${rem(675)};
  ${media("tablet", `height: ${rem(400)}`)}
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
  }
  .content {
    padding: ${rem(84)} ${rem(96)};
    ${media("tablet", `padding: ${rem(40)} ${rem(80)}`)}
    top: 0;
    left: 0;
    color: ${({ theme }) => theme.styles.primaryRc};
    display: flex;
    position: relative;
    z-index: 4;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    text-align: left;
    h3 {
      max-width: ${rem(580)};
      font-weight: 700;
      font-size: ${rem(46)};
      line-height: ${rem(56)};
      margin: 0 0 ${rem(116)};
      ${media(
        "tablet",
        `line-height: ${rem(38)}; max-width: ${rem(400)}; font-size: ${rem(
          28
        )}; margin: 0 0 ${rem(40)};`
      )}
    }
  }
  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    top: 0;
    left: 0;
  }
  &:before {
    background: ${({ theme }) => theme.styles.primary60};
    z-index: 2;
  }
  &:after {
    z-index: 3;
    background: ${({ theme }) =>
      `linear-gradient(90.36deg, ${theme.styles.primaryDark} 29.82%, rgba(0, 0, 0, 0) 99.68%)`};
  }
`;
