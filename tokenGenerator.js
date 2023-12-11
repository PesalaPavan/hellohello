"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var jwt = require("jsonwebtoken");
dotenv.config();
var user = {
    id: 2
};
var secretKey = process.env.SECRET_KEY;
var tokenData = {
    userId: user.id
};
var tokenOptions = {
    expiresIn: '2 days'
};
var token = jwt.sign(tokenData, secretKey, tokenOptions);
console.log(JSON.stringify(jwt.decode(token)));
