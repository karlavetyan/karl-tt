import { useState } from "react";

import { ERRORS } from "constants/errors";
import { clearStorage, getStorage, setStorage } from "utils/helpers";

import "./style.scss";
import Button from "components/button";

const { isError, message } = getStorage("error") || {};
const { idInstance, apiTokenInstance } = getStorage() || {};

const LoginPage = () => {
  const [id, setId] = useState(idInstance);
  const [token, setToken] = useState(apiTokenInstance);

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
