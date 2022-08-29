import { createContext, useContext, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';

import reducers from './reducers';

export const Store = createContext()

export const useMyContext = () => useContext(Store)

export const ContextProvider = ({children}) => {
  const init = {
    limit: 3, page: 1, sort: '1', category: null, word: undefined
  }
  const [state, dispatch] = useReducer(reducers, init)
  const { search } = useLocation()


  useEffect(() => {
    const page = new URLSearchParams(search).get('page') || 1;
    const sort = new URLSearchParams(search).get('sort') || '1';
    const category = new URLSearchParams(search).get('CatID')|| 9;
    const word = new URLSearchParams(search).get('word')|| undefined;
    dispatch({type: "SET_PAGE", payload: Number(page)})
    dispatch({type: "SET_SORT", payload: sort})
    dispatch({type: "SET_CATEGORY", payload: Number(category)})
    dispatch({type: "SET_WORD", payload: word})
  },[search, dispatch])
  
  const value = { ...state, dispatch };
  
  return (
    <Store.Provider value={value}>
      {children}
    </Store.Provider>
  );
};