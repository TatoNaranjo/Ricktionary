// Import necessary React hooks and components from external libraries
import { useState, useContext } from "react";
import { globalContext } from "../../context/GlobalContext"; // Import the global context to access shared state and functions
import { useNavigate, Link } from "react-router-dom"; // Import navigation tools and Link for routing
import "./Header.css"; // Import the CSS styles for the header component

// Define the Header component as the default export
export default function Header() {
    // Access the global context using the useContext hook
    const context = useContext(globalContext);

    // Initialize the navigation hook for programmatically navigating between routes
    const navigate = useNavigate();

    // Destructure functions from the context to handle search and logout functionality
    const { handleSearch, handleLogout } = context;

    // Create a state variable for managing the search input
    const [search, setSearch] = useState("");

    /**
     * Updates the search state as the user types in the input field.
     * @param {Event} event - The input change event.
     */
    const handleValue = (event) => {
        setSearch(event.target.value);
    };

    /**
     * Handles the form submission for the search functionality.
     * Prevents default form behavior and triggers the handleSearch function.
     * @param {Event} event - The form submit event.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(search);
    };

    /**
     * Handles the logout functionality.
     * Prevents default behavior, triggers the handleLogout function, and navigates to the Register page.
     * @param {Event} event - The logout button click event.
     */
    const logout = (event) => {
        event.preventDefault();
        handleLogout();
        navigate("/Register");
    };

    /**
     * Navigates to the page for creating a new character.
     * Prevents default button behavior and redirects to the newCharacter route.
     * @param {Event} event - The button click event.
     */
    const handleNewCharacter = (event) => {
        event.preventDefault();
        navigate("/newCharacter");
    };

    // Render the Header component JSX
    return (
        <>
            {/* Main navigation bar */}
            <header className="mainNavbar">
                {/* Logo and home link */}
                <div>
                    <Link className="mainLogo" to="/">
                        <h1><b>Rick</b>tionary</h1>
                    </Link>
                </div>

                {/* Right-side content: search bar and buttons */}
                <div className="rightSide">
                    {/* Search bar section */}
                    <div className="searchBar">
                        <form onSubmit={handleSubmit}>
                            <button>
                                <img src="/logos/search.svg" alt="Search" className="searchImg" />
                            </button>
                            <input
                                type="text"
                                placeholder="Search a Character"
                                onChange={handleValue}
                                value={search}
                            />
                        </form>
                    </div>

                    {/* Divider with buttons for additional actions */}
                    <div className="button-divider">
                        {/* Create a new character button */}
                        <div>
                            <button onClick={handleNewCharacter} className="button nav-button">
                                Create a Character
                            </button>
                        </div>

                        {/* Logout button */}
                        <div>
                            <button onClick={logout} className="button nav-button close-button">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Wave divider for visual styling */}
            <div className="wave-container">
                <div className="custom-shape-divider-top-1724028785">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
            </div>
        </>
    );
}