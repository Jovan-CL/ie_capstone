import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Bulletin, Jobs, Login, People, Profile } from "./pages/index";
import RootPage from "./RootPage";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
      <Route path="/login" element={<Login />} />
      <Route index path="/bulletin" element={<Bulletin />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/people" element={<People />} />
      <Route path="/jobs" element={<Jobs />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
