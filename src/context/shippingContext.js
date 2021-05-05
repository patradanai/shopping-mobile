import crateContext from './createContext';

// InitialStores
const initalStores = {
  token: '',
};

// Action

export const setToken = dispatch => {
  return data => {
    return dispatch({type: 'SET_TOKEN', data});
  };
};

// Reducer

const reducer = (state, action) => {
  switch (action) {
    default:
      return state;
  }
};

export const {Context, Provider} = crateContext(
  reducer,
  {setToken},
  initalStores,
);
