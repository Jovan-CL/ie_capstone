/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/zustand.store";
import { extractTime } from "../../utils/extractTime";
import { PIIELOGOCROPPED } from "../../assets";


const Message = ({ message }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { selectedConversation } = useConversation();
  
  const fromMe = message.senderId === isAuthenticated.id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? isAuthenticated.profilePic
    : selectedConversation.photopic;
  const bubbleBgColor = fromMe ? "bg-green-700" : "";
  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={`${profilePic ? profilePic : PIIELOGOCROPPED}`} alt="user avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div
        className={`chat-footer opacity-50 text-xs flex gap-1 items-center `}
      >
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};
export default Message;
