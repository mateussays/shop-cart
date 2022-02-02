import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';
import { NavContainer, LinkStyle, CartStyle } from './styles';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../../../context/CartContext';

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
      <NavContainer>
        <div>
          <Link href="/">
            <LinkStyle>
              <Image 
                src={logo}
                alt="Logo"
                width={120}
                height={50}
              />
            </LinkStyle>
          </Link>
        </div>

        <LinkStyle>
          <Link href="/cart">
            <div>
              <AiOutlineShoppingCart size={30} color={'#585858'}/>
              <CartStyle>{cart.length}</CartStyle>  
            </div>
          </Link>
        </LinkStyle>
        
      </NavContainer>
  )
}

