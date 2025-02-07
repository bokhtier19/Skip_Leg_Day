import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SmoothScrolling from "./components/SmoothScrolling.tsx";
import AnimaitonProvider from "./context/AnimationContext.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AnimaitonProvider>
            <SmoothScrolling>
                <App />
            </SmoothScrolling>
        </AnimaitonProvider>
    </BrowserRouter>
);
