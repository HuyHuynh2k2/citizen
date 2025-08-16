import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import FlashCards from "./pages/FlashCards.jsx"; // create this file in step 3

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flashcards" element={<FlashCards />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
