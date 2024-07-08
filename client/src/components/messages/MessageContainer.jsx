import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/zustand.store";
import { TiMessages } from "react-icons/ti";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="flex flex-col w-full ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-[#2d473c] py-2 px-4 mb-2 ">
            <span className="label-text font-semibold text-lg">To :</span>{" "}
            <span className="text-stone-200 font-bold">
              {selectedConversation.name}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center text-2xl sm:text-3xl md:text-4xl text-stone-700 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {isAuthenticated.fullname}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-7xl md:text-8xl text-center" />
      </div>
    </div>
  );
};
