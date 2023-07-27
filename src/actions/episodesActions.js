import apiService from "../services/apiService.js";
import {
    GET_ALL_EPISODES_ERROR,
    GET_ALL_EPISODES_PENDING,
    GET_ALL_EPISODES_SUCCESS,
    UPDATE_EPISODES_ERROR,
    UPDATE_EPISODES_PARAMS,
    UPDATE_EPISODES_PENDING,
    UPDATE_EPISODES_SUCCESS,
} from "../constants/actionTypes.js";


export const fetchAllEpisodes = (params) => {
    return (dispatch) => {
        dispatch(getAllEpisodesPending());
        apiService.getAllEpisodes(params)
            .then(response => {
                dispatch(getAllEpisodesSuccess(response))
            })
            .catch(error => {
                dispatch(getAllEpisodesError(error.message))
            })
    }
}

export const updateEpisodes = (url) => {
    return (dispatch) => {
        dispatch(updateEpisodesPending());
        apiService.getMoreResources(url)
            .then(response => {
                dispatch(updateEpisodesSuccess(response))
            })
            .catch(error => {
                dispatch(updateEpisodesError(error.message))
            })
    }
}

export const getAllEpisodesPending = () => ({
    type: GET_ALL_EPISODES_PENDING
});

export const getAllEpisodesSuccess = data => ({
    type: GET_ALL_EPISODES_SUCCESS,
    payload: data
});

export const getAllEpisodesError = error => ({
    type: GET_ALL_EPISODES_ERROR,
    payload: error
});

export const updateEpisodesPending = () => ({
    type: UPDATE_EPISODES_PENDING
});

export const updateEpisodesSuccess = data => ({
    type: UPDATE_EPISODES_SUCCESS,
    payload: data
});

export const updateEpisodesError = error => ({
    type: UPDATE_EPISODES_ERROR,
    payload: error
});

export const updateEpisodesParams = filters => ({
    type: UPDATE_EPISODES_PARAMS,
    payload: filters
})