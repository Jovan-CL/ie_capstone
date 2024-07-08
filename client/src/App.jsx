import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Bulletin,
  Jobs,
  Login,
  People,
  Profile,
  EditProfile,
  Registration,
  Chats,
} from "./pages/index";
import { AuthProvider } from "./context/AuthContext";
import { SocketContextProvider } from "./context/SocketContext";
import ProtectedRoute from "./ProtectedRoute";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    // <div className="app-container h-full">
    <AuthProvider>
      <BrowserRouter>
        <SocketContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route
              path="/bulletin"
              element={<ProtectedRoute element={<Bulletin />} />}
            />
            <Route
              path="/people"
              element={<ProtectedRoute element={<People />} />}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute element={<Profile />} />}
            />
            <Route
              path="/edit-profile"
              element={<ProtectedRoute element={<EditProfile />} />}
            />
            <Route
              path="/jobs"
              element={<ProtectedRoute element={<Jobs />} />}
            />
            <Route
              path="/chats"
              element={<ProtectedRoute element={<Chats />} />}
            />
          </Routes>
          <Toaster />
          {/* <ProtectedRoute element={<Chats />} /> */}
        </SocketContextProvider>
      </BrowserRouter>
    </AuthProvider>
    // </div>
  );
};

export default App;
