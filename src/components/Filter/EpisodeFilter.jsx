import {useSelector} from "react-redux";
import filterManager from "../../services/filterService.js";
import InputField from "../UI/InputField/InputField.jsx";
import s from "../../styles/CollectionPage.module.scss";

const EpisodeFilter = () => {
    const { name } = useSelector(state => state.episodes.params)

    return (
        <div className={s.collection__filters}>
            <InputField
                type="text"
                name="name"
                value={name}
                placeholder="Filter by name..."
                onChange={(e) => filterManager.getResourcesByName(e, 'episodes')}
                className="pos-2-3"
            />
        </div>
    );
};

export default EpisodeFilter;