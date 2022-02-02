import React, { useContext } from 'react';
import Image from 'next/image';
import { Button, CardImageContainer, CardWrapper, DescriptionCard, SubcontainerCard, TitleCard } from './styles';
import CurrencyFormat from 'react-currency-format';
import { CartContext } from '../../../context/CartContext';

export default function ShopCard(items) {
  const { addProductToCart, removeFromCart, cart } = useContext(CartContext);
  return (
    <>
      {items.items.map((item) => (
        <CardWrapper key={item.id}>
            <CardImageContainer>
              <Image src={item.image} height={200} width={300} />
            </CardImageContainer>
            <TitleCard>
              {item.title}
            </TitleCard>
            <DescriptionCard>
              {item.description}
            </DescriptionCard>
            <SubcontainerCard>
              <div className="price">
                <h3>
                  <CurrencyFormat 
                    value={item.price} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={'$'}
                  />
                </h3>
                <p>
                  {item.priceDiscount == 0 ? 
                    '' :  
                  <CurrencyFormat 
                    value={item.priceDiscount} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={'$'}
                  />}
                </p>
              </div>
              <div>
                {cart.find((product) => product.id === item.id) ?
                  <Button primary onClick={() => removeFromCart(item) }>
                    in the cart
                  </Button>
                    :
                  <Button onClick={() => addProductToCart(item) }>
                    add to cart +
                  </Button>
                }
              </div>
            </SubcontainerCard>
        </CardWrapper>
      ))}
    </>
  );
}
