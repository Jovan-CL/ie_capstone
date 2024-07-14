import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8000/ie-connect/api/users", {
          credentials: "include",
        });
        const data = await res.json();
        const allUsers = data.data;
        if (data.error) {
          throw new Error(data.error);
        }
        // console.log(allUsers);
        setConversations(allUsers);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);
  // console.log(conversations)
  return { loading, conversations };
};
export default useGetConversations;
