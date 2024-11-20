import { createContext, useEffect, useState } from "react";
import { search } from "../services/api";
import { useNavigate } from "react-router-dom";

// Create a context for global state management
export const globalContext = createContext();

const GlobalContextProvider = ({children}) => {

    // Input search variables
    const [searchText, setSearchText] = useState("");

    // Character Variables
    const [characters, setCharacters] = useState([]);

    // Authentication State
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Login Variables & Flags
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [flag, setFlag] = useState(false);

    const navigate = useNavigate();

    // Function to make a GET request to Rick And Morty's API
    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          const data = await search("/character");
          setCharacters(data?.data.results || []);
        } catch (error) {
          console.error("Error fetching characters:", error);
        }
      };
  
      fetchCharacters();
    }, []);

    // Function to handle navbar's input search value
    const handleSearch = (text) => {
        setSearchText(text.toLowerCase());
    };

    // Function to handle new Character Creation
    const handleNewCharacter = (newCharacter) => {
        setCharacters((prevCharacters) => [...prevCharacters, newCharacter]);
        navigate("/");
    };

    // Function to handle navbar's logout button event
    const handleLogout = () => {
        setEmaillog("");
        setPasswordlog("");
        setFlag(false);
        setIsAuthenticated(false);
    };

    return (
        <globalContext.Provider value={{
            emaillog,
            setEmaillog,
            passwordlog,
            setPasswordlog,
            flag,
            setFlag,
            searchText,
            characters,
            setSearchText,
            handleSearch,
            isAuthenticated,
            setIsAuthenticated,
            handleNewCharacter,
            handleLogout
        }}>
            {children}
        </globalContext.Provider>
    );
};

export default GlobalContextProvider;