import apiService from "../services/apiService.js";
import {
    GET_ALL_CHARACTERS_ERROR,
    GET_ALL_CHARACTERS_PENDING,
    GET_ALL_CHARACTERS_SUCCESS,
    UPDATE_CHARACTERS_PENDING,
    UPDATE_CHARACTERS_SUCCESS,
    UPDATE_CHARACTERS_ERROR,
    UPDATE_CHARACTERS_PARAMS,
} from "../constants/actionTypes.js";


export const fetchAllCharacters = (params) => {
    return (dispatch) => {
        dispatch(getAllCharactersPending());
        apiService.getAllCharacters(params)
            .then(response => {
                dispatch(getAllCharactersSuccess(response))
            })
            .catch(error => {
                dispatch(getAllCharactersError(error.message))
            })
    }
}

export const updateCharacters = (url) => {
    return (dispatch) => {
        dispatch(updateCharactersPending());
        apiService.getMoreResources(url)
            .then(response => {
                dispatch(updateCharactersSuccess(response))
            })
            .catch(error => {
                dispatch(updateCharactersError(error.message))
            })
    }
}

export const getAllCharactersPending = () => ({
    type: GET_ALL_CHARACTERS_PENDING
});

export const getAllCharactersSuccess = data => ({
    type: GET_ALL_CHARACTERS_SUCCESS,
    payload: data
});

export const getAllCharactersError = error => ({
    type: GET_ALL_CHARACTERS_ERROR,
    payload: error
});

export const updateCharactersPending = () => ({
    type: UPDATE_CHARACTERS_PENDING
});

export const updateCharactersSuccess = data => ({
    type: UPDATE_CHARACTERS_SUCCESS,
    payload: data
});

export const updateCharactersError = error => ({
    type: UPDATE_CHARACTERS_ERROR,
    payload: error
});

export const updateCharactersParams = filters => ({
    type: UPDATE_CHARACTERS_PARAMS,
    payload: filters
})