import { useEffect, useState } from "react";
import useConversation from "../zustand/zustand.store";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:8000/ie-connect/api/chat/${selectedConversation._id}`,
          {
            credentials: "include",
          }
        );
        // console.log(selectedConversation._id)
        const data = await res.json();
        const allMessagesPerConvo = data;
        // console.log(data);
        if (data.error) throw new Error(data.error);
        setMessages(allMessagesPerConvo);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};
export default useGetMessages;
