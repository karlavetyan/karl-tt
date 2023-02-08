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
  ContactNumber
} from "./Header.styled";

const HeaderSection = ({ isDark, switchTheme }) => (
  <Header>
    <TwoColumn>
      <ThemeSwitcher active={isDark} onClick={switchTheme}>
        <i />
        <span>{isDark ? "Dark" : "Light"}</span>
      </ThemeSwitcher>
      <SecondaryNav>
        {SECOND_NAV_ITEMS.map(({ name, link }) => (
          <a href={link} key={name}>
            {name}
          </a>
        ))}
      </SecondaryNav>
    </TwoColumn>
    <Content>
      <a href="/" className="logo">
        <i className="icon-logo" />
      </a>
      <Input placeholder="Product SKU, Name…" icon="search" />
      <Menu>
        {MENU_ITEMS.map(({ name, link, icon, count }) => (
          <a href={link} key={name} className="item">
            <i className={`icon-${icon}`}>{count && <b>{count}</b>}</i>
            {name}
          </a>
        ))}
      </Menu>
    </Content>
    <TwoColumn>
      <PrimaryNav>
        {PRIMARY_NAV_ITEMS.map(({ name, link }) => (
          <a href={link} key={name}>
            {name}
          </a>
        ))}
      </PrimaryNav>
      <ContactNumber href={`tel:${CONTACT_NUMBER.number}`}>
        <i className="icon-phone" />
        <span>{CONTACT_NUMBER.text}</span>
      </ContactNumber>
    </TwoColumn>
  </Header>
);

export default HeaderSection;
