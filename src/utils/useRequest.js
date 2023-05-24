import { useEffect, useState } from "react";

import {
  INVALID_CREDENTIALS,
  INVALID_NUMBER,
  UNKNOWN_ERROR,
  VALID_NUMBER
} from "constants/states";
import { getStorage } from "utils/helpers";

const { idInstance, apiTokenInstance } = getStorage() || {};

const restAPI =
  idInstance &&
  window.whatsAppClient.restAPI({
    idInstance,
    apiTokenInstance
  });

export const useCheckNumber = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const checkPhone = async number => {
    setIsLoading(true);

    restAPI.instance
      .checkWhatsapp(Number(number))
      .then(({ existsWhatsapp }) => {
        setData(existsWhatsapp ? VALID_NUMBER : INVALID_NUMBER);
      })
      .catch(error => {
        setData(INVALID_NUMBER);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, data, checkPhone };
};

export const useSendMessage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const sendMessage = async (number, message) => {
    setIsLoading(true);
    restAPI.message
      .sendMessage(`${number}@c.us`, null, message)
      .then(response => {
        setData(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, data, sendMessage };
};

export const useCheckState = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setIsLoading(true);

    restAPI.instance
      .getStateInstance()
      .then(response => {
        setData(response);
      })
      .catch(error => {
        console.log(error);

        if (error?.response?.status === 401) {
          setData({ stateInstance: INVALID_CREDENTIALS });
        } else {
          setData({ stateInstance: UNKNOWN_ERROR });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, data };
};

export const useGetSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setIsLoading(true);

    restAPI.settings
      .getSettings()
      .then(response => {
        setData(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, data };
};

export const useNewMessage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const checkMessages = async () => {
    setIsLoading(true);
    restAPI.message
      .lastIncomingMessages()
      .then(response => {
        setData(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, data, checkMessages };
};
