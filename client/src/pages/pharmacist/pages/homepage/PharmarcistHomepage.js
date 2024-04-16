import React from 'react';
import PharmacistMenubar from '../../components/menubar/PharmacistMenubar';
import "./pharmacist-homepage.css"
const PharmarcistHomepage = () => {
    return (
       <>
            <div className='pharmacist-homepage-container'>
                <div className='to-do-container'>
                    <div className='to-do-header'>
                        <h2>Danh sách cần làm</h2>
                        <p>Những việc bạn phải làm</p>
                    </div>
                    <div className='to-do-grid'>
                        <div className='to-do-box'>
                            <a href='#' className='to-do-box-aitem'>
                                <p className='to-do-item-title'>0</p>
                                <p className='to-do-item-desc'>Chờ xác nhận</p>
                            </a>
                            <a href='#' className='to-do-box-aitem'>
                                <p className='to-do-item-title'>0</p>
                                <p className='to-do-item-desc'>Chờ lấy hàng</p>
                            </a>
                            <a href='#' className='to-do-box-aitem'>
                                <p className='to-do-item-title'>0</p>
                                <p className='to-do-item-desc'>Đã xử lý</p>
                            </a>
                            <a href='#' className='to-do-box-aitem'>
                                <p className='to-do-item-title'>0</p>
                                <p className='to-do-item-desc'>Đơn huỷ</p>
                            </a>
                            <a href='#' className='to-do-box-aitem'>
                                <p className='to-do-item-title'>0</p>
                                <p className='to-do-item-desc'>Trả hàng/ Hoàn tiền chờ xử lý</p>
                            </a>
                            <a href='#' className='to-do-box-aitem'>
                                <p className='to-do-item-title'>0</p>
                                <p className='to-do-item-desc'>Sản phẩm bị tạm khoá</p>
                            </a>
                            <a href='#' className='to-do-box-aitem'>
                                <p className='to-do-item-title'>0</p>
                                <p className='to-do-item-desc'>Sản phẩm hết hàng</p>
                            </a>
                            <a href='#' className='to-do-box-aitem'>
                                <p className='to-do-item-title'>0</p>
                                <p className='to-do-item-desc'>Chương trình khuyến mãi</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
};

export default PharmarcistHomepage;