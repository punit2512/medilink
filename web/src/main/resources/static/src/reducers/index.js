import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import reducer_practice_search from './reducer_practice_search';
import auth_reducer from "./auth_reducer";

const rootReducer = combineReducers({
    form: formReducer,
    consultants: reducer_practice_search,
    auth: auth_reducer
});

export default rootReducer;
