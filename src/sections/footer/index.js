import { CONTACT_NUMBER } from "constants/info";
import { FOOTER_MENU } from "constants/navigations";
import Input from "components/input";
import Button from "components/button";

import { ContactNumber } from "sections/header/Header.styled";
import {
  Footer,
  SubInput,
  MenuBlock,
  Copyright,
  Subscription,
  MenuAndSubscription
} from "./Footer.styled";

import payment from "assets/images/payment.png";

const CURRENT_YEAR = new Date().getFullYear();

const FooterSection = () => (
  <Footer>
    <div className="content">
      <MenuAndSubscription>
        {FOOTER_MENU.map(({ name, links }) => (
          <MenuBlock key={name}>
            <p>{name}</p>
            {links.map(({ name, link, isMobile }) =>
              isMobile ? (
                <ContactNumber
                  href={`tel:${CONTACT_NUMBER.number}`}
                  isFooter
                  key={isMobile}
                >
                  <i className="icon-phone" />
                  <span>{CONTACT_NUMBER.text}</span>
                </ContactNumber>
              ) : (
                <a href={link} key={name}>
                  {name}
                </a>
              )
            )}
          </MenuBlock>
        ))}
        <Subscription>
          <p>
            Subscribe to our mailing list to receive exclusive offers and the
            latest product updates
          </p>
          <SubInput>
            <Input type="email" laceholder="Your E-mail" darkMode required />
            <Button isSmall smallRadius>
              Subscribe
            </Button>
          </SubInput>
          <img className="payment" src={payment} alt="payment" />
        </Subscription>
      </MenuAndSubscription>
      <Copyright>© «Brand» {CURRENT_YEAR}, All Rights Reserved</Copyright>
    </div>
  </Footer>
);

export default FooterSection;
