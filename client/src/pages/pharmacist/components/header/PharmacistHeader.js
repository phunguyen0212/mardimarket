import React from 'react';
import "./pharmacist-header.css"
const PharmacistHeader = () => {
    return (
        <div className='pharmacist-header'>
            <div className='logo'>
                <img src="/assets/img/logoDO.png" alt="" />
                <nav>Kênh dược sĩ</nav>
            </div>
            <div className='pharmacist-info'>
                <div className='avartar'>
                    <img src="https://picsum.photos/40" />
                </div>
                <div className='pharmacist-name'>
                    <p>Phú Nguyễn</p>
                </div>
            </div>
        </div>
    );
};

export default PharmacistHeader;