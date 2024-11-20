import "./Card.css"

/**
 * Card component displays information about a character.
 * It receives character details as props and renders them in a styled card format.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the character.
 * @param {string} props.origin - The origin of the character.
 * @param {string} props.species - The species of the character.
 * @param {string} props.image - The image URL of the character.
 * @param {string} props.location - The current location of the character.
 * 
 * @returns {JSX.Element} The rendered card component.
 */
export default function Card(props) {
    const { name, origin, species, image, location } = props

    return (
        <article className="card">
            <div>
                <img src={image} alt={name} className="card_image" />
            </div>
            <div className="card_content">
                <span className="card_title">{name}</span>
                <span className="card_subtitle"><b>Origin: </b>{origin}</span>
                <p className="card_description"><b>Species: </b>{species}.</p>
                <p className="card_description"><b>Actually Living In: </b>{location}.</p>
            </div>
        </article>
    )
}