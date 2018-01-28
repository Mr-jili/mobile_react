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
let id = '';
app.use((req, res, next) => {
  switch (req.query.id) {
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
    case 'G0018':
      id = 'crowdfunding';
      break;
    case 'G0019':
      id = 'hotItems';
      break;
    case 'G0020':
      id = 'newItems';
      break;
    case 'G0021':
      id = 'limit';
      break;
  }
  next();
});

// 首页首屏数据
app.get('/init', (req, res) => {
  let sliders = require('./mock/sliders.json');
  let activity = require('./mock/activity.json');
  let recommend = require('./mock/recommend.json');
  let crowdfunding = require('./mock/crowdfunding.json');
  res.json({sliders, activity, recommend, crowdfunding});
});
//　滚动加载 传一个id给我，然后返回对应的数据
app.get('/main', (req, res) => {
  let data = require(`./mock/${id}.json`);
  res.json(data)
});

//　分类数据
app.get('/goodscategory', (req, res) => {
  let result = {};
  result.listLink = require('./mock/listLink.json');
  result.banner = require('./mock/typeBanner.json');
  if (!id) {
    result.data = require('./mock/lev_baby.json');
  }
  else if (id === 'phone') {
    result.data = require(`./mock/${id}.json`).slice(1);
  }
  else if (id === 'brand') {
    result.data = require(`./mock/${id}.json`);
  }
  else {
    result.data = require(`./mock/lev_${id}.json`);
  }
  res.json(result);
});

// 品味数据 post请求 需要参数offset,limit
app.post('/savour', (req, res) => {
  let {offset, limit} = req.body;
  let savour = require('./mock/savour.json');
  savour = savour.slice(offset, limit + offset);
  res.json(savour)
});

app.get('/savour', (req, res) => {
  //aid: 所属种类id article_id : 内容id
  let {gid, article_id} = req.query;

  res.json({});
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