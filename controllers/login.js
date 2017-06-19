var validator = require('validator');

exports.register = function (req, res, next) {
    //Do something

    res.render('./Login/register', { regTitle: '----注册新用户----' });
}

exports.registerMethod = function (req, res, next) {
    //Do something
    var username = validator.trim(req.body.username).toLowerCase();
    var passwd = validator.trim(req.body.pass);
    var passwd2 = validator.trim(req.body.pass2);

    //将错误显示出来
    function showError(error) {
        res.render('./Login/register', { regTitle: '----注册发生错误----', error: error });
    }

    if (username.length == 0) {
        showError("用户名不能为空。");
        return;
    }
    if (passwd.length==0){
        showError("密码不能为空。");
        return;
    }
    if(passwd!=passwd2){
        showError("两次密码输入不一致。");
        return;
    }

    res.render('./Login/register', { regTitle: '----注册新用户----实现'+username });
}