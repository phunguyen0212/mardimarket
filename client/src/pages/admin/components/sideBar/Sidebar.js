import React from 'react';
import './sideBar.css'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const handleLogout = () => {
        localStorage.removeItem('user')
        window.location.reload()
    }
    return (
        <>
            <aside>
                <div className='sidebar-container' >
                <div className="top">
                    <div className="logo">
                        <div className='admin-header-nav-title'>
                            <span className="danger">YourDoctor ADMIN</span>
                        </div>
                    </div>
                    <div className="close" id="close-btn">
                        <span className="material-symbols-sharp">close</span>
                    </div>
                </div>
                <div className="sidebar">
                    <Link to="/admin">    
                    <h3>Trang chủ</h3>
                    </Link>
                    <Link to="/admin/users">    
                    <h3>Quản lý người dùng</h3>
                    </Link>
                    <a href="#">
                        <h3>Quản lý dược sĩ</h3>
                    </a>
                    <a href="#">
                        <h3>Quản lý giao diện</h3>
                    </a>
                    <div className='footer-sidebar'>

                    <a href="#">
                       
                        <h3>Cài đặt</h3>
                    </a>
                    <a href="#">

                        <h3 onClick={handleLogout}>Đăng xuất</h3>
                    </a>
                    </div>
                </div>
                </div>
            </aside>

        </>
    );
};
export default Sidebar;