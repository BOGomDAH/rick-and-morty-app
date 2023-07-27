import {useSelector} from "react-redux";
import filterManager from "../../services/filterService.js";
import InputField from "../UI/InputField/InputField.jsx";
import SelectField from "../UI/SelectField/SelectField.jsx";
import {locationDimensionOptions, locationTypeOptions} from "../../data/locationOptions.js";
import s from "../../styles/CollectionPage.module.scss";

const LocationFilter = () => {
    const { name, type, dimension } = useSelector(state => state.locations.params)

    return (
        <div className={s.collection__filters}>
            <InputField
                type="text"
                name="name"
                value={name}
                placeholder="Filter by name..."
                onChange={(e) => filterManager.getResourcesByName(e, 'locations')}
                className="g-2"
            />
            <SelectField
                name="type"
                defaultValue={type ? {label: type, value: type} : ''}
                options={locationTypeOptions}
                placeholder="Type"
                onChange={(value, action) => filterManager.setFilterFromSelect(value, action, 'locations')}
                isClearable={true}
            />
            <SelectField
                name="dimension"
                defaultValue={dimension ? {label: dimension, value: dimension} : ''}
                options={locationDimensionOptions}
                placeholder="Dimension"
                onChange={(value, action) => filterManager.setFilterFromSelect(value, action, 'locations')}
                isClearable={true}
            />
        </div>
    );
};

export default LocationFilter;