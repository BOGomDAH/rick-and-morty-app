import {Link} from "react-router-dom";
import styles from './EncountersList.module.scss'

const EncountersList = ({data, type}) => {

    const additionalInfoMapping = {
        locations: (encounter) => (
            <p className={styles.encounters__item__type}>{encounter.dimension}</p>
        ),
        episodes: (encounter) => (
            <>
                <p className={styles.encounters__item__type}>{encounter.air_date}</p>
                <p className={styles.encounters__item__bold}>{encounter.episode}</p>
            </>
        ),
    };

    const renderAdditionalInfo = additionalInfoMapping[type];

    const renderedItems = data.map((encounter) => (
        <div className={styles.encounters__item} key={encounter.id}>
            <Link to={`/${type}/${encounter.id}`}>
                <h4 className={styles.encounters__item__name}>{encounter.name}</h4>
                {type && renderAdditionalInfo && renderAdditionalInfo(encounter)}
            </Link>
        </div>
    ));

    return (
        <div className={styles.encounters}>
            <div className={styles.encounters__grid}>
                {renderedItems}
            </div>
        </div>
    );
};

export default EncountersList;