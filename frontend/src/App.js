import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Authentication from "./components/Auth/Authentication";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to redirect to the authentication page */}
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </Router>
  );
}

export default App;
