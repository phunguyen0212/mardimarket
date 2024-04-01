const express = require("express")
const app = express();
const authRouter = require("./src/routes/auth.router.js");
const session = require('express-session')
const dotenv = require('dotenv')
const cors = require('cors')
// npm install --save body-parser
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
dotenv.config();
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'somesecret',
  cookie: { maxAge: 60000 }
}));
app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({ 
  extended: true
}))
const port = 8000
app.use(cors())
app.use(cookieParser())
app.use("/api/user",authRouter )


app.listen(port, () => {
  console.log("Start serrver") 
})