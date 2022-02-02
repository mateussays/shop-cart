import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import ShopCard from './ShopCard';
import { CardHeader } from './styles';

export default function ShopCart() {
  const { items } = useContext(CartContext);
  return (
    <CardHeader>
      <ShopCard items={items} />
    </CardHeader>
  )
}
