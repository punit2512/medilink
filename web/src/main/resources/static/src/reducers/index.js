import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import reducer_practice_search from './reducer_practice_search';

const rootReducer = combineReducers({
    form: formReducer,
    consultants: reducer_practice_search
});

export default rootReducer;
