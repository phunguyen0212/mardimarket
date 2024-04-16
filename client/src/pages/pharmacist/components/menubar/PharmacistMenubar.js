import React, { useState } from 'react';
import './pharmacist-menubar.css';
import { Link } from 'react-router-dom';
const PharmacistMenubar = () => {
    const [showSubMenu, setShowSubMenu] = useState({
        1: false,
        2: false,
        5: false
    });

    const handleClick = (menuNumber) => {
        setShowSubMenu({
            ...showSubMenu,
            [menuNumber]: !showSubMenu[menuNumber]
        });
    }

    return (
       <>
            <div className='pharmacist-menubar'>
                <ul className="pharmacist-dropdown-menu">
                    <li>
                        <a href="#" onClick={() => handleClick(1)}>Vận chuyển</a>
                        <i className="icon-menu fas fa-chevron-down" onClick={() => handleClick(1)} />
                        {showSubMenu[1] && (
                            <ul className="pharmacist-sub-menu">
                                <li>
                                    <a href="#">Quản lý vận chuyển</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="#" onClick={() => handleClick(2)}>Quản lý đơn hàng</a>
                        <i className="icon-menu fas fa-chevron-down" onClick={() => handleClick(2)} />
                        {showSubMenu[2] && (
                            <ul className="pharmacist-sub-menu">
                                <li>
                                    <a href="#">Tất cả</a>
                                </li>
                                <li>
                                    <a href="#">Đơn huỷ</a>
                                </li>
                                <li>
                                    <a href="#">Trả hàng/Hoàn tiền</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="#" onClick={() => handleClick(5)}>Quản lý sản phẩm</a>
                        <i className="icon-menu fas fa-chevron-down" onClick={() => handleClick(5)} />
                        {showSubMenu[5] && (
                            <ul className="pharmacist-sub-menu">
                                <li>
                                    <a href="#">Tất cả sản phẩm</a>
                                </li>
                                <li>
                                    {/* <a href="#">Thêm sản phẩm</a> */}
                                    <Link to='/kenh-duoc-si/san-pham/them'>Thêm sản phẩm</Link>
                                </li>
                                <li>
                                    <a href="#">Cài đặt sản phẩm</a>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            </>
    );
};

export default PharmacistMenubar;
