
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./router/layout";
import Home from "./router/home.js";
import Feedback from "./router/feedback.js"
import Login from "./router/login.js"
import Signup from "./router/signup.js"
import './App.css';

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/HOME" element={<Home/>}>
          <Route path="FEEDBACK" element={<Feedback/>}></Route>
        </Route>
        <Route path="LOGIN" element={<Login/>}></Route>
        <Route path="SIGNUP" element={<Signup/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



