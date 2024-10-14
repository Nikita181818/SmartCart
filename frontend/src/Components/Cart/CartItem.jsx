import { useContext } from 'react';
import remove_icon from '../Assets/cart_cross_icon.png';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';

const Cart = () => {

    const {all_products,cart,removeProductFromCart,getTotalCartAmount} = useContext(ShopContext);
    const cartItems = Object.keys(cart); //This method returns an array of the keys in the cart object.In this case, the keys represent the product IDs that are in the cart.

    const totalCost = Object.entries(cart).reduce((acc,[productId,quantity])=>{
        const product = all_products.find(product=> product.id === parseInt(productId));
        return acc + (product ? product.new_cost * quantity :0);
    },0);

    const shippingCost = 100;
    return ( 
        <div className="cartitems">
            <div className="cartitems-header">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quality</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            
            {cartItems.map((productId)=>{
                const product = all_products.find(product => product.id === Number(productId));
                return(
                    <div className="cartitem" key = {productId}>
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                        <p>₹{product.new_price}</p>
                        <p>{cart[productId]}</p>
                        <p>₹{product.new_price * cart[productId]}</p>
                        <img src={remove_icon} alt="remove" onClick={() => removeProductFromCart(productId)} />

                    </div>
                )
            })}

            <div className="cartitems-bottom">
                <div className="cart-summary">
                    <div className="cart-summary-item">
                        <span className='label'>Subtotal :</span>
                        <span className='value'>₹{getTotalCartAmount()}</span>
                    </div>
                </div>

                <div className="cart-summary-item">
                    <span className='label'>Shipping</span>
                    <span className='value'>₹100</span>
                </div>

                <div className="cart-summary-item">
                        <span className="label">Total:</span>
                        <span className="value">₹{(totalCost + shippingCost).toFixed(2)}</span>
                </div>


                <div className="cartitems-bottom-promocode">
                    <input type="text" placeholder="Promo Code" />
                    <button className='promocode-button'>Apply</button>
                </div>
                <div>
                    <button className="checkout-button">Checkout</button>
                </div>
            </div>


        </div>
     );
}
 
export default Cart;