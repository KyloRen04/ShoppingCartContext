import { useShoppingCart } from "../context/ShoppingCartContext"

const Cart = ({items}: any) => {
    const {clearCart, deleteOneItem, increaseCartItem, decreaseCartItem, total}: any = useShoppingCart()
  return (
    <>
    <h1 className="text-center">My Cart</h1>
    {items.map((item: any) => {
        const {id, name, price, qty} = item
        return <article className="text-center" key={id} style={{display: "flex", justifyContent: "space-around", backgroundColor: "#487eb0", marginBottom:"5px", height: "auto"}}>
            <p>{name}</p>
            <div style={{justifyContent: "space-around"}}>
                <p onClick={() => increaseCartItem(id)}>+</p>
               <p>{qty}</p>
               <p onClick={() => decreaseCartItem(id)}>-</p>
            </div>
            <div>
                <button onClick={() => deleteOneItem(id)} style={{backgroundColor: "brown", color: "white", border: "none", padding: "15%"}}>Delete</button>
                <p>{`$${price}`}</p>
            </div>
            </article>
    })}
    <div className="text-center">
        <p>{`Total - $${total}`}</p>
        <button onClick={clearCart} style={{backgroundColor: "#e17055", border: "none", fontSize: "18px", padding: "2%", color: "white"}}>Clear Item</button>
    </div>
    </>
  )
}

export default Cart