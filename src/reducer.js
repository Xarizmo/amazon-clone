export const initState = {
  basket: [{
    id: '12345',
    title: 'Apple iMac Pro 27" 3.7GHz 6-Core Processor with Turbo Boost up to 4.6GHz 2TB Storage Retina 5K Display',
    price: 4999.99,
    rating: 5,
    image: 'https://main-cdn.goods.ru/big1/hlr-system/16348641128/600000755357b0.jpeg',
  }],
  user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id})!`
        )
      }
      
      return {
        ...state,
        basket: newBasket,
      }
    default:
      return state;
  }
}

export default reducer;