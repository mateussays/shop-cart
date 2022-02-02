import React, { useEffect, useState } from 'react';

export const CartContext = React.createContext();

export default function CartProvider({children}) {

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch('./productList.json');
    const data = await response.json();
    setItems(data);
  }

  const addProductToCart = (el) => {
    setCart([...cart, el]);
  }

  const removeFromCart = (el) => {
    let cartCopy = [...cart];
    cartCopy = cartCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(cartCopy);
  }

  const context = {
    items,
    addProductToCart,
    removeFromCart,
    cart,
  }

  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  );
}
