import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useEditProfile = async (formData) => {
  const { isAuthenticated } = useContext(AuthContext);
  try {
    const response = await fetch(
      `http://localhost:8000/ie-connect/api/profile/editProfile`,
      {
        body: formData,
        credentials: "include",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          id: isAuthenticated.id,
        },
      }
    );

    const result = response.data;
    console.log(result);
  } catch (error) {
    if (!error?.response) {
      console.log("Field must be completed!");
    }
  }

  return;
};
export default useEditProfile;
