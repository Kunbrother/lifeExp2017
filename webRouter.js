var express = require("express");
var site=require("./controllers/site");
var login=require("./controllers/login");

var router = express.Router();

//home page
router.get("/", site.index);

//注册页面
router.get("/Login/register",login.register);
router.post("/Login/register",login.registerMethod);

module.exports = router;
