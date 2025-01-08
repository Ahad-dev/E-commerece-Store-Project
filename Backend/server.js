const express = require('express');
const app = express();
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const {ConnectDB} =require('./config/db')
const cors = require('cors')

//Load envioutment Vaiables
dotenv.config()

ConnectDB();

app.use(cors());
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