import { useEffect, useState, useContext } from "react"
import { globalContext } from "../../context/GlobalContext";
import Card from "../Card/Card"
import "./Gallery.css"

/**
 * Gallery component displays a list of character cards.
 * It fetches characters from the global context and filters them based on the search text.
 */
export default function Gallery() {

    // Access global context
    const context = useContext(globalContext);
    const { searchText, characters } = context

    // State to store the list of characters to display
    const [characterList, setCharacterList] = useState(characters);
    const [bannerText, setBannerText] = useState("Featured Characters")

    // Effect to update the character list and banner text based on the search text
    useEffect(() => {
        if (searchText !== "") {
            setCharacterList(characters?.filter((character) => character.name.toLowerCase().includes(searchText)))
            setBannerText("You Searched: " + searchText)
        } else {
            setCharacterList(characters || [])
            setBannerText("Featured Characters")
        }
    }, [searchText, characters])

    return (
        <>
            <div className="">
                <h1 className="bannerText">{bannerText}</h1>
            </div>
            <div className="galleryContainer">
                {characterList?.map((character) => {
                    return (
                        <Card key={character.id} name={character.name} origin={character.origin.name} image={character.image} species={character.species} location={character.location.name} />
                    )
                })}
            </div>
        </>
    )
}