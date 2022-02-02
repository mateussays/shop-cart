import React, { useEffect, useState } from 'react';

export const CartContext = React.createContext();

export default function CartProvider({children}) {

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadData();
    totalCart();
  }, [cart]);

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

  const totalCart = () => {
    let totalValue = 0;
    for (let i =0; i < cart.length; i++) {
      totalValue += cart[i].price;
    }
    setTotal(totalValue);
  }

  const context = {
    items,
    addProductToCart,
    removeFromCart,
    cart,
    total,
  }

  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  );
}
