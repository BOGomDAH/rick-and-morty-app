import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ArrowBack from "../../components/UI/ArrowBack/ArrowBack.jsx";
import CharactersList from "../../components/CharactersList/CharactersList.jsx";
import apiService from "../../services/apiService.js";
import s from '../../styles/Encounter.module.scss';
import Loading from "../../components/UI/Loading/Loading.jsx";

const SingleEpisodePage = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [episode, setEpisode] = useState({});

    useEffect(() => {
        setIsLoading(true);
        apiService.getSingleEpisode(id)
            .then(r => {
                setEpisode(r)
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <Loading/>;
    }

    if (!episode) {
        return <div>Error loading character data.</div>;
    }

    return (
        <div className={`${s.encounter} container`}>
            <ArrowBack/>
            <h1 className={s.encounter__title}>{episode.name}</h1>
            <div className={s.encounter__grid}>
                <div></div>
                <div className={s.encounter__item}>
                    <div className={s.encounter__item__title}>Episode</div>
                    <div className={s.encounter__item__value}>{episode.episode}</div>
                </div>
                <div className={s.encounter__item}>
                    <div className={s.encounter__item__title}>Date</div>
                    <div className={s.encounter__item__value}>{episode.air_date}</div>
                </div>
                <div></div>
            </div>
            <h5 className={s.encounter__h5}>Cast</h5>
            <CharactersList characters={episode.characters}/>
        </div>
    );
};

export default SingleEpisodePage;