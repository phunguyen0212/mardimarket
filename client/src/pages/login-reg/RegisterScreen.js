import React, { useEffect,useRef,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { fetchUserList,RegisterUser} from '../../redux/api/userAPI';
const RegisterScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const users =  useSelector(state => state.users)
    const inputFullNameRef = useRef()
    const inputUserNameRef = useRef()
    const inputPsdRef = useRef()
    const inputEmailRef = useRef()
    const inputRePsdRef = useRef()
    const {id} = useParams()
    const initialValues = { fullname: "", email: "",username:"", password: "", repassword:"" };
    const [formValues, setFormValues] =  useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    console.log(users);
    useEffect(() => {
        if (!id) return;
        const user = users.find((x) => Number(x.id) === Number(id));
        if(user) {
            inputFullNameRef.current.value = user.full_name
            inputUserNameRef.current.value = user.username
            inputPsdRef.current.value = user.password
            inputEmailRef.current.value = user.repassword
        }

    },[])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        const user = {
            full_name: inputFullNameRef?.current?.value,
            username: inputUserNameRef?.current?.value,
            email: inputEmailRef?.current?.value,
            password: inputPsdRef?.current?.value,
            repassword: inputRePsdRef?.current?.value,
        }
        setFormErrors(validate(user));
            if(formErrors.fullname == "",formErrors.email == "",formErrors.password == "",formErrors.repassword == ""){
                dispatch(RegisterUser(user))
                navigate("/dangnhap")
            }
    }
    const validate = (values) => {
        const errors = {};
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!values.fullname) {
          errors.fullname = "Không được để trống";
        }
        if (!values.username) {
            errors.username = "Không được để trống";
          }
        if (!values.email) {
          errors.email = "Email không được để trống!";
        } else if (!regex.test(values.email)) {
          errors.email = "Email không đúng định dạng!";
        }
        if (!values.password) {
          errors.password = "Mật khẩu không được để trống";
        } else if (values.password.length < 8) {
          errors.password = "mật khẩu phải trên 8 ký tự";
        }
       
        return errors;
      };
    return (
        <div className="container">
            <div class="register-container">
                <div class="register-form">
                    <div className="logo">
                        <img src="/assets/img/LogoDO.png" alt="" />
                    </div>
                    <div class="title">
                        <h2>Đăng ký</h2>
                    </div>
                    <form action="">
                        <input type="text" name="fullname" id="sign-name" placeholder="Họ tên đầy đủ" 
                        ref={inputFullNameRef} 
                        onChange={handleChange}/>
                        <input type="text" name="username" id="sign-name" placeholder="Tên đăng nhập" 
                        ref={inputUserNameRef} 
                        onChange={handleChange}/>
                         {formErrors.username && <span className='error-mess' >{formErrors.username}</span>}
                        <input type="email" name="email" id="sign-email" placeholder="Email của bạn" 
                        ref={inputEmailRef} 
                        onChange={handleChange} />
                        {formErrors.email && <span className='error-mess' >{formErrors.email}</span>}

                        <input type="password" name="password" id="sign-pswd" placeholder="Mật khẩu" 
                        ref={inputPsdRef} 
                        onChange={handleChange}/>
                        {formErrors.password && <span className='error-mess' >{formErrors.password}</span>}

                        <input type="password" name="repassword" id="sign-rpswd" placeholder="Nhập lại mật khẩu"
                        onChange={handleChange} />
                        {formErrors.repassword && <span className='error-mess' >{formErrors.repassword}</span>}
                        <div class="button">
                            {/* <a href="" class="SignUp-btn" onClick={handleSubmit}>Đăng ký</a> */}
                            <button class="SignUp-btn" onClick={handleSubmit}>Đăng ký</button>
                        </div>
                        <div class="line">
                            <span>Hoặc</span>
                        </div>
                        <div class="link">
                            <p>Bạn đã có tài khoản? <a class="login-link">Đăng nhập</a></p>
                        </div>
                    </form>
                </div>
                <div className="cover">
                    <img src="/assets/img/login.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default RegisterScreen;