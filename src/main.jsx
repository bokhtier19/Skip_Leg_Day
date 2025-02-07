import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import SmoothScrolling from "./components/SmoothScrolling.tsx";
import AnimaitonProvider from "./context/AnimationContext.jsx";

createRoot(document.getElementById("root")).render(
    <HashRouter>
        <AnimaitonProvider>
            <SmoothScrolling>
                <App />
            </SmoothScrolling>
        </AnimaitonProvider>
    </HashRouter>
);
