import { useEffect } from "react";
import useConversation from "../zustand/zustand.store";
const useGetJobs = () => {
  const { jobs, setJobs } = useConversation();
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/ie-connect/api/jobs",
          {
            credentials: "include", // Include credentials (cookies)
          }
        );
        if (response.ok) {
          const data = await response.json();
          //   console.log(response);
          // console.log(data);
          setJobs(data);
        } else {
          console.error("Failed to fetch announcements:", response.status);
        }
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchJobs();
  }, []);
  //   console.log(jobs);
  return { jobs };
};
export default useGetJobs;
