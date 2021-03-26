export const reducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {...state, Auth: true, user: action.user};
   
      case 'LOG_OUT':
        return {...state, Auth: false, user: {}};
      case 'CART':
        return {...state, Auth: true, cart:action.cart}
      default:
        throw new Error('Action type must be defined');
    }
  };
  