import {combineReducers} from 'redux';
import coursesRed from './courseReducer';
debugger;
const rootReducer = combineReducers({

    courses: coursesRed
});

export default rootReducer;