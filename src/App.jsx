import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes } from "react-router";
import { projectRoutes } from "./pages";
import theme from "./theme";
import FooterComponent from './components/footer';
import Header from "./components/header";
import ShoppingCartContext from './gobal/shoppingCart/shoppingCart.global';
import UserContext from "./gobal/user/user.global";
import ImageContext from './gobal/image/image.global';
import ScrollToTop from "./components/scrollToTop";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ScrollToTop />
        <UserContext>
          <ShoppingCartContext>
            <ImageContext>
              <Header />
              <Routes>
                {projectRoutes}
              </Routes>
            </ImageContext>
          </ShoppingCartContext>
        </UserContext>
        <FooterComponent />
      </ChakraProvider>
    </BrowserRouter>
  )
}
export default App
