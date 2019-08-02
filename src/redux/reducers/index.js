import {combineReducers} from 'redux';
import coursesRed from './courseReducer';
const rootReducer = combineReducers({

    courses: coursesRed
});

export default rootReducer;