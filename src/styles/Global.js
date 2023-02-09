import { createGlobalStyle } from "styled-components";

import { rem } from "utils/styles";
import { breakpoints } from "styles/Breakpoints";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    padding: 0;
    outline: 0 !important;
    border-radius: 0;
    background: none;
    vertical-align: top;
    -webkit-font-smoothing: subpixel-antialiased;
    -webkit-tap-highlight-color: transparent;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none !important;
    font-family: ${({ theme }) => theme.font};
  }
  a,
  button {
    transition: background-color 200ms, opacity 200ms;
  }
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
  }
  img,
  svg {
    display: block;
    max-width: 100%;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    font: inherit;
    appearance: none;
    display: block;
    color: inherit;
  }
  button::-webkit-inner-spin-button,
  input::-webkit-inner-spin-button,
  optgroup::-webkit-inner-spin-button,
  select::-webkit-inner-spin-button,
  textarea::-webkit-inner-spin-button,
  button::-webkit-outer-spin-button,
  input::-webkit-outer-spin-button,
  input::-webkit-calendar-picker-indicator,
  optgroup::-webkit-outer-spin-button,
  select::-webkit-outer-spin-button,
  textarea::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    display: none;
  }
  button::-webkit-search-decoration,
  input::-webkit-search-decoration,
  optgroup::-webkit-search-decoration,
  select::-webkit-search-decoration,
  textarea::-webkit-search-decoration,
  button::-webkit-search-cancel-button,
  input::-webkit-search-cancel-button,
  optgroup::-webkit-search-cancel-button,
  select::-webkit-search-cancel-button,
  textarea::-webkit-search-cancel-button,
  button::-webkit-search-results-button,
  input::-webkit-search-results-button,
  optgroup::-webkit-search-results-button,
  select::-webkit-search-results-button,
  textarea::-webkit-search-results-button,
  button::-webkit-search-results-decoration,
  input::-webkit-search-results-decoration,
  optgroup::-webkit-search-results-decoration,
  select::-webkit-search-results-decoration,
  textarea::-webkit-search-results-decoration {
    display: none;
  }
  button::-ms-clear,
  input::-ms-clear,
  optgroup::-ms-clear,
  select::-ms-clear,
  textarea::-ms-clear {
    display: none;
  }
  button ::-webkit-input-placeholder,
  input ::-webkit-input-placeholder,
  optgroup ::-webkit-input-placeholder,
  select ::-webkit-input-placeholder,
  textarea ::-webkit-input-placeholder {
    opacity: 1;
    font-family: inherit;
  }
  button :-moz-placeholder,
  input :-moz-placeholder,
  optgroup :-moz-placeholder,
  select :-moz-placeholder,
  textarea :-moz-placeholder {
    opacity: 1;
    font-family: inherit;
  }
  button ::-moz-placeholder,
  input ::-moz-placeholder,
  optgroup ::-moz-placeholder,
  select ::-moz-placeholder,
  textarea ::-moz-placeholder {
    opacity: 1;
    font-family: inherit;
  }
  button :-ms-input-placeholder,
  input :-ms-input-placeholder,
  optgroup :-ms-input-placeholder,
  select :-ms-input-placeholder,
  textarea :-ms-input-placeholder {
    opacity: 1;
    font-family: inherit;
  }
  i {
    font-style: normal;
  }
  .invisibleLink {
    opacity: 0;
    font-size: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  
  #tidio-chat-iframe[style*="width: 94px"]{
  display: none !important;
  }
  
  :root {
    --font: 'Inter', sans-serif;
    --side-padding: ${rem(24)};
    @media ${breakpoints.notDesktop} {
      --side-padding: ${rem(16)}
    }
  }
  html {
    font: ${({ theme }) => `10px / 1.2 ${theme.font}`};
    color: ${({ theme }) => theme.colors.text};
    @media ${breakpoints.notDesktop} {
      font-size: 8.5px;
    }
  }
  body {
    transition: background 200ms;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${rem(16)};
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    background: ${({ theme }) => theme.colors.background};
  }
  main {
    padding: 0 var(--side-padding);
  }
`;
