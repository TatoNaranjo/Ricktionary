import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { globalContext } from "../../context/GlobalContext";
import "./Register.css"

// Define the Register component as the default export
export default function Register() {

    // Access the global context using the useContext hook
    const context = useContext(globalContext);
    const { emaillog, passwordlog, setEmaillog, setPasswordlog, setIsAuthenticated } = context;

    // Create state variables for managing form inputs and flags
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);

    // Initialize the navigation hook for programmatically navigating between routes
    const navigate = useNavigate();

    // Effect to check authentication status on component mount
    useEffect(() => {
        const authStatus = localStorage.getItem('dataSubmissionEmail');
        if (authStatus !== '' && emaillog === authStatus) {
            setIsAuthenticated(true);
            navigate("/");
        }
    }, []);

    /**
     * Handles the form submission for the registration functionality.
     * Prevents default form behavior, validates inputs, and saves data to local storage.
     * @param {Event} e - The form submit event.
     */
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("dataSubmissionEmail", JSON.stringify(email));
            localStorage.setItem("dataSubmissionPassword", JSON.stringify(password));
            localStorage.setItem("dataSubmissionUsername", JSON.stringify(name));

            navigate("/login"); // Redirect to login after successful registration
        }
    }

    /**
     * Redirects directly to the login page.
     */
    function handleClick() {
        navigate("/login"); // Redirect to login
    }

    // Render the Register component JSX
    return (
        <div className="form-container">
            <form onSubmit={handleFormSubmit} className="form">
                <h3>Register</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Username" 
                        onChange={(event) => setName(event.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        onChange={(event) => setEmail(event.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        onChange={(event) => setPassword(event.target.value)} 
                    />
                </div>

                <button className="button" type="submit">Register</button>

                <p className="forgot-password text-right">
                    Already Registered? <a href="#" onClick={handleClick}>Log In</a>
                </p>

                {flag && (
                    <p>
                        Wait, you have to fill everything here. Please complete all the fields before you go.
                    </p>
                )}
            </form>
        </div>
    );
}