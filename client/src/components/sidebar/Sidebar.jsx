import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Header from "../Header";
import { useState } from "react";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    return setToggle((prev) => !prev);
  };
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <div
        onClick={() => toggler()}
        className="flex justify-center items-center gap-3"
      >
        <span className="cursor-pointer ">Menu</span>
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
