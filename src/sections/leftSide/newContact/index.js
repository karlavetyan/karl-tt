import { useEffect, useState } from "react";
import classNames from "classnames";
import PhoneInput from "react-phone-input-2";

import { INVALID_NUMBER, VALID_NUMBER } from "constants/states";
import { useCheckNumber } from "utils/useRequest";
import Button from "components/button";

import "react-phone-input-2/lib/style.css";

const NewContact = ({ isOpen, onClick, addNewContact, contactList }) => {
  const [phone, setPhone] = useState("3749311672");
  const [format, setFormat] = useState(null);
  const [error, setError] = useState(null);

  const { data, isLoading, checkPhone } = useCheckNumber();
  const duplicateNumber = contactList.some(
    ({ phone: number }) => phone === number
  );

  const handleCheck = () => {
    if (duplicateNumber) {
      setError("Phone number already exist");
    } else {
      checkPhone(phone);
    }
  };

  const handleClose = () => {
    onClick();
    setPhone("+7");
    setError(null);
  };

  useEffect(() => {
    if (phone?.length > 4) {
      if (data === VALID_NUMBER && !duplicateNumber) {
        addNewContact({ phone, format });
        handleClose();
      } else if (data === INVALID_NUMBER) {
        setError("Phone number is incorrect or user doesn't have WhatsApp");
      }
    }
    // eslint-disable-next-line
  }, [contactList, data]);

  return (
    <div className={classNames("new-contact", { isOpen })}>
      <div className="header back">
        <i className="icon-chevron-left" onClick={handleClose} /> New contact
      </div>
      <div className="form">
        <i className="icon-phone" />
        <p className="label">Type phone number</p>
        <PhoneInput
          country="ru"
          inputProps={{
            autoFocus: true
          }}
          value={phone}
          onChange={(phone, country) => {
            setPhone(phone);
            setFormat(country?.format);
          }}
        />
        {error && <p className="error-message">{error}</p>}
        <Button isLoading={isLoading} onClick={handleCheck}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default NewContact;
