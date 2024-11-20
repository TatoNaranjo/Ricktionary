import axios from "axios";

// Create an axios instance with a base URL for the Rick and Morty API
const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
});

/**
 * Performs a GET request to the specified URL using the axios instance.
 * Logs and returns the response if successful, otherwise logs the error.
 * @param {string} url - The URL to send the GET request to.
 * @returns {Promise} - The response from the API or undefined if an error occurs.
 */
export const search = async (url) => {
    try {
        const answer = await api.get(url);
        return answer;
    } catch (error) {
        console.log(error);
    }
};