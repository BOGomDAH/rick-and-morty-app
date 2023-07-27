import store from "../store/index.js";
import {updateCharactersParams} from "../actions/charactersActions.js";
import {updateLocationsParams} from "../actions/locationsActions.js";
import {debounce} from "../helpers/debounce.js";
import {updateEpisodesParams} from "../actions/episodesActions.js";

class filterService {

    _getUpdateParamsFunc(reducer) {
        const updateParamsMap = {
            characters: updateCharactersParams,
            locations: updateLocationsParams,
            episodes: updateEpisodesParams,
        };

        return updateParamsMap[reducer];
    }

    setFilterFromSelect(valueObj, action, reducer) {
        const { params } = store.getState()[reducer];
        const { name } = action;
        const updateParamsFunc = this._getUpdateParamsFunc(reducer);

        if (action.action === 'clear') {
            const updatedFilters = { ...params };

            delete updatedFilters[name];
            if (updateParamsFunc) {
                store.dispatch(updateParamsFunc(updatedFilters));
            }
        } else {
            const { value } = valueObj;

            if (updateParamsFunc) {
                store.dispatch(updateParamsFunc({ ...params, [name]: value }));
            }
        }
    }

    getResourcesByName = debounce((event, reducer) => {
        const { name, value } = event.target;
        const updateParamsFunc = this._getUpdateParamsFunc(reducer);

        if (updateParamsFunc) {
            store.dispatch(updateParamsFunc({[name]: value }));
        }
    }, 500)

}
const filterManager = new filterService()
export default filterManager;