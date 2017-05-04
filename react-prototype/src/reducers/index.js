import { combineReducers } from 'redux';
import ProjectsReducer from './ProjectsReducer';
import LoggedIn from './LoggedIn';

// combining multiple reducers into one object
export default combineReducers({
    projects: ProjectsReducer,
    loggedIn: LoggedIn
});
