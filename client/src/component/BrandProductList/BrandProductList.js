import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { fetchProductListByCategory } from "../../redux/api/productListAPI";
const BrandProductlist = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const topBrands = useSelector(state => state.productByCategory.products.products)
  const handleDetail = (product) => {
    navigate("sanpham/" + product.id + "/"+product.title)

  };
  useEffect(()=> {
 
    dispatch(fetchProductListByCategory('vitamin'))
},[]);

  
  return (
    <>
      {topBrands?.map((item) => (
        <div className="favourite-brand-card">
          <a href="" onClick={() => {
            handleDetail(item);
          }}>
            <div className="brand-product">
              <img src={item.img} />
            </div>
            <div className="content">
              <p>
                {item.title}
              </p>
            </div>
          </a>
        </div>

      ))}
    </>
  );
};

export default BrandProductlist;