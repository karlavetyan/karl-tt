import moment from "moment";
export const setStorage = ({ name = "credentials", ...props }) => {
  sessionStorage.setItem(name, JSON.stringify({ ...props }));
};

export const clearStorage = (item = "credentials") => {
  sessionStorage.removeItem(item);
};

export const getStorage = (item = "credentials") => {
  return JSON.parse(sessionStorage.getItem(item));
};

export const addContact = ({ phone, format }) => {
  const list = getStorage("contacts") || [];
  sessionStorage.setItem(
    "contacts",
    JSON.stringify([{ phone, format }, ...list])
  );
};

export const addMessage = ({ phone, message, id, type, timestamp }) => {
  const existingData = getStorage("messages") || {};
  const currentChat = existingData[phone] || {};

  const updatedData = {
    ...existingData,
    [phone]: { ...currentChat, [timestamp]: { message, id, type, timestamp } }
  };

  sessionStorage.setItem("messages", JSON.stringify(updatedData));
};

export const getChatHistory = async phone => {
  return new Promise(resolve => {
    const existingData = getStorage("messages") || {};
    const chatHistory = existingData?.[phone] || [];

    resolve(chatHistory);
  });
};

export const formatNumbers = (number, format) => {
  let formattedNumber = "";
  let digitIndex = 0;

  for (let i = 0; i < format.length; i++) {
    if (format[i] === ".") {
      formattedNumber += number[digitIndex] || "";
      digitIndex++;
    } else {
      formattedNumber += format[i];
    }
  }

  return formattedNumber;
};

export const formatDate = timestamp => {
  return moment(timestamp)
    .local()
    .format("HH:mm");
};

export const sortHistory = sortedData =>
  Object.fromEntries(
    Object.entries(sortedData).sort(([keyA], [keyB]) => keyB - keyA)
  );
