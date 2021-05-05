import crateContext from './createContext';

// InitialStores
const initialStores = {
  token: '',
};

// Action

export const setToken = dispatch => {
  return data => {
    console.log(data);
    return dispatch({type: 'SET_TOKEN', payload: data});
  };
};

// Reducer

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {...state, token: action.payload};
    default:
      return state;
  }
};

export const {Context, Provider} = crateContext(
  reducer,
  {setToken},
  initialStores,
);
