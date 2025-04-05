import { useRef } from "react";
import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { SkipSelect } from "./pages/skipSelect/skipSelect";

function AppRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <div ref={nodeRef}>
      <Routes location={location}>
        <Route
          path="/"
          element={<Navigate to="/pages/skipselect/skipSelect" replace />}
        />
        <Route path="/pages/skipselect/skipSelect" element={<SkipSelect />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;