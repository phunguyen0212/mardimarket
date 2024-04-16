import { logout } from "../redux/reducer/authSlice";
export const checkAuth = (store) => (next) => (action) => {
  if (action.type === 'login/loginAdmin/fulfilled' && action.payload.data[0].role_name !== 'admin') {
    store.dispatch(logout());
  }
  console.log("action",action);
  next(action);
};
