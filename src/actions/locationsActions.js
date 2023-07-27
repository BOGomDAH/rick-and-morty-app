import apiService from "../services/apiService.js";
import {
    GET_ALL_LOCATIONS_ERROR,
    GET_ALL_LOCATIONS_PENDING,
    GET_ALL_LOCATIONS_SUCCESS,
    UPDATE_LOCATIONS_ERROR,
    UPDATE_LOCATIONS_PARAMS,
    UPDATE_LOCATIONS_PENDING,
    UPDATE_LOCATIONS_SUCCESS
} from "../constants/actionTypes.js";


export const fetchAllLocations = (params) => {
    return (dispatch) => {
        dispatch(getAllLocationsPending());
        apiService.getAllLocations(params)
            .then(response => {
                dispatch(getAllLocationsSuccess(response))
            })
            .catch(error => {
                dispatch(getAllLocationsError(error.message))
            })
    }
}

export const updateLocations = (url) => {
    return (dispatch) => {
        dispatch(updateLocationsPending());
        apiService.getMoreResources(url)
            .then(response => {
                dispatch(updateLocationsSuccess(response))
            })
            .catch(error => {
                dispatch(updateLocationsError(error.message))
            })
    }
}

export const getAllLocationsPending = () => ({
    type: GET_ALL_LOCATIONS_PENDING
});

export const getAllLocationsSuccess = data => ({
    type: GET_ALL_LOCATIONS_SUCCESS,
    payload: data
});

export const getAllLocationsError = error => ({
    type: GET_ALL_LOCATIONS_ERROR,
    payload: error
});

export const updateLocationsPending = () => ({
    type: UPDATE_LOCATIONS_PENDING
});

export const updateLocationsSuccess = data => ({
    type: UPDATE_LOCATIONS_SUCCESS,
    payload: data
});

export const updateLocationsError = error => ({
    type: UPDATE_LOCATIONS_ERROR,
    payload: error
});

export const updateLocationsParams = filters => ({
    type: UPDATE_LOCATIONS_PARAMS,
    payload: filters
})