const express=require('express');
const router=express.Router();
var pool=require('../pool.js');
router.get('/login',(req,res)=>{
	var $email=req.query.email;
	var $upwd=req.query.upwd;
	console.log($email,$upwd);
	if (!$email){
	    res.send("2");
	    return;
    }
	if(!$upwd){
	    res.send("2");
	    return;
    }
	var sql="SELECT * FROM user WHERE email=? AND upwd=?"
    pool.query(sql,[$email,$upwd],(err,result)=>{
        if(err) throw err;
        if (result.length>0){
            res.send("1");

        }else{
            res.send("0");
        }
    })
});
//验证用户名
router.get('/test',(req,res)=>{
	var email=req.query.email;
	console.log(email);
    // console.log(email);
	if (!email)
	{
		res.send("0");
		return;
	}
	var sql="SELECT * FROM user WHERE email=?"
	pool.query(sql,[email],(err,result)=>{
		if(err) throw err;
		// console.log(result);
		if (result.length>0)
		{
			res.send("1");
			
		}else{
			res.send("0");
		}
	});
});
//注册
router.get('/reg',(req,res)=>{
    var obj=req.query;
    console.log(obj);
	for (var key in obj)
	{
		if (!obj[key])
		{
			res.send("0");
			return;
		}
	}
	var sql="INSERT INTO user SET ? "
	pool.query(sql,[obj],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if (result.affectedRows>0)
		{
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
module.exports=router;