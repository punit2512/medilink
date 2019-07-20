import {ACTION_SEARCH_PRACTICES} from "../actions/types";
import _ from 'lodash';

export default function(state={}, action) {
    switch(action.type) {
        case ACTION_SEARCH_PRACTICES:
            console.log('payload data:', action.payload.data);
            return _.mapKeys(action.payload.data, 'consultantId');
    }
    return state;
}