import crateContext from './createContext';

// InitialStores
const initialStores = {
  token: '',
  profile: null,
  cart: [],
  wishlist: [],
  order: {
    profile: {},
    shippingAddr: {},
    shippingMethod: {},
    payment: {},
  },
};

// Action

export const setToken = dispatch => {
  return data => {
    return dispatch({type: 'SET_TOKEN', payload: data});
  };
};

export const setProfile = dispatch => {
  return data => {
    return dispatch({type: 'SET_PROFILE', payload: data});
  };
};

export const setWishlist = dispatch => {
  return data => {
    return dispatch({type: 'SET_WISHLIST', payload: data});
  };
};

export const setCart = dispatch => {
  return data => {
    return dispatch({type: 'SET_CART', payload: data});
  };
};

export const setOrder = dispatch => {
  return data => {
    return dispatch({type: 'SET_ORDER', payload: data});
  };
};

// Reducer

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {...state, token: action.payload};
    case 'SET_PROFILE':
      return {...state, profile: action.payload};
    case 'SET_WISHLIST':
      return {...state, wishlist: [...action.payload]};
    case 'SET_CART':
      return {...state, cart: action.payload};
    case 'SET_ORDER':
      return {...state, order: {...state.order, ...action.payload}};
    default:
      return state;
  }
};

export const {Context, Provider} = crateContext(
  reducer,
  {setToken, setProfile, setWishlist, setCart, setOrder},
  initialStores,
);
