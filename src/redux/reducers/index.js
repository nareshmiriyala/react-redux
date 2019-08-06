import {combineReducers} from 'redux';
import coursesRed from './courseReducer';
import authorsRed from './authorReducer';

const rootReducer = combineReducers({

    courses: coursesRed, authors: authorsRed
});

export default rootReducer;