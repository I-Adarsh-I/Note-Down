import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Wait from "./pages/wait page/Wait";
import Register from "./pages/auth/Register";
import Profile from "./pages/profile/Profile";
import AllBlogs from "./pages/all_blogs/AllBlogs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Wait />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/allblogs" element={<AllBlogs />} />
      </Routes>
    </div>
  );
}

export default App;
