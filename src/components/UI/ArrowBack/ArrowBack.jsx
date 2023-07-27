import {useNavigate} from "react-router-dom";
import Arrow from "/src/assets/back.svg";
import '../styles/uiStyles.scss'

const ArrowBack = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <button className="ui__back" onClick={handleGoBack}>
            <Arrow/>
            <span>GO BACK</span>
        </button>
    );
};

export default ArrowBack;