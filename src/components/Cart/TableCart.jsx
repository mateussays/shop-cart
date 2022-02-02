import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Table, TableHead, Tbody, Th, Td, TableContainer, TdTotal } from './styles';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import CurrencyFormat from 'react-currency-format';

export default function TableCart() {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <TableContainer>
      <Table>

        <TableHead>
          <Th className="first-column">Product</Th>
          <Th>Quantity</Th>
          <Th className="last-column">Price</Th>
        </TableHead>

        <Tbody>
          {cart.map((product) => (
            <tr key={product.id}>
                <Td>
                  <div>
                    <Image src={product.image} width={75} height={50} />
                    <span>{product.title}</span>
                  </div>
                </Td>
                <Td>1</Td>
                <Td>
                  <div className="container-btn">
                    <span>
                      <CurrencyFormat 
                        value={product.price} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        prefix={'$'}
                      />
                    </span>
                    <AiOutlineClose 
                      size={18} 
                      color={'#B83F3F'} 
                      onClick={ () => removeFromCart(product)}
                      className="remove-btn"
                    />
                  </div>
                </Td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <TdTotal>
                <span>Total:</span>
                <strong>
                  <CurrencyFormat 
                    value={total} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={'$'}
                  />
                </strong>
            </TdTotal>
          </tr>
        </Tbody>

      </Table>
    </TableContainer>
  );
}
