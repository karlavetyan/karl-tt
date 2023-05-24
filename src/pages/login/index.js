import { useState } from "react";

import { ERRORS } from "constants/errors";
import { clearStorage, getStorage, setStorage } from "utils/helpers";

import "./style.scss";
import Button from "components/button";

const { isError, message } = getStorage("error") || {};
const { idInstance, apiTokenInstance } = getStorage() || {};

const LoginPage = () => {
  const [id, setId] = useState("1101824282" || idInstance);
  const [token, setToken] = useState(
    "07036b4822c54b5c90964d9d3523da377d3443975d83440da7" || apiTokenInstance
  );

  const handleLogin = () => {
    setStorage({ idInstance: id, apiTokenInstance: token });
    clearStorage("error");

    window.location.reload(false);
  };

  return (
    <div className="login">
      <div className="form fade">
        <h1>Welcome to WhatsApp client</h1>
        <h4>Please login first</h4>
        <input
          type="text"
          value={id}
          placeholder="ID instance"
          onChange={({ target: { value } }) => setId(value)}
        />
        <input
          type="text"
          value={token}
          placeholder="API token instance"
          onChange={({ target: { value } }) => setToken(value)}
        />
        {isError && <p className="error-message">{ERRORS[message]}</p>}
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
