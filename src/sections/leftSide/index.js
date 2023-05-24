import { useCallback, useState } from "react";

import { addContact, getStorage } from "utils/helpers";
import ContactList from "sections/leftSide/contactList";
import NewContact from "sections/leftSide/newContact";
import UserPhone from "components/userPhone";

import "./style.scss";

const LeftSide = ({ onSelectedChat }) => {
  const [contactList, setContactList] = useState(getStorage("contacts") || []);
  const [isNewContactOpen, setIsNewContactOpen] = useState(false);

  const handleNewContact = useCallback(
    value => {
      if (value?.phone) {
        addContact(value);
        setContactList([value, ...contactList]);
      }
    },
    // eslint-disable-next-line
    [isNewContactOpen, contactList]
  );

  const handleSelectedChat = val => {
    onSelectedChat(val);
  };

  return (
    <div className="left-side">
      <div className="header">
        <UserPhone />
        <i className="icon-chat" onClick={() => setIsNewContactOpen(true)} />
      </div>
      <NewContact
        contactList={contactList}
        isOpen={isNewContactOpen}
        addNewContact={value => handleNewContact(value)}
        onClick={() => setIsNewContactOpen(false)}
      />
      <ContactList data={contactList} onClick={handleSelectedChat} />
    </div>
  );
};

export default LeftSide;
