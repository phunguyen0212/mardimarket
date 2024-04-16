import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import "../../../styles/detailProduct/detailproduct.css"
import { fetchProductInCart, AddProductToCart } from '../../../redux/api/cartAPI';
import { fetchProductById } from "../../../redux/api/productListAPI";
const ProductDetail = ({ account_id }) => {
    console.log(account_id);
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const product = useSelector(state => state.productDetail)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    console.log("cart", cart);
    useEffect(() => {
        dispatch(fetchProductById(id));
        dispatch(fetchProductInCart(account_id));
    }, [id, account_id, dispatch]);
    const handleAddtoCart = (product) => {
        const existingProduct = cart.cartItems.find(item => item.product_id === product.id);
        if (existingProduct) {
            const updatedQuantity = existingProduct.quantity + quantity;
            dispatch(AddProductToCart({ account_id, product_id: product.id, quantity: updatedQuantity }));
        } else {
            dispatch(AddProductToCart({ account_id, product_id: product.id, quantity }));
        }
    }
    const productData = product?.productData?.data

    return (
        <div className="container">
            {
                productData && (
                    <div className="detail-infomation">
                        <div className="detail-infomatio-left">
                            <div className="img-info-container">
                                <div className="carasel-gallery">
                                    <div className="slider-gallery-area">
                                        <img src={productData.img} />
                                    </div>
                                    <div className="button-area">
                                        <div className="previous-btn">
                                            <i className="fa-solid fa-chevron-left" />
                                        </div>
                                        <div className="next-btn">
                                            <i className="fa-solid fa-chevron-right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail-infomation-right">
                            <div className="brand-name">
                                <span>Thương hiệu: </span>
                                <span>
                                    <a href="">Bounty</a>
                                </span>
                            </div>
                            <div className="product-name">
                                <span>
                                    <h3>
                                        {productData.title}
                                    </h3>
                                </span>
                            </div>
                            <div className="product-price">
                                <span>
                                    {productData.price}
                                </span>
                                <span> / </span>
                                <span>Hộp</span>
                            </div>
                            <table className="content-list">
                                <tbody>
                                    <tr className="unit">
                                        <td>Đơn vị tính</td>
                                        <td>
                                            <p>
                                                {productData.unit}
                                            </p>
                                        </td>
                                    </tr>
                                    <tr className="category">
                                        <td>
                                            <p>Danh mục</p>
                                        </td>
                                        <td>
                                            <a href="">Vitamin</a>
                                        </td>
                                    </tr>
                                    <tr className="quantityOfUnit">
                                        <td>Quy cách</td>
                                        <td>
                                            {productData.quantityofunit}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="addToCart">
                                <div className="quantityToCart">
                                    <span>Chọn số lượng</span>
                                    <div className="quantityInput">
                                        <input type="number"
                                            min={1}
                                            max={9999}
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value))} />
                                    </div>
                                    <span className="quantityInStock">
                                        <p>
                                            Hiện đang có {productData.quantityOfStock} sản phẩm
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="button-addtocart-Area">
                                <div className="btn-addToCart">
                                    <button className="AddToCart-button" onClick={() => {
                                        handleAddtoCart(productData);
                                    }}>
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                                <div className="btn-placePharmacist">
                                    <button>Nhà thuốc của dược sĩ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};
export default ProductDetail;