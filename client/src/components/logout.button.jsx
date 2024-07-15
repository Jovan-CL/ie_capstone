import { useLogout } from "./logout";
import { BiLogOutCircle } from "react-icons/bi";
const LogoutButton = () => {
  const logout = useLogout();
  return (
    <div
      className="flex items-center justify-center text-center gap-2 cursor-pointer text-[#495c52] bg-white 
      h-[2rem] w-[9rem] p-5 rounded-md outline outline-2 outline-offset-2 outline-[#495c52] mt-4 hover:bg-[#495c52] 
      hover:text-white transition duration-150 ease-out hover:ease-in"
      onClick={logout}
    >
      <span>Sign out</span> <BiLogOutCircle className=" w-6 h-6" />
    </div>
  );
};

export default LogoutButton;
