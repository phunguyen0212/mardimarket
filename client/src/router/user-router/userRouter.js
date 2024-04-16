import React from "react";
import Homepage from "../../pages/user/HomePage/homepage";
import { Route, Routes, Outlet, Router, Navigate } from "react-router-dom";
import ProductDetail from "../../pages/user/ProductPage/ProductDetail";
import Header from "../../pages/user/theme/header/Header";
import Menubar from "../../component/menuBar/Menubar";
import Footer from "../../pages/user/theme/footer/Footer";
import LoginRegister from "../../pages/login-reg/LoginRegister";
import Cart from "../../pages/user/cart/Cart";
import CategoryPage from "../../pages/user/categoryPage/CategoryPage";
import AdminHomePage from "../../pages/admin/pages/homePage/AdminHomePage";
import Sidebar from "../../pages/admin/components/sideBar/Sidebar";
import RightBar from "../../pages/admin/components/rightBar/RightBar";
import AdminNavBar from "../../pages/admin/components/navBar/AdminNavBar";
import AdminUsersPage from "../../pages/admin/pages/users/adminUsersPage";
import Productlist from "../../component/Productlist/Productlist";
import AdminProductsList from "../../pages/admin/pages/product/AdminProductsList";
import AddProduct from "../../pages/admin/pages/addProduct/AddProduct";
import RegisterScreen from "../../pages/login-reg/RegisterScreen";
import AdminLogin from "../../pages/admin/pages/admin-login/AdminLogin";
import { useSelector } from "react-redux";
import PharmacistHeader from "../../pages/pharmacist/components/header/PharmacistHeader";
import PharmarcistHomepage from "../../pages/pharmacist/pages/homepage/PharmarcistHomepage";
import PharmacistMenubar from "../../pages/pharmacist/components/menubar/PharmacistMenubar";
import PharmacistAddProduct from "../../pages/pharmacist/pages/pharmacist-addproduct/PharmacistAddProduct";
import "./../../pages/pharmacist/layout-custom/pharmacist-layout.css"
import PharmacistProductList from "../../pages/pharmacist/pages/productList/ProductList";
const renderUserRouter = (admin) => {
const userInfo = JSON.parse(localStorage.getItem('user'))
const userId = userInfo?.data?.data[0]?.id;
    const userRouters = [
        {
            path: "/",
            component: <Homepage />
        },
        {
            path: "/sanpham/:id/:title",
            component: <ProductDetail  account_id={userId} />
        },
        {
            path: "/danh-muc-san-pham",
            component: <CategoryPage />
        },
        {
            path: "/gio-hang",
            component: <Cart account_id={userId} />
        }
    ]
    const adminRouters = [
        {
            path: "/admin/dashboard",
            component: <AdminHomePage />
        },
        {
            path: "/admin/",
            component: <AdminHomePage />
        },
        {
            path: "/admin/users",
            component: <AdminUsersPage />
        },
        {
            path: "/admin/products",
            component: <AdminProductsList  />
        },
        {
            path: "/admin/addproduct",
            component: <AddProduct />
        },

    ]
    const pharmacistRouter = [
        {
            path: "/kenh-duoc-si/",
            component: <PharmarcistHomepage/>
        },
        {
            path: "/kenh-duoc-si/san-pham/them",
            component:<PharmacistAddProduct account_id={userId}/>
        },
        {
            path:"/kenh-duoc-si/san-pham",
            component: <PharmacistProductList account_id={userId}/>
        }
    ]
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Header />
                    <Menubar />
                    <Outlet />
                    <Footer />
                </>
            } >
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Route>
            <Route path="/" element={
                <>
                    <Header />
                    <Menubar />
                    <Outlet />
                    <Footer />
                </>
            }
            >
            <Route path="/them-vao-gio-hang" element={<Cart />} />
            </Route>
            <Route path="/dangnhap" element={<LoginRegister />} />
            <Route path="/dangky" element={<RegisterScreen />} />
                    <Route path="/admin" element={
                        admin.user.accessToken ?
                        <div className="admin-container">
                            <Sidebar />
                            <Outlet />
                            <RightBar />
                        </div>  : <Navigate to='/admin/login'/>
                    }>
                        {adminRouters.map((item, key) => (
                            <Route key={key} path={item.path} element={item.component} />
                        ))}
                    </Route>

                    <Route path="/admin/login" element = { <AdminLogin/> } />
                    <Route path="/kenh-duoc-si" element = {
                        <>
                        <PharmacistHeader/>
                        <div className="pharmacist-container">
                        <PharmacistMenubar/>
                        <Outlet/>
                        </div>
                        </>
                    }>
                        {
                            pharmacistRouter.map((item, key) => (
                                <Route key={key} path={item.path} element={item.component} />
                            ))}
                    </Route>
        </Routes>
    )
}
const RouterCustom = () => {
    const admin = useSelector(state => state.auth)
    console.log("admin",admin);
    return renderUserRouter(admin)
}
export default RouterCustom