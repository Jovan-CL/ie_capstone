import { useEffect, useState } from "react";
import useConversation from "../zustand/zustand.store";
import toast from "react-hot-toast";

const useGetProfile = () => {
  const [loading, setLoading] = useState(false);
  const { currentProfileToEdit, setCurrentProfileToEdit } = useConversation();

  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:8000/ie-connect/api/profile`,
          {
            credentials: "include",
          }
        );
        const user = await res.json();
        const userProfile = user.data;
      } catch (error) {
        toast.error(error.message);
      }
    };

    getProfile();
  }, []);
};
export default useGetProfile;
