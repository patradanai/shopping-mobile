import crateContext from './createContext';

// InitialStores
const initalStores = {
  token: '',
};

// Action

export const setToken = dispatch => {
  return data => {
    return dispatch({type: 'SET_TOKEN', payload: data});
  };
};

// Reducer

const reducer = (state, action) => {
  switch (action) {
    case 'SET_TOKEN':
      return {...state, token: action.payload};
    default:
      return state;
  }
};

export const {Context, Provider} = crateContext(
  reducer,
  {setToken},
  initalStores,
);
