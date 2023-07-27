import {combineReducers} from "redux";
import episodeReducer from "./episodeReducer.js";
import locationReducer from "./locationReducer.js";
import characterReducer from "./characterReducer.js";

const rootReducer = combineReducers({
    characters: characterReducer,
    locations: locationReducer,
    episodes: episodeReducer,
})

export default rootReducer;