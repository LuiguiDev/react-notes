// Reducer set the state relying an action
// We use useReducer when we have several setStates for the same state

// Get local storage, update local storage in each function
export const initialState = JSON.parse(localStorage.getItem('cart')) || []

function updateLocalSotorage (newState) {
  window.localStorage.setItem('cart', JSON.stringify(newState))
};

// Using switch
const cartReducerSwitch = (state, action) => {
  const {type: actionType, payload: actionPayload} = action;

  switch (action.type) {
    case 'Add_to_cart': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if(productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        const finded = newCart[productInCartIndex];
        finded.quantity += 1;
        updateLocalSotorage(newCart)
        return newCart
      }else{
        const newCart = [
          ...state,
          {
            ...actionPayload, // Product
            quantity: 1
          }
        ];
        updateLocalSotorage(newCart);
        return newCart
      } 
    } 
    case 'Remove_from_cart': {
      const { id } = actionPayload
      const newCart = state.filter(item => item.id !== id);
      updateLocalSotorage(newCart);
      return newCart
    }
    case 'Clear_cart': {
      updateLocalSotorage(initialState)
      return initialState
    } 
  }

  return state
}


const Update_state_by_action = {
  addToCart : (state, action) => {
    const { id } = action.payload;
    const productInCartIndex = state.findIndex(item => item.id === id);

    if (productInCartIndex >= 0) {
      const newState = structuredClone(state);
      newState[productInCartIndex].quantity += 1;
      updateLocalSotorage(newState);
      return newState;
    }else{
      const newState = [
        ...state,
        {
          ...action.payload, quantity: 1
        }
      ];
      updateLocalSotorage(newState);
      return newState;
    }
  },
  removeFromCart : (state, action) => {
    const { id } = action.payload;
    const newState = state.filter(item => item.id != id);
    updateLocalSotorage(newState);
    return newState;
  },
  cleanCart : () => {
    updateLocalSotorage([]);
    return []
  }
}

export const cartReducer = (state, action) => {
  console.log(action)
  const { type: actionType } = action;
  const updateState = Update_state_by_action[actionType];

  return updateState ? updateState(state, action) : state
} 