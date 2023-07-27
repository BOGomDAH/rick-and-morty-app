import {useSelector} from "react-redux";
import filterManager from "../../services/filterService.js";
import InputField from "../UI/InputField/InputField.jsx";
import SelectField from "../UI/SelectField/SelectField.jsx";
import {characterGenderOptions, characterSpeciesOptions, characterStatusOptions} from "../../data/characterOptions.js";
import s from "../../styles/CollectionPage.module.scss";

const CharacterFilter = () => {
    const { name, species, gender, status } = useSelector(state => state.characters.params)

    return (
        <div className={s.collection__filters}>
            <InputField
                type="text"
                name="name"
                value={name}
                placeholder="Filter by name..."
                onChange={(e) => filterManager.getResourcesByName(e, 'characters')}
            />
            <SelectField
                name="species"
                defaultValue={species ? {label: species, value: species} : ''}
                options={characterSpeciesOptions}
                placeholder="Species"
                onChange={(value, action) => filterManager.setFilterFromSelect(value, action, 'characters')}
                isClearable={true}
            />
            <SelectField
                name="gender"
                defaultValue={gender ? {label: gender, value: gender} : ''}
                options={characterGenderOptions}
                placeholder="Gender"
                onChange={(value, action) => filterManager.setFilterFromSelect(value, action, 'characters')}
                isClearable={true}
            />
            <SelectField
                name="status"
                defaultValue={status ? {label: status, value: status} : ''}
                options={characterStatusOptions}
                placeholder="Status"
                onChange={(value, action) => filterManager.setFilterFromSelect(value, action, 'characters')}
                isClearable={true}
            />
        </div>
    );
};

export default CharacterFilter;