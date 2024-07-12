import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import Skeletons from "../../utils/skeletons";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";
const Messages = () => {
  const { messages, loading } = useGetMessages();
    // console.log(messages);
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      

      {!loading && messages.length === 0 && (
        <p className="text-center h-full flex justify-center items-center text-2xl">Send a message to start the conversation</p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          //   console.log(message);
          return (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          );
        })}

      {loading && <Skeletons />}
    </div>
  );
};
export default Messages;
