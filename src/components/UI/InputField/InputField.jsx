import {useState} from "react";
import '../styles/uiStyles.scss'

const InputField = ({ className = '', value, ...props }) => {
    const [inputValue, setInputValue] = useState(value || '');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);

        if (props.onChange) {
            props.onChange(event);
        }
    };

    const fieldClassName = `ui__field ui__field__inner ${className}`

    return (
        <div className={fieldClassName}>
            <input className="ui__field__input" value={inputValue} onInput={handleChange} {...props}/>
        </div>
    );
};

export default InputField;