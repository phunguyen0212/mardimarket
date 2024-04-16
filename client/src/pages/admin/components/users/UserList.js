import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchUserList } from '../../../../redux/api/userAPI';
import Pagination from 'react-bootstrap/Pagination';
import './userList.css'
import axios from 'axios'
const UserList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const [userAPI, setUserAPI] = useState();
    console.log(userAPI);
    const [paginations, setPaginations] = useState([]);
    const [active, setActive] = useState(1);
    const [limit, setLimit] = useState(4);
    console.log(userAPI); 
    console.log(users);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/all?limit=${limit}&page=1`)
          .then(res => {
           const page = Math.ceil( res.data.count /limit ); 
           let pages= [ ]
           for(let i = 1 ; i <= page ; i++){
            pages.push(i)
           }
            setPaginations(pages)
            setUserAPI(res.data.data)
          })
          .catch(error => console.log(error));
      }, [])

    const onLoadPagination =  async (page) =>{
        setActive(page)
        await axios.get(`http://localhost:8000/api/user/all?limit=${limit}&page=`+ page)
        .then(res => {
            setUserAPI(res.data.data)
        }).catch(error => console.log(error));
        console.log(page);
    }
    const handleDisable = async (status, userId) => {
        try {
            // Gửi yêu cầu PATCH đến API để cập nhật trạng thái xoá mềm của người dùng
            await axios.patch(`http://localhost:8000/api/user/${userId}`, { updated_on: new Date() });

            
            setUserAPI(prevState => prevState.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error', error);
        }
    };
    return (
        <>
        <div className='user-table-container'>
                <div className='user-table-body'>
                    <div className='user-table-wrapper'>
                        <table className='user-table-data'>
                            <thead>
                                <tr>
                                    <th rowSpan={1} colSpan={1}>Tên</th>
                                    <th rowSpan={1} colSpan={1}>Email</th>
                                    <th rowSpan={1} colSpan={1}>Quyền đăng nhập</th>
                                    <th rowSpan={1} colSpan={1}>Ngày tạo</th>
                                    <th rowSpan={1} colSpan={1}>Trạng thái</th>
                                    <th rowSpan={1} colSpan={1}>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                            {userAPI?.map((item) =>( 
                                <tr className='odd'>
                                    <td>{item.full_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.name}</td>
                                    <td>{item.created_on}</td>
                                    <td>
                                        <span className='success'>{item.status ? "Active" : "Inactive"}</span>
                                    </td>
                                    <td>
                                    < button onClick={() => handleDisable(item.status, item.id)}>Xoá</button>
                                        <span>/</span>
                                        <button>Sửa</button>
                                    </td>
                                </tr>
                            ))}
                                
                            </tbody>
                        </table>
                        <Pagination>
                            {paginations?.map((item) => (
                                <Pagination.Item key={1} active={item === active} onClick={() => { onLoadPagination(item) }}> {item} </Pagination.Item>
                            ))}
                        </Pagination>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserList;