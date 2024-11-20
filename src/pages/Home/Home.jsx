import "./Home.css"
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";

// Define the Home component as the default export
export default function Home() {

    // Retrieve the username from local storage and remove any surrounding quotes
    let name = localStorage.getItem('dataSubmissionUsername').replace(/"/g, "");

    // Render the Home component JSX
    return (
        <>
            <Header/>
            <div className="home">
                <div className="openingText">
                    <h1>Wubba Lubba Dub Dub, Welcome to the Ricktionary, <p className="username">{name}</p></h1>
                    <h2>This is a Wikipedia where you can search everything about Rick & Morty's Characters</h2>
                    <p>Explore the multiverse through our curated collection of Rick and Morty characters. From the brilliant and cynical Rick to the anxious and good-hearted Morty, dive into the wild and wacky world of this beloved animated series.</p>
                </div>
                <Gallery />
            </div>
        </>
    )
}