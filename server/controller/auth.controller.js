require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {getUsers , insertUser ,getUser} = require('./../repository/user.repository');
// const { use } = require('../routes/user.route');

const loginUser = async (req, res) => {
    const { fullname,email,username, password } = req.body
    let message = {
        email: '',
        password: '',
        username:''
    }
    let isValidate = false
    if (!password || password.trim().length < 8) {
        message.password = 'Password phải trên  8 ký tự.'
        isValidate = true
    }
    const users = await getUsers(username, password);
    if (!users || users.length === 0) {
        res.status(404).json({
            message
        });
    }

    const accessToken = jwt.sign({username: username, role: 'user'},process.env.ACCCESS_TOKEN_SECRET)
    res.status(200).json({
        data: users,
        accessToken
    })
}
const registerUser = async(req, res) => {
    const { full_name, email, password, username } = req.body
    let message = {
        full_name: '',
        email: '',
        password: '',
        username:''
    }
    
    let isValidate = false

    if (!full_name || full_name.trim().length < 3) {
        message.full_name = 'User phải trên 3 ký tự.'
        isValidate = true
    }

    if (!email || !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.trim())) {
        message.email = 'Email không hợp lệ.'
        isValidate = true
    }

    if (!password || password.trim().length < 8) {
        message.password = 'Password phải trên 8 ký tự.'
        isValidate = true
    }

    if (isValidate) {
        res.status(400).json(message)
    }
    const saltRounds = 5;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    let newUser = {
        full_name: full_name,
        email: email,
        password: hash,
        username:username
    }
    try{
        let any =  await insertUser(newUser)
        res.status(200).json({
             message: 'Đăng ký thành công',
             data: req.body
         }) 
    } catch {
        res.status(400).json({message})
    } 
        
    
}

module.exports = { registerUser, loginUser }