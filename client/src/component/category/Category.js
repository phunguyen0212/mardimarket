import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchCategoryList } from "../../redux/api/categoryAPI";
const Category = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryList.categoryData.categories)
    useEffect(()=> {
        dispatch(fetchCategoryList())
    },[])
    const handleCategoryPage = (item) => {
        navigate("danh-muc-san-pham" , {state:{category_code:item.category_code, category_name: item.category_name}})
    }
    return (
        <div className="category-list">
            {categories?.map(item => (
                <div className="category-item">
                    <a href="" onClick={()=> {
                        handleCategoryPage(item)
                    }}>
                        <div className="item-img">
                            <img src={item.src} alt="" />
                        </div>
                        <div className="category-name">
                            <p> {item.category_name}</p>
                        </div>
                        <div className="quantity-product">
                            
                        </div>
                    </a>
                </div>
            ))}

        </div>
    );
};

export default Category;