//Import NPM Packages
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Import Contexts
import { AuthProvider } from "./contexts/AuthContext.tsx";

//Import CSS
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
