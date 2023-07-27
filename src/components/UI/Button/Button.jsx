import React from 'react';
import '../styles/uiStyles.scss'

const Button = ({children, ...props}) => {
    return (
        <button className="ui__btn" {...props}>
            {children}
        </button>
    );
};

export default Button;