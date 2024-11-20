import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalContextProvider from "./context/GlobalContext";
import { globalContext } from "./context/GlobalContext";
import Register from "./components/Register/Register";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import NewCharacter from "./pages/NewCharacter/NewCharacter";
import Login from "./components/Login/Login";
import ProtectedRoute from "./ProtectedRoute";

/**
 * PageRoutes Component
 * This component defines all the routes for the application using React Router.
 * It wraps the application in a global context and handles both protected and public routes.
 * Routes include home, login, registration, adding new characters, and handling 404 errors.
 */

export default function PageRoutes() {
  // Access the global context to manage application state or authentication
  const context = useContext(globalContext);

  return (
    <BrowserRouter>
      {/* Provides the global context to all components */}
      <GlobalContextProvider>
        <Routes>
          {/* Protected Route: Home page - requires user authentication */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          {/* Public Route: User registration page */}
          <Route path="/Register" element={<Register />} />

          {/* Public Route: Login page */}
          <Route path="/login" element={<Login />} />

          {/* Protected Route: Add new character page - requires user authentication */}
          <Route
            path="/newCharacter"
            element={
              <ProtectedRoute>
                <NewCharacter />
              </ProtectedRoute>
            }
          />

          {/* Catch-all Route: Displays a 404 error page for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}