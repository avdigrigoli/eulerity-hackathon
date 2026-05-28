import "./styles/globals.css";

import { SelectionProvider } from "./context/SelectionContext";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { lenis } from "./utils/smoothScroll.ts";

export default function App() {
    useEffect(() => {
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <SelectionProvider>
            <AppRoutes />
        </SelectionProvider>
    );
}