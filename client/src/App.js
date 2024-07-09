import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Lazy load components
const Login = lazy(() => import('./pages/auth/Login'));
const Wait = lazy(() => import('./pages/wait page/Wait'));
const Register = lazy(() => import('./pages/auth/Register'));
const Profile = lazy(() => import('./pages/profile/Profile'));
const Home = lazy(() => import('./pages/home/Home'));
const Write = lazy(() => import('./pages/create_blog/Write'));
const Blog = lazy(() => import('./pages/create_blog/Blog'));
const AddInfo = lazy(() => import('./pages/user_info/AddInfo'));

function App() {
  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path="/" element={<Wait />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addinfo" element={<AddInfo />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:_id" element={<Profile />} />
          <Route path="/createblog" element={<Write />} />
          <Route path="/blogpost/:_id" element={<Blog />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
