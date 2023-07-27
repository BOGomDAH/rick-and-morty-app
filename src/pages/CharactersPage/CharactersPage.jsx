import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCharacters, updateCharacters,} from "../../actions/charactersActions.js";
import CharactersList from "../../components/CharactersList/CharactersList.jsx";
import Button from "../../components/UI/Button/Button.jsx";
import CharacterFilter from "../../components/Filter/CharacterFilter.jsx";
import logo from '/src/assets/logo_characters.png'
import s from "../../styles/CollectionPage.module.scss";

const CharactersPage = () => {
    const { characters, next, params, loading, error } = useSelector(state => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCharacters(params));
    }, [params]);

    return (
        <div className="container">
            <div className={s.collection__logo}>
                <img src={logo} alt=""/>
            </div>
            <CharacterFilter/>
            <CharactersList characters={characters}/>
            {next && <Button disabled={loading} onClick={() => dispatch(updateCharacters(next))}>Load More</Button>}
        </div>
    );
};

export default CharactersPage;