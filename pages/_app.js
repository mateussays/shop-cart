import { createGlobalStyle } from 'styled-components'
import CartProvider from '../context/CartContext'
import Navbar from '../src/components/Navbar/Navbar'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F8F8FF;
    color: #292929;
  }

`

export default function App({ Component, pageProps }) {
  return (
      <CartProvider>
        <GlobalStyle />
        <Head>
          <title>Shopping Cart - Sorte Online</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </CartProvider>
  )
}
