import { TYPES } from './types'
import axios from 'axios'


export const searchHistory = (data) => async (dispatch) => {
    dispatch({type: TYPES.ADD, payload: data})
}