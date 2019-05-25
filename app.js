const express=require('express');
const server=express();
const bodyParser=require('body-parser');
var userRouter=require('./routes/user.js');
server.listen(8080);
server.use(express.static('public'));
server.use(bodyParser.urlencoded({
		extended:false
}));
server.use(cors({
	origin:"http://127.0.0.1:5500"
}))
server.use('/user',userRouter);