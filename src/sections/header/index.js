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

  const switcher = (
    <ThemeSwitcher active={isDark} onClick={switchTheme}>
      <i />
      <span>{isDark ? "Dark" : "Light"}</span>
    </ThemeSwitcher>
  );

  const topNavigation = (
    <SecondaryNav>
      {SECOND_NAV_ITEMS.map(({ name, link }) => (
        <a href={link} key={name}>
          {name}
        </a>
      ))}
    </SecondaryNav>
  );

  const mainMenu = (
    <Menu>
      {MENU_ITEMS.map(({ name, link, icon, count }) => (
        <a href={link} key={name} className="item">
          <i className={`icon-${icon}`}>{count && <b>{count}</b>}</i>
          {name}
        </a>
      ))}
    </Menu>
  );

  const bottomNavigation = (
    <PrimaryNav>
      {PRIMARY_NAV_ITEMS.map(({ name, link }) => (
        <a href={link} key={name}>
          {name}
        </a>
      ))}
    </PrimaryNav>
  );

  const contact = (
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
          {switcher}
          {topNavigation}
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
          {mainMenu}
          {switcher}
          <Burger
            isActive={isActive}
            onClick={() => setIsActive(prev => !prev)}
          >
            <i className="burger-icon" />
          </Burger>
        </Content>
        <TwoColumn>
          {bottomNavigation}
          {contact}
        </TwoColumn>
      </Header>
      <MobileMenu isActive={isActive}>
        {topNavigation}
        <Input placeholder="Product SKU, Name…" icon="search" />
        {mainMenu}
        {bottomNavigation}
        {contact}
      </MobileMenu>
    </>
  );
};

export default HeaderSection;
