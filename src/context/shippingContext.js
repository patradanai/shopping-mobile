import crateContext from './createContext';

// InitialStores
const initialStores = {
  token: '',
  profile: null,
  cart: null,
  wishlist: null,
};

// Action

export const setToken = dispatch => {
  return data => {
    return dispatch({type: 'SET_TOKEN', payload: data});
  };
};

export const setProfile = dispatch => {
  return data => {
    console.log(data);
    return dispatch({type: 'SET_PROFILE', payload: data});
  };
};

// Reducer

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {...state, token: action.payload};
    case 'SET_PROFILE':
      return {...state, profile: action.payload};
    default:
      return state;
  }
};

export const {Context, Provider} = crateContext(
  reducer,
  {setToken, setProfile},
  initialStores,
);
