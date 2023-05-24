import { memo, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import TextareaAutosize from "react-textarea-autosize";

import { useSendMessage } from "utils/useRequest";
import {
  addMessage,
  formatDate,
  formatNumbers,
  getChatHistory,
  getStorage,
  sortHistory
} from "utils/helpers";

import "./style.scss";
import { ALLOWED_MESSAGE_TYPES } from "constants/states";
import moment from "moment";

const { phone: user } = getStorage("user") || {};

const ChatBox = ({ selectedChat = {}, newMessages }) => {
  const { phone, format } = selectedChat;

  const blockRef = useRef();
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [history, setHistory] = useState({});

  const { isLoading, data: { idMessage } = {}, sendMessage } = useSendMessage();

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const chatHistory = await getChatHistory(phone);
        setHistory(chatHistory);
      } catch (error) {}
    };

    fetchChatHistory();
  }, [phone]);

  useEffect(() => {
    if (newMessage?.length !== newMessages?.length) {
      setNewMessage(newMessages);

      newMessages.forEach(({ chatId, textMessage, timestamp, typeMessage }) => {
        const existingMessage = !history[timestamp];

        if (
          existingMessage &&
          chatId === `${phone}@c.us` &&
          ALLOWED_MESSAGE_TYPES.includes(typeMessage)
        ) {
          const myData = {
            type: "incoming",
            phone,
            message: textMessage,
            id: idMessage,
            timestamp: timestamp * 1000
          };
          addMessage(myData);
          setHistory(prev => ({ ...prev, [timestamp * 1000]: myData }));
        }
      });
    }
    // eslint-disable-next-line
  }, [history, newMessage, phone, newMessages]);

  useEffect(() => {
    if (idMessage && message) {
      const myData = {
        type: "outgoing",
        phone,
        message,
        id: idMessage,
        timestamp: moment().unix() * 1000
      };

      setHistory(prev => ({ ...prev, [moment().unix() * 1000]: myData }));
      addMessage(myData);
      setMessage("");
    }
    // eslint-disable-next-line
  }, [idMessage]);

  if (!phone) {
    return null;
  }

  const handleSentMessage = () => {
    const text = message?.trim();

    if (text) {
      sendMessage(phone, text);
      setShowLoading(true);
    }
  };

  return (
    <div className="chat-box fade">
      <div className="background" />
      <div className="header">
        {formatNumbers(phone, format)} {phone === user && "(You)"}
      </div>
      <div className="chat-content" ref={blockRef}>
        {Object.values(sortHistory(history) || {}).map(
          ({ type, message, timestamp }) => (
            <div className={type} key={timestamp}>
              {message}
              <time>{formatDate(timestamp)}</time>
            </div>
          )
        )}
        <div className="center uppercase">Start</div>
      </div>
      <div className="chat-input">
        {showLoading && (
          <div className={classNames("progress", { loaded: !isLoading })}>
            <div onAnimationEnd={() => setShowLoading(false)} />
          </div>
        )}
        {!message && <span className="placeholder">Type a message</span>}
        <TextareaAutosize
          minRows={1}
          maxRows={5}
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
        />
        <i className="icon-send" onClick={handleSentMessage} />
      </div>
    </div>
  );
};

export default memo(ChatBox);
