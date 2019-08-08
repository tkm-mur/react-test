import { combineReducers } from 'redux';
import counter from './counter';
import getMember from './member';

export default combineReducers({ counter, getMember });
