import {
    GET_ALL_LOCATIONS_PENDING,
    GET_ALL_LOCATIONS_SUCCESS,
    GET_ALL_LOCATIONS_ERROR,
    UPDATE_LOCATIONS_PENDING,
    UPDATE_LOCATIONS_SUCCESS,
    UPDATE_LOCATIONS_ERROR,
    UPDATE_LOCATIONS_PARAMS,
} from "../constants/actionTypes.js";

const initialStateLocations = {
    locations: [],
    params: {},
    pages: null,
    count: null,
    next: null,
    loading: false,
    error: null
}

const locationsReducer = (state = initialStateLocations, action) => {
    switch (action.type) {
        case GET_ALL_LOCATIONS_PENDING:
            return {
                ...state,
                loading: true
            };
        case GET_ALL_LOCATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                locations: action.payload.results,
                next: action.payload.info.next
            };
        case GET_ALL_LOCATIONS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UPDATE_LOCATIONS_PENDING:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_LOCATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                locations: [...state.locations, ...action.payload.results],
                next: action.payload.info.next
            };
        case UPDATE_LOCATIONS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UPDATE_LOCATIONS_PARAMS:
            return {
                ...state,
                params: action.payload,
            };
        default: return state
    }
}

export default locationsReducer;