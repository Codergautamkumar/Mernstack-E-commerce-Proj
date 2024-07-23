import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';

const Cart = () => {

    const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

    const navigate = useNavigate();
    
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
            if(cartItems[item._id]>0)
            {
                return (
                    <div>
                        <div className="cart-items-title cart-items-item">
                            <p>{item.name}</p>
                            <img src={item.image} alt="" />
                            <p>${item.price}</p>
                            <p>{cartItems[item._id]}</p>
                            <p>{item.price*cartItems[item._id]}</p>
                            <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                        </div>
                        <hr />
                    </div>
                )
            }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
            <div>
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${getTotalCartAmount()===0?0:5}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+5}</b>
                </div>
            </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECHOUT</button>
        </div>
        <div className="cart-promocode">
            <div>
                <p>If you have a promo code, Enter it here</p>
                <div className="cart-promocode-input">
                    <input type="text" placeholder='Promo Code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
