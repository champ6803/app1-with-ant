import { combineReducers } from 'redux'
import auth from './auth'
import page from './page'
import product from './product'

const reducer = combineReducers({
	auth,
	page,
	product
})

export default reducer
