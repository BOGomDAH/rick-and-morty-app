import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllLocations, updateLocations} from "../../actions/locationsActions.js";
import Button from "../../components/UI/Button/Button.jsx";
import EncountersList from "../../components/EncountersList/EncountersList.jsx";
import LocationFilter from "../../components/Filter/LocationFilter.jsx";
import logo from "../../assets/logo_locations.png";
import s from "../../styles/CollectionPage.module.scss";

const LocationsPage = () => {
    const { locations, next, params, loading} = useSelector(state => state.locations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllLocations(params));
    }, [params]);

    return (
        <div className="container">
            <div className={s.collection__logo}>
                <img src={logo} alt=""/>
            </div>
            <LocationFilter/>
            <EncountersList data={locations} type="locations"/>
            {next && <Button disabled={loading} onClick={() => dispatch(updateLocations(next))}>Load More</Button>}
        </div>
    );
};

export default LocationsPage;