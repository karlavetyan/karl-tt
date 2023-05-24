import { useGetSettings } from "utils/useRequest";

import avatar from "assets/images/avatar.svg";
import { useEffect } from "react";
import { setStorage } from "utils/helpers";

const UserPhone = () => {
  const { data, isLoading } = useGetSettings();
  const { wid } = data || {};
  const phone = wid?.split("@")[0];

  useEffect(
    () => setStorage({ name: "user", phone }),
    // eslint-disable-next-line
    [wid]
  );

  return (
    <div className="user-block">
      <img src={avatar} alt="avatar" />
      <p>{!isLoading && `+${wid?.split("@")[0]}`}</p>
    </div>
  );
};

export default UserPhone;
