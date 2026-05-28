import "./styles/globals.css";

import { SelectionProvider } from "./context/SelectionContext";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
      <SelectionProvider>
        <AppRoutes />
      </SelectionProvider>
  );
}