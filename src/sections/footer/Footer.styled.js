import styled from "styled-components";

import { hover, rem } from "utils/styles";
import { breakpoints } from "styles/Breakpoints";

export const Footer = styled.footer`
  @media ${breakpoints.notMobile} {
    padding: 0 var(--side-padding);
  }
  .content {
    display: flex;
    gap: ${rem(28)};
    flex-direction: column;

    padding: ${rem(37)} ${rem(23)} ${rem(13)};
    background: ${({ theme }) => theme.colors.footer};
    color: ${({ theme }) => theme.colors.footerText};
    @media ${breakpoints.notMobile} {
      border-radius: ${rem(16)} ${rem(16)} 0 0;
    }
  }
`;

export const MenuAndSubscription = styled.div`
  display: flex;
  gap: ${rem(20)};
  row-gap: ${rem(40)};
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${breakpoints.mobile} {
    flex-direction: column;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.accent};
  @media ${breakpoints.mobile} {
    margin: ${rem(20)} 0 0;
  }
`;

export const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(7)};
  @media ${breakpoints.mobile} {
    align-items: center;
  }
  > p {
    color: ${({ theme }) => theme.colors.accentDark};
    font-weight: 700;
    font-size: ${rem(20)};
    line-height: ${rem(24)};
    margin: 0 0 ${rem(14)};
  }
  > a {
    ${hover(`opacity: 0.7`)}
  }
`;

export const Subscription = styled.div`
  font-size: ${rem(16)};
  max-width: ${rem(464)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${breakpoints.mobile} {
    max-width: initial;
    width: 100%;
  }
  > p {
    color: ${({ theme }) => theme.colors.accentDark};
    font-weight: 700;
    line-height: ${rem(19)};
    @media ${breakpoints.mobile} {
      text-align: center;
    }
  }
  .payment {
    margin: ${rem(47)} 0 0;
    height: ${rem(48)};
  }
  @media ${breakpoints.mobile} {
    align-items: center;
  }
`;

export const SubInput = styled.form`
  display: grid;
  margin: ${rem(21)} 0;
  padding: ${rem(3)};
  border-radius: ${rem(11)};
  background: ${({ theme }) => theme.colors.footerInput};
  grid-template-columns: 1fr auto;
  align-items: center;
  width: 100%;
`;
