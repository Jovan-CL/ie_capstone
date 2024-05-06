import { NavLink, Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <>
      <header>
        <NavLink to="/">
          <img src="./assets/piie-logo-cropped" alt="" />
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
