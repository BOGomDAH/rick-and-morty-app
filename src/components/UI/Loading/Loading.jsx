import React from 'react';
import image from "../../../assets/loading.png";

const Loading = () => {
    return (
        <div className="ui__loading">
            <img className="ui__loading__img" src={image} alt="loading pic"/>
        </div>
    );
};

export default Loading;