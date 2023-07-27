import React, {useEffect, useState} from 'react';
import ArrowBack from "../../components/UI/ArrowBack/ArrowBack.jsx";
import {useParams} from "react-router-dom";
import apiService from "../../services/apiService.js";
import CharactersList from "../../components/CharactersList/CharactersList.jsx";
import s from '../../styles/Encounter.module.scss';
import Loading from "../../components/UI/Loading/Loading.jsx";

const SingleLocationPage = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [location, setLocation] = useState({});
    
    useEffect(() => {
        setIsLoading(true);
        apiService.getSingleLocation(id)
            .then(r => {
                setLocation(r)
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <Loading/>;
    }

    if (!location) {
        return <div>Error loading character data.</div>;
    }

    return (
        <div className={`${s.encounter} container`}>
            <ArrowBack/>
            <h1 className={s.encounter__title}>{location.name}</h1>
            <div className={s.encounter__grid}>
                <div></div>
                <div className={s.encounter__item}>
                    <div className={s.encounter__item__title}>Type</div>
                    <div className={s.encounter__item__value}>{location.type}</div>
                </div>
                <div className={s.encounter__item}>
                    <div className={s.encounter__item__title}>Dimension</div>
                    <div className={s.encounter__item__value}>{location.dimension}</div>
                </div>
                <div></div>
            </div>
            <h5 className={s.encounter__h5}>Residents</h5>
            {location.residents.length ? <CharactersList characters={location.residents}/> : <div className={s.encounter__empty}>Residents not found.</div>}
        </div>
    );
};

export default SingleLocationPage;