var express = require("express");
//建立一个路由空表！！！！
var router = express.Router();
//引入user 模型 类似于英雄联盟  只能有六神装的设计
const production = require("../sql/admin");


router.get("/", function (req, res, next) {
    console.log('此时进入了register')
    res.render("register");
});

router.post("/in", function (req, res, next) {
    console.log("进入register 的in 处理");
    let obj = req.body;
    console.log(obj)
    console.log(obj.userName);
    console.log(obj.passWord);
    


    production.findOne({passWord:obj.passWord}, (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
        if (data) {
          res.redirect("/register");
        } else {
          production.insertMany(obj, (err, data) => {
            if (err) {
              console.log(err);
            }
            console.log(data);
    
            if (data) {
              res.redirect("/login");
            } else {
              res.redirect("/register");
            }
          });
        }
      });
    
});



module.exports = router;