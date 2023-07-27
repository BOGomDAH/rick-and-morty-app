import {
    GET_ALL_EPISODES_ERROR,
    GET_ALL_EPISODES_PENDING,
    GET_ALL_EPISODES_SUCCESS,
    UPDATE_EPISODES_ERROR,
    UPDATE_EPISODES_PENDING,
    UPDATE_EPISODES_SUCCESS,
    UPDATE_EPISODES_PARAMS,
} from "../constants/actionTypes.js";

const initialStateEpisodes = {
    episodes: [],
    params: {},
    pages: null,
    count: null,
    next: null,
    loading: false,
    error: null
}

const episodeReducer = (state = initialStateEpisodes, action) => {
    switch (action.type) {
        case GET_ALL_EPISODES_PENDING:
            return {
                ...state,
                loading: true
            };
        case GET_ALL_EPISODES_SUCCESS:
            return {
                ...state,
                loading: false,
                episodes: action.payload.results,
                next: action.payload.info.next
            };
        case GET_ALL_EPISODES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UPDATE_EPISODES_PENDING:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_EPISODES_SUCCESS:
            return {
                ...state,
                loading: false,
                episodes: [...state.episodes, ...action.payload.results],
                next: action.payload.info.next
            };
        case UPDATE_EPISODES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UPDATE_EPISODES_PARAMS:
            return {
                ...state,
                params: action.payload,
            };
        default: return state
    }
}

export default episodeReducer;