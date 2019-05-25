SET NAMES UTF8;
DROP DATABASE IF EXISTS fs;
CREATE DATABASE fs CHARSET="UTF8";
USE fs;
CREATE TABLE user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(20),
	upwd VARCHAR(20),
	region VARCHAR(20)
	clastName VARCHAR(20),
	cfirstName VARCHAR(20),
	efirstName VARCHAR(20),
	elastName VARCHAR(20),
	position VARCHAR(20),
	tel VARCHAR(20),
	company VARCHAR(20),
	address VARCHAR(20),
	city VARCHAR(20),
	province VARCHAR(20),
	postCode VARCHAR(20)

);
INSERT INTO user VALUES(null,"544345595@qq.com","123456","中国","朱","小玲","Viola","zhu","Manager","15700122716","DN","火炬大厦","杭州","浙江","310000");
INSERT INTO user VALUES(null,"123@qq.com","123456","中国","朱","小玲","Viola","zhu","Manager","15700122716","DN","火炬大厦","杭州","浙江","310000");
INSERT INTO user VALUES(null,"456@qq.com","123456","中国","朱","小玲","Viola","zhu","Manager","15700122716","DN","火炬大厦","杭州","浙江","310000");
INSERT INTO user VALUES(null,"789@qq.com","123456","中国","朱","小玲","Viola","zhu","Manager","15700122716","DN","火炬大厦","杭州","浙江","310000");