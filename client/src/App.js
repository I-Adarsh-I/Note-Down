import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Wait from "./pages/wait page/Wait";
import Register from "./pages/auth/Register";
import Profile from "./pages/profile/Profile";
import Home from './pages/home/Home'
import Write from "./pages/create_blog/Write";
import Blog from "./pages/create_blog/Blog";
import Test from "./pages/test/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Wait />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createblog" element={<Write />} />
        <Route path="/blogpost" element={<Blog />} />
        <Route path="/test" element={<Test />}/>
      </Routes>
    </div>
  );
}

export default App;
