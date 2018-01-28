let express = require('express');
let app = express();
app.listen(9999);
let session = require('express-session');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'yangbo'
}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By", ' 3.2.1');
  if (req.method == "OPTIONS") res.send();/*让options请求快速返回*/
  else next();
});

let dataNameArr = ["family", "jiadian", "phone", "video", "riza", "clothes", "healthy", "tableware", "intelligence", "xihu", "baby", "xiangbao", "diet", "parts", "travel"];
let typeBanner = require('./mock/typeBanner.json');
let mainData = require('./mock/main.json');

// 首页数据
app.get('/main', (req, res) => {
  res.json(mainData)
});

//　分类数据
app.get('/goodscategory', (req, res) => {
  let result = {};
  result.banner =  typeBanner;
  dataNameArr.forEach((item) => {
    result[item] = require(`./mock/${item}.json`).slice(1);
  });
  res.json(result);
});

// 品味数据
app.post('/savour',(req,res) => {

});

/*
* {
  "code": 0,
  "message": "ok",
  "result": {
    "code": 0,
    "message": "",
    "description": "",
    "data": {
    }
  }
}*/