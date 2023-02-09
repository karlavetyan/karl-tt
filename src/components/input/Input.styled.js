import styled from "styled-components";

import { rem } from "utils/styles";

export const Input = styled.div`
  background: ${({ theme }) => theme.colors.accentLight};
  border-radius: ${rem(8)};
  overflow: hidden;
  width: 100%;
  max-width: ${rem(480)};
  position: relative;
  > i {
    position: absolute;
    width: ${rem(45)};
    height: ${rem(45)};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${rem(25)};
    color: ${({ theme }) => theme.colors.accent};
    transition: color 400ms;
    top: 0;
    left: ${rem(4)};
    pointer-events: none;
  }
  > input {
    width: 100%;
    border-radius: ${rem(8)};
    padding: ${({ withIcon }) =>
      withIcon ? `0 ${rem(16)} 0 ${rem(50)}` : `0 ${rem(16)}`};
    height: ${rem(45)};
    color: ${({ theme }) => theme.colors.text};
    border: ${rem(1)} solid transparent;
    transition: all 300ms;
    &::placeholder {
      color: ${({ theme }) => theme.colors.accent};
    }
    &:focus {
      border-color: ${({ theme }) => theme.colors.accentDark};
      & + i {
        color: ${({ theme }) => theme.colors.accentDark};
      }
    }
  }
`;
