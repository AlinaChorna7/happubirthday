import React from "react";
import { createRoot } from "react-dom/client"; // Імпортуємо createRoot з react-dom/client

import App from "./App.jsx";

// Рендеримо компонент <App /> напряму в корінь
createRoot(document.getElementById("app")).render(<App />);
