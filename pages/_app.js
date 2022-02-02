import { createGlobalStyle, ThemeProvider } from 'styled-components'
import CartProvider from '../context/CartContext'
import Navbar from '../src/components/Navbar/Navbar'

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
        <Navbar />
        <Component {...pageProps} />
      </CartProvider>
  )
}
