import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Attractions from "./pages/Attractions";
import Reviews from "./pages/Reviews";
import LeaveReview from "./pages/LeaveReview";
import PayTrip from "./pages/PayTrip";
import ConnectWallet from "./pages/ConnectWallet";
import About from "./components/About";
import Chatbot from "./pages/Chatbot";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/Attractions" element={<Attractions/>} />
          <Route path="/Reviews" element={<Reviews/>} />
          <Route path="/LeaveReview" element={<LeaveReview/>} />
          <Route path="/PayTrip" element={<PayTrip/>} />
          <Route path="/ConnectWallet" element={<ConnectWallet/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Chatbot" element={<Chatbot/>} />
        </Route>
      </Routes>
    </Router>
  );
}