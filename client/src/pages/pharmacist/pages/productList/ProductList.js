import React from 'react';
import ProductTable from '../../components/productTable/ProductTable';

const PharmacistProductList = ({account_id}) => {
    return (
        <div>
            <ProductTable account_id={account_id}/>
        </div>
    );
};

export default PharmacistProductList;