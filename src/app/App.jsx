import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Layout.jsx";

import Home from "../screens/home/index.jsx";
import WeAre from "../screens/weAre/index.jsx";
import TeamMember from "../screens/teamMember/index.jsx";
import WeDo from "../screens/weDo/index.jsx";
import Projects from "../screens/projects/index.jsx";
import Contact from "../screens/contact/index.jsx";
import Terms from "../screens/_terms/index.jsx";
import Privacy from "../screens/_privacy/index.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/somos" element={<WeAre />} />
          <Route path="/equipo/:memberId" element={<TeamMember />} />
          <Route path="/queHacemos" element={<WeDo />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/terminos" element={<Terms />} /> {/* new */}
          <Route path="/privacidad" element={<Privacy />} /> {/* new */}
        </Route>
      </Routes>
    </Router>
  );
}
