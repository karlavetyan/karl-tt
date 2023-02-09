import {
  MENU_ITEMS,
  SECOND_NAV_ITEMS,
  PRIMARY_NAV_ITEMS
} from "constants/navigations";
import { CONTACT_NUMBER } from "constants/info";
import Input from "components/input";

import {
  Menu,
  Header,
  Content,
  TwoColumn,
  PrimaryNav,
  SecondaryNav,
  ThemeSwitcher,
  ContactNumber,
  Burger,
  MobileMenu
} from "./Header.styled";
import { useState } from "react";
import { GlobalStyles } from "styles/Global";

const HeaderSection = ({ isDark, switchTheme }) => {
  const [isActive, setIsActive] = useState(false);

  const Switcher = () => (
    <ThemeSwitcher active={isDark} onClick={switchTheme}>
      <i />
      <span>{isDark ? "Dark" : "Light"}</span>
    </ThemeSwitcher>
  );

  const TopNavigation = () => (
    <SecondaryNav>
      {SECOND_NAV_ITEMS.map(({ name, link }) => (
        <a href={link} key={name}>
          {name}
        </a>
      ))}
    </SecondaryNav>
  );

  const MainMenu = () => (
    <Menu>
      {MENU_ITEMS.map(({ name, link, icon, count }) => (
        <a href={link} key={name} className="item">
          <i className={`icon-${icon}`}>{count && <b>{count}</b>}</i>
          {name}
        </a>
      ))}
    </Menu>
  );

  const BottomNavigation = () => (
    <PrimaryNav>
      {PRIMARY_NAV_ITEMS.map(({ name, link }) => (
        <a href={link} key={name}>
          {name}
        </a>
      ))}
    </PrimaryNav>
  );

  const Contact = () => (
    <ContactNumber href={`tel:${CONTACT_NUMBER.number}`}>
      <i className="icon-phone" />
      <span>{CONTACT_NUMBER.text}</span>
    </ContactNumber>
  );

  return (
    <>
      <GlobalStyles isActive={isActive} />
      <Header isActive={isActive}>
        <TwoColumn>
          <Switcher />
          <TopNavigation />
        </TwoColumn>
        <Content>
          <a href="/" className="logo">
            <i className="icon-logo" />
          </a>
          <Input
            placeholder="Product SKU, Name…"
            icon="search"
            className="search"
          />
          <MainMenu />
          <Switcher />
          <Burger
            isActive={isActive}
            onClick={() => setIsActive(prev => !prev)}
          >
            <i className="burger-icon" />
          </Burger>
        </Content>
        <TwoColumn>
          <BottomNavigation />
          <Contact />
        </TwoColumn>
      </Header>
      <MobileMenu isActive={isActive}>
        <TopNavigation />
        <Input placeholder="Product SKU, Name…" icon="search" />
        <MainMenu />
        <BottomNavigation />
        <Contact />
      </MobileMenu>
    </>
  );
};

export default HeaderSection;
