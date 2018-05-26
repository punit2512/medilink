import {ACTION_SEARCH_PRACTICES} from "../actions";
import _ from 'lodash';

export default function(state={}, action) {
    switch(action.type) {
        case ACTION_SEARCH_PRACTICES:
            return _.mapKeys(action.payload.data, 'practiceName');
    }
    return state;
}