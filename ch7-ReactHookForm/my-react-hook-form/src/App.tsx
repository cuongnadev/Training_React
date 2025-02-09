import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import CustomResolverForm from "./resolver/Resolver";
import ZodResolver from "./resolver/ZodResolver";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/zod-resolver" element={<ZodResolver />} />
          <Route path="/resolver" element={<CustomResolverForm />} />
          <Route path="*" element={<Navigate to="/resolver" />} />
        </Routes>
      </div>
    </Router>
  );
}
