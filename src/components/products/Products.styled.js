import styled from "styled-components";

import { hover, rem } from "utils/styles";
import { breakpoints } from "styles/Breakpoints";

export const Products = styled.div`
  display: flex;
  justify-content: space-around;
  margin: ${rem(110)} 0;
  gap: ${rem(20)};
  @media ${breakpoints.mobile} {
    flex-direction: column;
    gap: ${rem(50)};
    margin: ${rem(80)} 0;
  }
`;

export const ProductItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  ${hover(`& > i { transform: scale(1.2) }, & > p { opacity: 0.9 }`)};
  > i {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${rem(77)};
    transition: transform 400ms;
  }
  > p {
    transition: opacity 400ms;
    font-weight: 700;
    font-size: ${rem(25)};
    line-height: ${rem(30)};
    margin: ${rem(28)} 0 0;
  }
`;
