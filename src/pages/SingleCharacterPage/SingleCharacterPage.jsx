import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import ArrowBack from "../../components/UI/ArrowBack/ArrowBack.jsx";
import api from "../../services/apiService";
import Loading from "../../components/UI/Loading/Loading.jsx";
import ArrowPage from '../../assets/link.svg';
import s from "./SingleCharacterPage.module.scss"

const SingleCharacterPage = () => {
    const [character, setCharacter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        setIsLoading(true);
        api.getSingleCharacter(id)
            .then(r => {
                setCharacter(r);
                setIsLoading(false);
            })
    }, [id]);

    if (isLoading) {
        return <Loading/>; // или показать компонент загрузчика
    }

    if (!character) {
        return <div>Error loading character data.</div>; // или показать сообщение об ошибке
    }

    return (
        <div className="container">

            <ArrowBack/>
            <div className={s.singleChar}>
                <div className={s.singleChar__img}>
                    <img src={character.image} alt=""/>
                </div>
                <div className={s.singleChar__name}>
                    {character.name}
                </div>
                <div className={s.singleChar__row}>
                    <div className={s.singleChar__column}>
                        <h3 className={s.singleChar__column__title}>Informations</h3>
                        <ul className={s.singleChar__column__list}>
                            <li className={s.singleChar__column__item}>
                                <h5 className={s.singleChar__column__item__title}>Gender</h5>
                                <span className={s.singleChar__column__item__value}>{character.gender}</span>
                            </li>
                            <li className={s.singleChar__column__item}>
                                <h5 className={s.singleChar__column__item__title}>Status</h5>
                                <span className={s.singleChar__column__item__value}>{character.status}</span>
                            </li>
                            <li className={s.singleChar__column__item}>
                                <h5 className={s.singleChar__column__item__title}>Specie</h5>
                                <span className={s.singleChar__column__item__value}>{character.species}</span>
                            </li>
                            <li className={s.singleChar__column__item}>
                                <h5 className={s.singleChar__column__item__title}>Origin</h5>
                                <span className={s.singleChar__column__item__value}>{character.origin?.name}</span>
                            </li>
                            <li className={s.singleChar__column__item}>
                                <h5 className={s.singleChar__column__item__title}>Type</h5>
                                <span className={s.singleChar__column__item__value}>{character.type ? character.type : "Unknown" }</span>
                            </li>
                            <li className={s.singleChar__column__item}>
                                <h5 className={s.singleChar__column__item__title}>Location</h5>
                                <span className={s.singleChar__column__item__value}>{character.location?.name}</span>
                                <Link className={s.singleChar__column__item__link} to={`/locations/${character.location?.url.split("location/")[1]}`}>
                                    <ArrowPage/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`${s.singleChar__column} ${s.singleChar__column__episodes}`}>
                        <h3 className={s.singleChar__column__title}>Episodes</h3>
                        <ul className={s.singleChar__column__list}>
                            {character?.episode?.map((episode) => (
                                <li key={episode.id} className={s.singleChar__column__episodes__item}>
                                    <h5 className={s.singleChar__column__item__title}>{episode.episode}</h5>
                                    <span className={s.singleChar__column__item__value}>{episode.name}</span>
                                    <span className={s.singleChar__column__item__date}>{episode.air_date}</span>
                                    <Link className={s.singleChar__column__item__link} to={`/episodes/${episode.id}`}>
                                        <ArrowPage/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCharacterPage;