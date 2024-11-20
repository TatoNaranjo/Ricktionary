import React from "react";
import { Link } from "react-router-dom"; // Ensures navigation between pages using React Router.

import "./NotFound.css"; // Imports the corresponding styles for this component.

/**
 * NotFound Component
 * This component is displayed when the user navigates to a route that doesn't exist.
 * It includes a playful message in the style of Rick and Morty, a link back to the main gallery, 
 * and supports styling via an external CSS file.
 */
const NotFound = () => {
  return (
    <div className="not-found-container">
      {/* Main title for the 404 error */}
      <h1 className="not-found-title">404</h1>

      {/* Subtitle with a Rick and Morty reference */}
      <h2 className="not-found-subtitle">¡Wubba Lubba Dub-Dub! Page Not Found</h2>

      {/* Informative message and link to return to the homepage */}
      <p className="not-found-message">
        You seem to be lost in an unknown dimension. Return to the{" "}
        <Link to="/" className="not-found-link">
          Rick And Morty's Gallery
        </Link>
        .
      </p>
    </div>
  );
};

// Exports the component for use in other parts of the app
export default NotFound;