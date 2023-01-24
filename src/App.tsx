import Cart from "./component/Cart"
import { useShoppingCart } from "./context/ShoppingCartContext"

function App() {
   const {cart}: any = useShoppingCart()
  return (
    <>
    <Cart items = {cart}/>
    </>
  )
}

export default App
