import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
// import Settings from "./pages/Settings";
// import Header from "./components/Header";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;