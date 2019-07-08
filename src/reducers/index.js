import { combineReducers } from 'redux' // 複数のリデューサーを一つにまとめる
import count from './count'

export default combineReducers({ count })

