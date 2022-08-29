import { TYPES } from "./action"

const reducers = (state, action) => {
  switch(action.type) {
    case TYPES.SET_PAGE:
      return {...state, page: action.payload}
    case TYPES.SET_SORT:
      return {...state, sort: action.payload}
    case TYPES.SET_CATEGORY:
        return {...state, category: action.payload}  
    case TYPES.SET_WORD:
          return {...state, word: action.payload}  
    default:
      return state;
  }
}

export default reducers