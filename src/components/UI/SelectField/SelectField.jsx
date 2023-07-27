import Select from "react-select";
import '../styles/uiStyles.scss'

const SelectField = (props) => {
    return (
        <div className="ui__field">
            <Select
                {...props}
                classNamePrefix="ui__field__select"
                className="ui__field__select__container"
            />
        </div>
    );
};

export default SelectField;