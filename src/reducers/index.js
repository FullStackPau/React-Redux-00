import { combineReducers } from 'redux';

import userReducer from './userReducer';
import protectedReducer from './protectedReducer';


export default combineReducers({
    user: userReducer,
    protect:protectedReducer
})