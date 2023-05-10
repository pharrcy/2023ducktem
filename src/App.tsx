import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import MainPage from "./components/main/MainPage";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route index path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
