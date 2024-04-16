import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './selector.css'
import { fetchChildrenCategories, fetchParentCategories, fetchGrandChildrenCategories } from '../../../../redux/api/categoryAPI';
const CategorySelector = ({ onCategoryChange }) => {
    const parentCategories = useSelector(state => state.categories.parentCategories.rootCategory)
    const childCategories = useSelector(state => state.categories.childCategories)
    const grandchildCategories = useSelector(state => state.categories.grandChildCategories)
    const dispatch = useDispatch()
    const [parentCategory, setParentCategory] = useState('');
    const [childCategory, setChildCategory] = useState('');
    const [grandChildCategories, setGrandChildCategories] = useState('');

    useEffect(() => {
        dispatch(fetchParentCategories())
    }, [])

    useEffect(() => {
        dispatch(fetchChildrenCategories(parentCategory))
    }, [parentCategory])
    
    console.log("parentId", parentCategory);
    console.log("childID", childCategory);
    console.log("GrandID", grandChildCategories);
    useEffect(() => {
        dispatch(fetchGrandChildrenCategories(childCategory))
    }, [childCategory])

    const handleParentCategoryChange = (e) => {
        setParentCategory(e.target.value)
    }

    const handleChildCategoryChange = (e) => {
        setChildCategory(e.target.value)
    }
    const handleGrandChildCategoryChange = (e) => {
        setGrandChildCategories(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let selectedCategoryId;

        if (grandChildCategories.length > 0) {
            selectedCategoryId = grandChildCategories;
        } else if (childCategory.length > 0) {
            selectedCategoryId = childCategory;
        } else {
            selectedCategoryId = parentCategory;
        }
        onCategoryChange(selectedCategoryId);
    }
    return (
        <>
            <select id="parentCategory" onChange={handleParentCategoryChange}>
                <option>Chọn ngành hàng</option>
                {parentCategories?.map(item => (
                    <option value={item.id}>
                        {item.name}
                    </option>
                )
                )}
            </select>
            {
                parentCategory.length > 0 && (
                    <select id="childCategory" onChange={handleChildCategoryChange}>
                        <option>Chọn ngành hàng</option>
                        {childCategories?.map(item => (
                            <option value={item.id}>
                                {item.name}
                            </option>
                        )

                        )}
                    </select>
                )
            }
            {
                childCategory.length > 0 && (
                    <select id="grandChildCategory" onChange={handleGrandChildCategoryChange}>
                        <option>Chọn ngành hàng</option>
                        {grandchildCategories?.map(item => (
                            <option value={item.id}>
                                {item.name}
                            </option>
                        )
                        )}
                    </select>
                )
            }
                <button onClick={handleSubmit}>Thêm</button>
        </>
    );
};

export default CategorySelector;