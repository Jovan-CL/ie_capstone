import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Header from "../Header";
import { useState } from "react";
import { HAMBURGER, IECONNECNEWPNG } from "../../assets";


const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    return setToggle((prev) => !prev);
  };
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col | sm:w-full md:w-full lg:w-full">
      <div
        onClick={() => toggler()}
        className="flex justify-left items-center gap-3 text-white pl-2 py-4 bg-[#264233] font-bold rounded-md overflow-hidden text-center"
      >
        <span className="cursor-pointer"><img src={HAMBURGER} alt="" />Menu</span>
        <div className={`${toggle ? "hidden" : ""} mb-4`}>
          <Header />
        </div>
        <SearchInput />
      </div>
      <div className="divider px-3"></div>
      <Conversations />
    </div>
  );
};
export default Sidebar;
