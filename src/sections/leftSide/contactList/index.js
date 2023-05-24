import { memo, useState } from "react";
import { formatNumbers } from "utils/helpers";
import classNames from "classnames";

const ContactList = ({ data, onClick }) => {
  const [selected, setSelected] = useState(null);
  const isEmpty = !data.length;

  if (isEmpty) {
    return (
      <div className="empty-contacts">
        <i className="icon-empty" /> is empty
      </div>
    );
  }
  return (
    <ul className="contact-list">
      {data.map(({ phone, format, name }) => (
        <li
          key={phone}
          onClick={() => {
            setSelected(phone);
            onClick({ phone, format, name });
          }}
          className={classNames({ selected: phone === selected })}
        >
          <p className="name">{name}</p>
          <p>{formatNumbers(phone, format)}</p>
        </li>
      ))}
    </ul>
  );
};

export default memo(ContactList);
