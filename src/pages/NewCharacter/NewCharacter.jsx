// Import necessary React hooks and components from external libraries
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook for routing
import Header from "../../components/Header/Header"; // Import the Header component
import { globalContext } from "../../context/GlobalContext"; // Import the global context for shared state and functions

// Define the NewCharacter component as the default export
export default function NewCharacter() {
    // Access the global context using the useContext hook
    const context = useContext(globalContext);

    // Destructure functions and data from the context
    const { handleNewCharacter, characters } = context;

    // Define state variables for the form fields
    const [name, setName] = useState(""); // Character's name
    const [origin, setOrigin] = useState({ name: "" }); // Character's origin
    const [species, setSpecies] = useState(""); // Character's species
    const [location, setLiving] = useState({ name: "" }); // Character's current living location
    const [image, setImage] = useState(""); // Character's image URL

    /**
     * Handles form submission to create a new character.
     * Validates input fields, creates a new character object, and resets the form.
     * @param {Event} event - The form submit event.
     */
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior

        // Validate that all fields are filled
        if (!name || !origin.name || !species || !location.name || !image) {
            alert("Every field is required, please fill everything.");
            return;
        }

        // Create a new character object based on the input fields
        const newCharacter = {
            id: characters.length + 1, // Generate a unique ID based on the current number of characters
            name,
            origin: {
                name: origin.name,
            },
            species,
            location: {
                name: location.name,
            },
            image,
        };

        // Add the new character to the context's character list
        handleNewCharacter(newCharacter);

        // Reset form fields
        setName("");
        setOrigin({ name: "" });
        setSpecies("");
        setLiving({ name: "" });
        setImage("");
    };

    // Render the NewCharacter component JSX
    return (
        <>
            {/* Render the header */}
            <Header />

            {/* Form container */}
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    {/* Character's name */}
                    <div className="form-group">
                        <label htmlFor="name">Character's Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            onChange={(e) => setName(e.target.value)} // Update the name state
                        />
                    </div>

                    {/* Origin */}
                    <div className="form-group">
                        <label htmlFor="origin">Origin:</label>
                        <input
                            type="text"
                            id="origin"
                            name="origin"
                            required
                            onChange={(e) => setOrigin({ ...origin, name: e.target.value })} // Update the origin state
                        />
                    </div>

                    {/* Species */}
                    <div className="form-group">
                        <label htmlFor="species">Species:</label>
                        <input
                            type="text"
                            id="species"
                            name="species"
                            required
                            onChange={(e) => setSpecies(e.target.value)} // Update the species state
                        />
                    </div>

                    {/* Current living location */}
                    <div className="form-group">
                        <label htmlFor="living">Currently Living In:</label>
                        <input
                            type="text"
                            id="living"
                            name="living"
                            required
                            onChange={(e) => setLiving({ ...location, name: e.target.value })} // Update the location state
                        />
                    </div>

                    {/* Character's image URL */}
                    <div className="form-group">
                        <label htmlFor="image">Character's Image URL:</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            required
                            onChange={(e) => setImage(e.target.value)} // Update the image state
                        />
                    </div>

                    {/* Submit button */}
                    <div className="form-group">
                        <button type="submit" className="button">
                            Create Character
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}