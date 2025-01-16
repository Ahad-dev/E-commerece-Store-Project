const express = require('express');
const app = express();
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const {ConnectDB} =require('./config/db')
const cors = require('cors')
const cookieParser = require('cookie-parser');


//Load envioutment Vaiables
dotenv.config()

ConnectDB();
// Use cookie-parser middleware
app.use(cookieParser());
app.use(cors({
    //allow all origin
    origin:true,
    credentials:true
}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/auth',require('./routes/authRoute'));
app.use('/api/product',require('./routes/productRoute'));
app.use('/api/cart',require('./routes/cartRoute'));
app.use('/api/orders',require('./routes/orderRoute'));
app.use('/api/user',require('./routes/userRoute'));


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is listen on the http://localhost:${PORT}`);
})