import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "../../components/UI/Button/Button.jsx";
import EncountersList from "../../components/EncountersList/EncountersList";
import {fetchAllEpisodes, updateEpisodes} from "../../actions/episodesActions.js";
import EpisodeFilter from "../../components/Filter/EpisodeFilter.jsx";
import s from "../../styles/CollectionPage.module.scss";
import logo from "../../assets/logo_episodes.png";

const EpisodesPage = () => {
    const { episodes, next, params, loading } = useSelector(state => state.episodes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllEpisodes(params));
    }, [params]);

    return (
        <div className="container">
            <div className={s.collection__logo}>
                <img src={logo} alt=""/>
            </div>
            <EpisodeFilter/>
            <EncountersList data={episodes} type="episodes"/>
            {next && <Button disabled={loading} onClick={() => dispatch(updateEpisodes(next))}>Load More</Button>}
        </div>
    );
};

export default EpisodesPage;