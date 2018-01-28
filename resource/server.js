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

// 首页首屏数据
app.get('/init',(req,res) => {
  let sliders = require('./mock/sliders.json');
  let activity = require('./mock/activity.json');
  let recommend =  require('./mock/recommend.json');
  let crowdfunding =  require('./mock/crowdfunding.json');

  res.json({sliders,activity,recommend,crowdfunding});
});
//　滚动加载 传一个id给我，然后返回对应的数据
app.get('/main', (req, res) => {
  let {id} = req.query;
  switch (id) {
    case 'G0001':
      id = 'recommend';
      break;
    case 'G0002':
      id = 'family';
      break;
    case 'G0003':
      id = 'jiadian';
      break;
    case 'G0004':
      id = 'phone';
      break;
    case 'G0005':
      id = 'video';
      break;
    case 'G0006':
      id = 'riza';
      break;
    case 'G0007':
      id = 'clothes';
      break;
    case 'G0008':
      id = 'healthy';
      break;
    case 'G0009':
      id = 'tableware';
      break;
    case 'G0010':
      id = 'intelligence';
      break;
    case 'G0011':
      id = 'xihu';
      break;
    case 'G0012':
      id = 'xiangbao';
      break;
    case 'G0013':
      id = 'baby';
      break;
    case 'G0014':
      id = 'diet';
      break;
    case 'G0015':
      id = 'parts';
      break;
    case 'G0016':
      id = 'travel';
      break;
    case 'G0017':
      id = 'brand';
      break;
  }
  let data = require(`./mock/${id}.json`);
  res.json(data)
});

//　分类数据
app.get('/goodscategory', (req, res) => {


  res.json({"msg": "ok"});
});

// 品味数据
app.post('/savour', (req, res) => {

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