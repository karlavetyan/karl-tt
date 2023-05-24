import { useEffect, useState } from "react";

import { AUTHORIZED } from "constants/states";
import { useCheckState, useNewMessage } from "utils/useRequest";
import { clearStorage, setStorage } from "utils/helpers";
import ChatBox from "sections/chatBox";
import LeftSide from "sections/leftSide";
import SplashScreen from "sections/splashScreen";

import "assets/scss/style.scss";

function Chat() {
  const { data, checkMessages } = useNewMessage();

  const [selectedChat, setSelectedChat] = useState({});
  const [isLoadingFinished, setIsLoadingFinished] = useState(false);

  const {
    isLoading,
    data: { stateInstance }
  } = useCheckState();

  const isSplash = isLoading || !stateInstance;
  const isAuthorized = stateInstance === AUTHORIZED;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAuthorized) {
        checkMessages();
      }
    }, 4500);

    return () => {
      clearInterval(interval);
    }; // eslint-disable-next-line
  }, [isAuthorized]);

  if (isLoading || !stateInstance || !isLoadingFinished) {
    return (
      <SplashScreen
        isLoading={isSplash}
        finished={() => setIsLoadingFinished(true)}
      />
    );
  }

  if (!isAuthorized) {
    setStorage({
      name: "error",
      isError: true,
      message: stateInstance
    });
    window.location.reload(false);

    return null;
  } else {
    clearStorage("error");
  }

  return (
    <div className="app fade">
      <LeftSide onSelectedChat={setSelectedChat} />
      {!selectedChat ? (
        <div className="empty-chat-box">Green API Client</div>
      ) : (
        <ChatBox selectedChat={selectedChat} newMessages={data} />
      )}
    </div>
  );
}

export default Chat;
