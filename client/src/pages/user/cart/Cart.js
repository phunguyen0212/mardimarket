import "../../../styles/cart/cart.css"
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductInCart, DeleteProductCart } from '../../../redux/api/cartAPI';
const Cart = ({ account_id }) => {
    const cart = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()
    console.log(cart)
    useEffect(() => {
        dispatch(fetchProductInCart(account_id))
    }, [account_id]);

    const handleRemove = async (cartItemId) => {
        console.log("cartItemId0",cartItemId);
        const params = 
            { account_id: account_id, cart_item_id: cartItemId }
            console.log(params);
        try {
            dispatch(DeleteProductCart(params));
            dispatch(fetchProductInCart(account_id));
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    return (
        <div className="container">
            <div className="cart-wrapper">\
            {
                cart?.map((item, key) => (
                    <div className="list-cart" key = {item.id}>
                    <a href="" className="cart-item">
                        <img src={item.img} alt="" />
                    </a>
                    <div className="cart-body">
                        <div className="cart-selector">
                            <h3 className="product-title">
                              {item.title}
                            </h3>
                            <div className="price">
                                <p>
                                    {item.price}
                                </p>
                            </div>
                            <div className="quantity">
                                <input  type="number"
                                    id="quantity"
                                    defaultValue={item.quantity}></input>
                            </div>
                            <button onClick={() => handleRemove(item.cart_item_id)}>
                                <i
                                    className="fa-solid fa-trash deleteProduct"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
            <div className="payment-product">
                <div className="cart-total-title">
                    <h3>Tổng tiền</h3>
                </div>
                <div className="price-item">
                    {/* <h1>{cart.reduce((total,item) => total + Number(item.price.split('đ')[0]), 0).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</h1> */}
                </div>
                <div className="pay-btn">
                    <button>Thanh toán</button>
                </div>
            </div>
        </div>

    );
};

export default Cart;