import { useLogout } from "./logout";
import { BiLogOutCircle } from "react-icons/bi";
const LogoutButton = () => {
  const logout = useLogout();
  return (
    <div
      className="flex items-center justify-center text-center gap-2 cursor-pointer text-white bg-[#495c52] h-[2rem] p-3 rounded-md outline outline-2 outline-offset-2 outline-stone-900"
      onClick={logout}
    >
      <span>Sign out</span> <BiLogOutCircle className=" w-6 h-6" />
    </div>
  );
};

export default LogoutButton;
