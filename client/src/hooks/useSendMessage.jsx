import { useState } from "react";
import useConversation from "../zustand/zustand.store";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8000/ie-connect/api/chat/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
          credentials: "include",
        }
      );
      const data = await res.json();
      const newMessage = data.message;
      //   console.log(newMessage);
      if (data.error) throw new Error(data.error);
      setMessages([...messages, newMessage]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};
export default useSendMessage;
