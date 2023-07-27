import {
    GET_ALL_CHARACTERS_ERROR,
    GET_ALL_CHARACTERS_PENDING,
    GET_ALL_CHARACTERS_SUCCESS,
    UPDATE_CHARACTERS_ERROR,
    UPDATE_CHARACTERS_PENDING,
    UPDATE_CHARACTERS_SUCCESS,
    UPDATE_CHARACTERS_PARAMS,
} from "../constants/actionTypes.js";

const initialStateCharacters = {
    characters: [],
    params: {},
    pages: null,
    count: null,
    next: null,
    loading: false,
    error: null
}

const characterReducer = (state = initialStateCharacters, action) => {
    switch (action.type) {
        case GET_ALL_CHARACTERS_PENDING:
            return {
                ...state,
                loading: true
            };
        case GET_ALL_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                characters: action.payload.results,
                next: action.payload.info.next
            };
        case GET_ALL_CHARACTERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UPDATE_CHARACTERS_PENDING:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                characters: [...state.characters, ...action.payload.results],
                next: action.payload.info.next
            };
        case UPDATE_CHARACTERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UPDATE_CHARACTERS_PARAMS:
            return {
                ...state,
                params: {...state.params, ...action.payload},
            };
        default: return state
    }
}

export default characterReducer;