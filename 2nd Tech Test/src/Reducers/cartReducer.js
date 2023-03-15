// Reducer set the state relying an action
// We use useReducer when we have several setStates for the same state

// Get local storage, update local storage in each function
export const initialState = {
  cart : JSON.parse(localStorage.getItem('cart')) || [],
  total : JSON.parse(localStorage.getItem('total')) || 0
};

function updateLocalSotorage (cart, total) {
  window.localStorage.setItem('cart', JSON.stringify(cart))
  window.localStorage.setItem('total', JSON.stringify(total))
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
  addToCart : (states, action) => {
    const { cart, total } = states
    const { id } = action.payload;
    const productInCartIndex = cart.findIndex(item => item.id === id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      const product = newCart[productInCartIndex];

      product.quantity += 1;
      const newTotal = parseInt(total) + product.price;
      console.log(newTotal)

      updateLocalSotorage(newCart, newTotal);
      return {cart: newCart, total: newTotal};
    }else{
      const newCart = [
        ...cart,
        {
          ...action.payload, quantity: 1
        }
      ];

      const newTotal = parseInt(total) + action.payload.price
      updateLocalSotorage(newCart, newTotal);

      return {cart: newCart, total: newTotal};
    }
  },
  removeFromCart : (states, action) => {
    const { cart, total } = states
    const { id } = action.payload;
    const newCart = cart.filter(item => item.id != id);
    const newTotal = parseInt(total) - action.payload.price
    updateLocalSotorage(newCart, newTotal);
    return {cart: newCart, total: newTotal};
  },
  cleanCart : () => {
    updateLocalSotorage([], 0);
    return {cart: [], total: 0}
  }
}

export const cartReducer = (state, action) => {
  console.log(action)
  const { type: actionType } = action;
  const updateState = Update_state_by_action[actionType];
  let states = updateState(state, action) || {cart: [], total: 0}

  console.log(states)
  return states
} 