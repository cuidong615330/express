var express = require("express");
var router = express.Router();
const production = require("../sql/admin");

router.get("/", function (req, res, next) {
  // 先请求数据库数据，将数据渲染到页面模板

  res.render("login"
  )
})

router.post("/in", function (req, res, next) {
  console.log("进入login 的in 处理");

  let obj = req.body;
  console.log(obj)
  console.log(obj.userName);
  console.log(obj.passWord)
  //这一步是查询里面有没有 用户输入的 username password 有就可以跳后面页面 没有不可以
  production.findOne(obj, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    if (data) {

      // res.cookie('islogin', 'ok')
      req.session.islogin = 'ok';
      res.redirect('/user')
    } else {
      res.redirect('/register')
    }


  });
});









module.exports = router;
