import { TYPES } from "../actions/types";

const initialState = {
    searchHistoryArr: [],
}

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.ADD:
            return { 
                ...state,
                searchHistoryArr: [action.payload, ...state.searchHistoryArr],
        }
        default:
            return state
    }
}

export default searchReducer