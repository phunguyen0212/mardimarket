import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { fetchProductListByCategory } from "../../../redux/api/productListAPI";
import './categoryPage.css'
import { fetchCategoryList } from "../../../redux/api/categoryAPI";
const CategoryPage = () => {
    const location = useLocation();
    const {category_code} = location.state;
    const {category_name} = location.state
    const [valueCategory, setValueCategory] = useState(category_code)
    const [nameCategory, setNameCategory] = useState(category_name)
    const navigate = useNavigate()
    const products = useSelector(state => state.productByCategory.products.products)
    const category = useSelector(state => state.categoryList)
    const dispatch = useDispatch()

    console.log(category_code);
    const handleOnChange = (e) => {
        setValueCategory(e.target.value)
        setNameCategory(e.target.options[e.target.selectedIndex].text)
    }
    useEffect(() => {
        dispatch(fetchCategoryList())
    }, [])
    useEffect(() => {
        dispatch(fetchProductListByCategory(valueCategory))
    }, [valueCategory])
    return (
        <div>
            <div className='container'>
                <div className="title">
                    <h1>{nameCategory}</h1>
                    <div className="filter-container">
                        <div className="filter-wrapper">
                            <div className="header-filter-wrapper">

                            </div>
                            <div className="body-filter-wrapper">
                                <div className="filter-category-body">
                                    <select onChange={handleOnChange} value={valueCategory} > 
                                        {category?.categoryData?.categories?.map(category => (
                                            <option value={category.category_code}>{category.category_name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    products ? <div className='productOfCategory'>
                    <div className="product-list">
                        {
                            products?.map((item) => (
                                <div className="product-card">
                                    <a>
                                        <img src={item.img} />
                                    </a>
                                    <div className="product-content">
                                        <div className="name-product">
                                            <a className="showDetail" onClick={() => {

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
                            ))}

                    </div>
                </div> : <div>Loading...</div>
                }
                
            </div>
        </div>
    );
};
export default CategoryPage;