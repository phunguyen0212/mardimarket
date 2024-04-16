import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchProductListByCategory } from "../../redux/api/productListAPI";
const Productlist = (props) => {
    const navigate = useNavigate()
    const bestSellers = useSelector(state => state.productByCategory.products.products)
    console.log(bestSellers);
    const dispatch = useDispatch()
    const handleDetail = (product) => {
        navigate("sanpham/" + product.id + "/"+product.title)
        // console.log("loghandleclick",product);
    };
    useEffect(()=> {
       
        dispatch(fetchProductListByCategory("thankinhnao"))
    },[])
    return (
        <div>
            <div className="best-seller-container">
                <div className="best-seller-header">
                    <img src="/assets/img/item1.webp" alt="" />
                    <h2>Sản phẩm bán chạy</h2>
                </div>
                <div className="best-seller-list">
                    { bestSellers?.map((item) => (

                        <div className="best-seller-product-card">
                            <a>
                                <img src={item.img} />
                            </a>
                            <div className="best-seller-product-content">
                                <div className="name-product">
                                    <a className="showDetail" onClick={() => {
                                        handleDetail(item);
                                    }}>
                                        {item.title}

                                    </a>
                                </div>
                                <div className="product-price">
                                    <span>
                                        {item.price}
                                        <span>{item.unit}</span>
                                    </span>
                                </div>
                                <div className="product-info">
                                    <a>
                                        {item.quantityofunit}
                                    </a>
                                </div>
                            </div>
                        </div>

                    ))
                    }


                </div>
            </div>

        </div>
    );
};
export default Productlist;