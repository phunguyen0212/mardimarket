import React, { useRef, useState } from 'react';
import "../../../../styles/login-register/loginReg.css"
import { useDispatch, useSelector} from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../../../redux/api/userAPI';
function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputPsdRef = useRef()
  const inputusernameRef = useRef()
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const adminLogin =  useSelector(state => state.auth)
  console.log("adminLogin",adminLogin);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    if(formErrors.username == undefined && formErrors.password == undefined ){
      dispatch(loginAdmin(formValues)).then((result) => {
        if(result.payload) {
          console.log("resultPayload",result.payload);
          const isAdmin = result.payload.data[0].role_name;
          console.log("isAdmin", isAdmin);
          if(isAdmin === "admin") {
            navigate('/admin')
          }
        } else {
          console.log("k phải admin");
          setFormErrors(validate(formValues));
        }
      })
    }
  }
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "username không được bỏ trống";
    }  else if(adminLogin.user.role_name !== 'admin') {
      errors.username = "tài khoản admin không tồn tại";
    }
    if (!values.password) {
      errors.password = "Password không được bỏ trống";
    }

    console.log(errors);
    return errors;
  };
  return (
    <div className="container">,
      <div className="login-container">
        {/* <div className="cover">
          <img src="/assets/img/login.png" alt="" />
        </div> */}
        <div className="login-form">
          <div className="logo">
            <img src="/assets/img/LogoDO.png" alt="" />
          </div>
          <div className="title">
            <h2>Đăng nhập Admin</h2>
          </div>
          <form action="" id="login-form">
            <div className="form-control">
              <input
                type="username"
                name="username"
                id="login-username"
                ref={inputusernameRef}
                placeholder="username"
                onChange={handleChange}
              />
              <div className='error'>
              {formErrors.username && <small className='error-mess' >{formErrors.username}</small>}
              </div>
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                id="login-pswd"
                ref={inputPsdRef}
                placeholder="Password"
                onChange={handleChange}
              />
              <div className='error'>
              {formErrors.password && <small className='error-mess' >{formErrors.password}</small>}
              </div>
            </div>
            <div className="button">
              <button type="submit" className="login-btn" onClick={handleSubmit}>
                Đăng nhâp
              </button>
            </div>
            <div className="forgot-pass">
              <div className="remember">
                <input type="checkbox" />
                Ghi nhớ mật khẩu
              </div>
              <div className="forgot">
                <a href="#">Quên mật khẩu?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
