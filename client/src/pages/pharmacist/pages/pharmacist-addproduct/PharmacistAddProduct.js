import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createProduct } from '../../../../redux/api/productListAPI';
import "./addproduct.css"
import CategorySelector from '../../components/category-selector/CategorySelector';
const PharmacistAddProduct = ({ account_id }) => {
    console.log(account_id);
    const navigate = useNavigate()
    const products = useSelector(state => state.producsList)
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
    let { id } = useParams();
    const dispatch = useDispatch();
    const inputImgRef = useRef();
    const inputTitleRef = useRef();
    const inputPriceRef = useRef();
    const inputUnitRef = useRef();
    const inputquantityofunitRef = useRef();
    const inputdDesRef = useRef();
    const inputCategoryRef = useRef();
    const inputDiscountRef = useRef();
    const inputSKURef = useRef();
    const inputquantityofstockRef = useRef();
    const userIdRef = useRef()
    console.log("selectedCategoryId",selectedCategoryId);
    useEffect(() => {
        if (!id) return;
        const product = products.find((x) => Number(x.id) === Number(id));
        if (product) {
            inputImgRef.current.files[0] = product.img
            inputTitleRef.current.value = product.title
            inputPriceRef.current.value = product.price
            inputUnitRef.current.value = product.unit
            inputquantityofunitRef.current.value = product.quantityofunit
            inputdDesRef.current.value = product.des
            inputCategoryRef.current.value = product.category
            inputDiscountRef.current.value = product.discount
            inputSKURef.current.value = product.SKU
            inputquantityofstockRef.current.value = product.inputquantityofstock
        }
    }, []);
    const handleCategoryChange = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };
    const handleSubmit = () => {
        const product = {
            img: inputImgRef?.current?.files[0],
            title: inputTitleRef?.current?.value,
            price: inputPriceRef?.current?.value,
            unit: inputUnitRef?.current?.value,
            quantityofunit: inputquantityofunitRef?.current?.value,
            des: inputdDesRef?.current?.value,
            category_id: selectedCategoryId,
            discount: inputDiscountRef?.current?.value,
            SKU: inputSKURef?.current?.value,
            quantityOfStock: inputquantityofstockRef?.current?.value,
            user_id :account_id
        }
        dispatch(createProduct(product))
        navigate(-1)
        console.log(product);
    }
    return (
        <>
            <div className='pharmacis-add_product-container'>
                <div className='add-product-container'>
                    <div className='add-product-card-general'>
                        <div className='add-product-card-general-heading'>
                            <h2>Tổng quan</h2>
                        </div>
                        <div className='add-product-card-general-body'>
                            <form className='add-product-card-general-body-form'>
                                <div className='card-general-group'>
                                    <div className=' card-general-row'>
                                        <label className=' card-general-label'>Tên sản phẩm: </label>
                                        <input className='card-general-input' name='title' type='text' ref={inputTitleRef}></input>
                                    </div>
                                    <div className=' card-general-row'>
                                        <label className=' card-general-label'>Mô tả sản phẩm: </label>
                                        <textarea className='card-general-input' name='des' type='text' ref={inputdDesRef}></textarea>
                                    </div>
                                    <div className=' card-general-row'>
                                        <label className=' card-general-label'>Đơn vị tính: </label>
                                        <input className='card-general-input' name='unit' type='text' ref={inputUnitRef}></input>
                                    </div>
                                    <div className=' card-general-row'>
                                        <label className=' card-general-label'>Danh mục: </label>
                                        {/* <select className='card-general-select' name='category' ref={inputCategoryRef} >
                                        </select> */}
                                            <CategorySelector onCategoryChange={handleCategoryChange}/> 
                                    </div>
                                    <div className=' card-general-row'>
                                        <label className=' card-general-label'>Quy cách: </label>
                                        <input className='card-general-input' name='quantityofunit' type='text' ref={inputquantityofunitRef}></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='add-product-card-pricing'>
                        <div className='add-product-card-pricing-heading'>
                            <h2>Giá</h2>
                        </div>
                        <div className='add-product-card-pricing-body'>
                            <form className='add-product-card-pricing-body-form'>
                                <div className='card-pricing-group'>
                                    <div className=' card-pricing-row'>
                                        <label className=' card-pricing-label'>Giá sản phẩm: </label>
                                        <input className='card-pricing-input' name='price' type='text' ref={inputPriceRef}></input>
                                    </div>
                                    <div className=' card-pricing-row'>
                                        <label className=' card-pricing-label'>Mã giảm: </label>
                                        <input className='card-pricing-input' name='discount' type='text' ref={inputDiscountRef}></input>
                                    </div>
                                    <div className=' card-pricing-row'>
                                        <label className=' card-pricing-label'>SKU: </label>
                                        <input className='card-pricing-input' name='SKU' type='text' ref={inputSKURef}></input>
                                    </div>
                                    <div className=' card-pricing-row'>
                                        <label className=' card-pricing-label'>Ảnh sản phẩm: </label>
                                        <input className='card-pricing-input' name='img' type='file' ref={inputImgRef}></input>
                                    </div>
                                    <div className=' card-pricing-row'>
                                        <label className=' card-pricing-label'>Số lượng: </label>
                                        <input className='card-pricing-input' name='qty' type='number' ref={inputquantityofstockRef}></input>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <button className='add-btn' onClick={handleSubmit}>Them</button>
            </div>
        </>
    );
};

export default PharmacistAddProduct;