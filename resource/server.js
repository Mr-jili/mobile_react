let express = require('express');
let app = express();
app.listen(9999);
let fs = require('fs');
let path = require('path');
let session = require('express-session');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('resource'));
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
  let tempId = req.query.id || req.body.id;
  switch (tempId) {
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
    case 'G9999':
      id = 'allData';
      break;
  }
  next();
});

// 首页接口 首屏数据
app.post('/init', (req, res) => {
  let sliders = require('./mock/sliders.json');
  let activity = require('./mock/activity.json');
  let recommend = require('./mock/recommend.json');
  let crowdfunding = require('./mock/crowdfunding.json');
  res.json({sliders, activity, recommend, crowdfunding});
});

//　滚动加载 传一个id给我，然后返回对应的数据
app.post('/main', (req, res) => {
  let data = require(`./mock/${id}.json`);
  if (id === 'allData') {
    data = data.slice(0, 11);
  }
  res.json(data);
});

//　分类数据接口
app.post('/goodscategory', (req, res) => {
  let result = {};
  result.listLink = require('./mock/listLink.json');
  result.banner = require('./mock/typeBanner.json');
  if (!id) {
    result.data = require('./mock/lev_recommend.json');
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

// 获取指定类型分类
app.get('/goodscategory', (req, res) => {
  let result = {};
  if (!id) {
    result.data = require('./mock/lev_recommend.json');
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

// 点击商品||banner图 跳转请求
app.post('/default/:id', (req, res) => {
  let {aid, gid} = req.body;
  // 根据

});

// 品味数据接口 post请求 需要参数offset,limit
app.post('/savour', (req, res) => {
  let {offset, limit} = req.body;
  let savour = require('./mock/savour.json');
  savour = savour.slice(offset, limit + offset);
  res.json(savour)
});

app.post('/content', (req, res) => {
  //aid: 所属种类id article_id : 内容id
  let {gid, article_id} = req.body;

  res.json({});
});

let crypto = require('crypto'); // 加密处理插件
let userList = []; // 所有用户数据
let userID = '';

fs.readFile('./mock/userInfo.json', 'utf-8', (err, data) => {
  if (err) return [];
  userList = JSON.parse(data);
});

// 获取用户购物车数据
app.post('/cart', (req, res) => {
  if (!userID) {
    res.json({user: null, msg: "请先登录", success: '', err: 1});
    return;
  }
  // let {username} = req.body;
  // let user = userList.find((item) => {
  //   return item.mobile === username || item.username === username;
  // }) || {};
  // let userId = user.userid; // 转换出用户的ID
  fs.readFile('./mock/userCart.json', 'utf-8', (err, data) => {
    if (err) return console.log('读取失败!');
    let userCart = JSON.parse(data);
    let findCart = userCart.find((item) => item.userId === userID) || []; //userId
    let recommend = require('./mock/allData.json');
    recommend = recommend.slice(7, 15);
    res.json({"userCart": findCart.cart, recommend});
  });
});

// 修改用户购物车数据
app.put('/cart', (req, res) => {
  let {gid, number} = req.query;
  // let keys = Object.keys(req.query);
  if (!userID) {
    res.json({user: null, msg: "请先登录", success: '', err: 1});
    return;
  }
  fs.readFile('./mock/userCart.json', 'utf-8', (err, data) => {
    if (err) return console.log('读取失败!');
    let userCart = JSON.parse(data);
    let curCartIndex, curProIndex;
    let findCart = userCart.find((item, index) => {
      curCartIndex = index;
      return item.userId === userID;//userId
    });
    let curProduct = findCart['cart'].find((item, index) => {
      curProIndex = index;
      return item.gid === gid;
    });
    if (!curProduct) {
      res.json({"userCart": findCart.cart});
      return;
    }
    curProduct.number = parseInt(number);
    fs.writeFile('./mock/userCart.json', JSON.stringify(userCart), 'utf-8', (err) => {
      if (err) return console.log('写入失败!');
    });
    res.json({"userCart": findCart.cart});
  });
});

// 添加新商品到购物车
app.get("/cart", (req, res) => {
  if (!userID) {
    res.json({user: null, msg: "请先登录", success: '', err: 1});
    return;
  }
  let {gid, number} = req.query;
  // let allData = [];
  let addProduct = new Promise((resolve, reject) => {
    fs.readFile('./mock/allData.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });

  addProduct.then((result) => {
    let allData = JSON.parse(result);
    let commodity = allData.find((item) => {
      return item.gid === gid;
    });
    commodity.number = parseInt(number) || 1;
    return commodity;
  }).then((result) => {
    let userCart = JSON.parse(fs.readFileSync('./mock/userCart.json', 'utf-8'));
    userCart.forEach((item) => {
      let proIndxe = 0;
      if (item.userId === userID) {
        let flag = item.cart.some((item, index) => {
          proIndxe = index;
          return item.gid === gid;
        });
        if (flag) {
          item.cart[proIndxe].number += parseInt(number);
        }
        else {
          item.cart.push(result);
        }
      }
    });
    return userCart;
  }).then((result) => {
    fs.writeFile('./mock/userCart.json', JSON.stringify(result), 'utf-8', (err) => {
      if (err) return res.json({"msg": "添加失败！", err: 1});
      res.json({"msg": "添加成功！", err: 0})
    });
  });
  // fs.readFile('./mock/allData.json', 'utf-8', (err, data) => {
  //   if (err) return;
  //   allData = JSON.parse(data);
  //   let commodity = allData.find((item) => {
  //     return item.gid === gid;
  //   });
  //   commodity.number = parseInt(number);
  //
  //   let userCart = [];
  //   fs.readFile('./mock/userCart.json', 'utf-8', (err, data) => {
  //     if (err) return;
  //     userCart = JSON.parse(data);
  //     userCart.forEach((item) => {
  //       if (item.userId === userID) {
  //         item.cart.push(commodity);
  //       }
  //     });
  //     fs.writeFile('./mock/userCart.json', JSON.stringify(userCart), 'utf-8', (err) => {
  //       if (err) return console.log('写入失败');
  //     });
  //   });
  // });
});

// 移除选中商品
app.delete('/cart', (req, res) => {
  if (!userID) {
    res.json({user: null, msg: "请先登录", success: '', err: 1});
    return;
  }
  let {gid} = req.query;
  let progress = new Promise((resolve, reject) => {
    fs.readFile('./mock/userCart.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
  progress.then((result) => {
    let userCart = JSON.parse(result);
    let user = userCart.find((item) => item.userId === userID);
    user.cart = user.cart.filter((item) => item.gid !== gid);
    return userCart;
  }).then((result) => {
    fs.writeFile('./mock/userCart.json', JSON.stringify(result), 'utf-8', (err) => {
      if (err) return res.json({"msg": "移除失败", err: 0});
      res.json({"msg": "移除成功", err: 0});
    })
  });

  // fs.readFile('./mock/userChart.json', 'utf-8', (err, data) => {
  //   if (err) return console.log('读取失败');
  //   let userCart = JSON.parse(data);
  //
  //   let user = userCart.find((item) => item.userId === userID);
  //   user = user.cart.filter((item) => item.gid !== gid);
  // });
  //
  // res.json({"msg": "移除成功", err: 0});
});

// 注册接口
app.post('/register', (req, res) => {
  let {username, password} = req.body;
  let user = userList.find((item) => {
    return item.mobile === username || item.username === username;
  });
  if (user) {
    res.json({user: null, msg: "用户已存在!!!", success: '', err: 1})
  } else {
    password = crypto.createHash('md5').update(password).digest('base64');
    let temp = parseInt(userList[userList.length - 1].userid.slice(1));
    userList.forEach((item) => {
      let tempItem = parseInt(item.userid.slice(1));
      if (tempItem > temp) {
        temp = tempItem;
      }
    });
    let userInfo = {
      "userid": `U${temp + 1}`,
      "userimg": "",
      "username": 'E' + Math.random().toFixed(7) * 10000000,
      "password": password,
      "email": "",
      "mobile": username,
      "bill": {
        "all": [],
        "pendingPayment": [],
        "pendingReceived": [],
        "pendingEvaluate": [],
        "refund": [],
        "received": []
      },
      "cart": [],
      "assets": {},
      "collection": {},
      "address": {},
      "news": {},
      "help": {}
    };
    userList.push(userInfo);
    fs.writeFile('./mock/userInfo.json', JSON.stringify(userList), 'utf-8', (err) => {
      if (err) return console.log('error')
    });
    res.json({user: username, msg: "", success: "ok", err: 0});
  }
});

// 登录接口
app.post('/login', (req, res) => {
  let {username, password} = req.body;
  let _password = crypto.createHash('md5').update(password).digest('base64');
  let user = userList.find((item) => {
    return (item.mobile === username || item.username === username) && (item.password === _password);
  });

  if (user) {
    req.session.user = username;
    userID = user.userid;
    res.json({user: username, msg: '', success: 'ok', err: 0});
  } else {
    res.json({user: null, msg: '用户名或密码不正确', success: 'no', err: 1});
  }
});

// 验证登录状态
app.get('/validate', function (req, res) {
  res.json({user: req.session.user, msg: "", success: '', err: 0})
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