import "./styles/globals.css";

import { BrowserRouter } from "react-router-dom";
import { SelectionProvider } from "./context/SelectionContext";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { lenis } from "./utils/smoothScroll.ts";
import FloatingAboutButton from "./components/common/FloatingAboutButton.tsx";

export default function App() {
    useEffect(() => {
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <BrowserRouter>
            <SelectionProvider>
                <AppRoutes />
                <FloatingAboutButton />
            </SelectionProvider>
        </BrowserRouter>
    );
}