import {Link} from "react-router-dom";
import styles from './CharactersList.module.scss'

const CharactersList = ({characters}) => {
    const renderedChars = characters.map((character) => {
        return (
            <div className={styles.charlist__item} key={character.id}>
                <Link to={`/characters/${character.id}`}>
                    <div className={styles.charlist__item__img}>
                        <img src={character.image} alt={`${character.name} image`}/>
                    </div>
                    <div className={styles.charlist__item__info}>
                        <h4 className={styles.charlist__item__name}>{character.name}</h4>
                        <p className={styles.charlist__item__species}>{character.species}</p>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div className={styles.charlist}>
            <div className={styles.charlist__grid}>
                {renderedChars}
            </div>
        </div>
    );
};

export default CharactersList;