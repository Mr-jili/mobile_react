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

/*-------------------------------*/

// 首页接口 首屏数据
app.post('/init', (req, res) => {
  let sliders = require('./mock/sliders.json');
  let activity = require('./mock/activity.json');
  let recommend = require('./mock/recommend.json');
  let crowdfunding = require('./mock/crowdfunding.json');
  res.json({sliders, activity, recommend, crowdfunding});
});

//　首页 滚动加载 传一个id给我，然后返回对应的数据
app.post('/main', (req, res) => {
  let data = require(`./mock/${id}.json`);
  if (id === 'allData') {
    data = data.slice(0, 10);
  } else {
    data = data.slice(0, 5);
  }
  res.json(data);
});

/*-------------------------------*/

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
    result.data = require(`./mock/lev_${id}.json`).slice(1);
  }
  res.json(result);
});

// 点击商品||banner图 跳转请求
app.post('/commodity/:gid', (req, res) => {
  let {gid} = req.params;
  // 根据
});


/*-------------------------------*/

// 品味数据接口 post请求 需要参数offset,limit
app.post('/savour', (req, res) => {
  let {offset, limit} = req.body;
  let savour = require('./mock/savour.json') || [];
  let hasMore = offset < savour.length;
  savour = savour.slice(offset, limit + offset);
  res.json({hasMore, savour})
});

app.post('/content', (req, res) => {
  //aid: 所属种类id article_id : 内容id
  let {gid, article_id} = req.body;

  res.json({});
});

/*-------------------------------*/

let crypto = require('crypto'); // 加密处理插件
let userList = []; // 所有用户数据
let userID = '';

fs.readFile('./mock/userInfo.json', 'utf-8', (err, data) => {
  if (err) return [];
  userList = JSON.parse(data);
});

/*-------------------------------*/

// 获取商品详情
app.post('/detail/:gid', (req, res) => {
  let {gid} = req.params;
  let backData = new Promise((resolve, reject) => {
    fs.readFile('./mock/allData.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    })
  });

  backData.then((result) => {
    let temp = result.find((item) => item.gid === gid);
    if (temp) {
      res.json(temp);
    }
    else {
      res.json({"msg": "没找到符合条件的商品！", "err": 1})
    }
  });
});

// 获取评价
app.post('/evaluate/:gid', (req, res) => {
  let {gid} = req.params;
  let backData = new Promise((resolve, reject) => {
    fs.readFile('./mock/userEvaluate.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
  backData.then((result) => {
    let temp = result.find((item) => item.gid === gid);
    if (temp) {
      res.json(temp.eva);
    }
    else {
      res.json([])
    }
  }).catch((err) => {
    res.json({"msg": "对不起！程序挂掉了！", "err": 1})
  })
});

// 获取和修改  商品收藏状态
app.get('/collection/:gid', (req, res) => {
  if (!req.session.user) {
    res.json({user: null, msg: "请先登录", success: '', err: 1});
    return;
  }
  let {gid} = req.params;
  let {type} = req.query;
  let backData = new Promise((resolve, reject) => {
    fs.readFile('./mock/userCollection.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data))
    })
  });
  backData.then((result) => {
    let curUser = result.find(item => item.userid === req.session.user);
    let eva = curUser.coll.find(item => item === gid);
    if (!type) {
      if (eva) {
        res.json({"collState": true});
      }
      else {
        res.json({"collState": false})
      }
    } else {
      if (eva) {
        curUser.coll = curUser.coll.filter(item => item !== gid);
        fs.writeFile('./mock/userCollection.json', JSON.stringify(result), (err) => {
          if (err) return res.json({"msg": "修改失败"});
          res.json({"collState": false});
        });
      }
      else {
        curUser.coll.push(gid);
        fs.writeFile('./mock/userCollection.json', JSON.stringify(result), (err) => {
          if (err) return res.json({"msg": "修改失败"});
          res.json({"collState": true})
        });
      }
    }
  })
});

// 获取购物车数量
app.get('/collLength', (req, res) => {
  let backData = new Promise((resolve, reject) => {
    fs.readFile('./mock/userCart.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
  if (!req.session.user) {
    res.json({collLength: 0, "err": 0});
    return;
  }
  backData.then((result) => {
    let curCart = result.find(item => item.userId === req.session.user);
    let collLength = curCart.cart.reduce((prev, next) => {
      return prev + next.number;
    }, 0);
    res.json({collLength, "err": 0});
  });
});

// 添加新商品到购物车 返回购物车商品数量
app.get("/cart", (req, res) => {
  if (!req.session.user) {
    res.json({user: null, msg: "请先登录", success: '', err: 1});
    return;
  }
  let {gid, number} = req.query;
  let addProduct = new Promise((resolve, reject) => {
    fs.readFile('./mock/allData.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });

  // 如果传入的商品id查找不到，应该返回添加失败

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
      let proIndex = 0;
      if (item.userId === req.session.user) {
        let flag = item.cart.some((item, index) => {
          proIndex = index;
          return item.gid === gid;
        });
        if (flag) {
          item.cart[proIndex].number += parseInt(number);
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
      let curCart = result.find(item => item.userId === req.session.user);
      let collLength = curCart.cart.reduce((prev, next) => {
        return prev + next.number;
      }, 0);
      res.json({"msg": "添加成功！", collLength, "err": 0})
    });
  });
});

/*-------------------------------*/

// 获取用户购物车数据
app.post('/cart', (req, res) => {
  if (!req.session.user) {
    res.json({user: null, msg: "请先登录", success: '', err: 1});
    return;
  }
  fs.readFile('./mock/userCart.json', 'utf-8', (err, data) => {
    if (err) return console.log('读取失败!');
    let userCart = JSON.parse(data);
    let findCart = userCart.find((item) => item.userId === req.session.user) || [];
    let recommend = require('./mock/allData.json');
    recommend = recommend.slice(7, 15);
    res.json({"userCart": findCart.cart, recommend});
  });
});

// 修改用户购物车数据
app.put('/cart', (req, res) => {
  if (!req.session.user) {
    res.json({user: null, msg: "请先登录", success: '', err: 1});
    return;
  }
  let {gid, number} = req.query;
  fs.readFile('./mock/userCart.json', 'utf-8', (err, data) => {
    if (err) return console.log('读取失败!');
    let userCart = JSON.parse(data);
    let curCartIndex, curProIndex;
    let findCart = userCart.find((item, index) => {
      curCartIndex = index;
      return item.userId === req.session.user;//userId
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

// 移除选中商品
app.post('/cart/delete', (req, res) => {
  if (!req.session.user) {
    res.json({user: null, msg: "请先登录", success: '', err: 1});
    return;
  }
  let {gid} = req.body;
  let progress = new Promise((resolve, reject) => {
    fs.readFile('./mock/userCart.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
  progress.then((result) => {
    let user = result.find((item) => item.userId === req.session.user);
    let ex = user.cart.find((item) => {
      return gid.some(gitItem => item.gid === gitItem);
    });

    if (!ex) {
      res.json({"msg": "没找到有效商品", err: 1});
      return;
    }

    for (let i = 0; i < gid.length; i++) {
      let temp = gid[i];
      user.cart = user.cart.filter((item) => {
        return item.gid !== temp;
      });
    }

    fs.writeFile('./mock/userCart.json', JSON.stringify(result), 'utf-8', (err) => {
      if (err) return res.json({"msg": "移除失败", err: 0});
      res.json({"msg": "移除成功", err: 0});
    })
  })
});

// 修改单个商品选中状态
app.get('/cart/singlestate', (req, res) => {
  if (!req.session.user) {
    res.json({user: null, msg: "请先登录", success: '', err: 1});
    return;
  }
  let {gid, state} = req.query;
  let backData = new Promise((resolve, reject) => {
    fs.readFile('./mock/userCart.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    })
  });
  backData.then((result) => {
    let userCart = result.find(item => item.userId === req.session.user);
    let eva = userCart.cart.find(item => item.gid === gid);
    eva.isSelected = JSON.parse(state);

    fs.writeFile('./mock/userCart.json', JSON.stringify(result), 'utf-8', (err) => {
      if (err) return console.log('修改失败');
      res.json({"msg": "ok", "err": 0});
    })
  })
});

// 修改分组商品选中状态
app.get('/cart/partstate',(req,res) => {
  if (!req.session.user) {
    res.json({user: null, msg: "请先登录", success: '', err: 1});
    return;
  }
  let {from,state} = req.query;
  let backData = new Promise((resolve, reject) => {
    fs.readFile('./mock/userCart.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    })
  });

  backData.then((result) => {
    let userCart = result.find(item => item.userId === req.session.user);
    for (let i = 0; i < userCart.cart.length; i++) {
      let temp = userCart.cart[i];
      from = from.replace(/['"]/g,'');
      if(temp.from === from){
        temp.isSelected = JSON.parse(state);
      }
    }

    fs.writeFile('./mock/userCart.json', JSON.stringify(result), 'utf-8', (err) => {
      if (err) return console.log('修改失败');
      res.json({"msg": "ok", "err": 0});
    })
  })
});

// 修改所有商品选中状态
app.get('/cart/allstate', (req, res) => {
  if (!req.session.user) {
    res.json({user: null, msg: "请先登录", success: '', err: 1});
    return;
  }
  let {state} = req.query;
  let backData = new Promise((resolve, reject) => {
    fs.readFile('./mock/userCart.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    })
  });
  backData.then((result) => {
    let userCart = result.find(item => item.userId === req.session.user);
    userCart.cart.forEach((item) => {
      item.isSelected = JSON.parse(state);
    });

    fs.writeFile('./mock/userCart.json', JSON.stringify(result), 'utf-8', (err) => {
      if (err) return console.log('修改失败');
      res.json({"msg": "ok", "err": 0});
    })
  })
});

/*-------------------------------*/

// 获取热门搜索和历史搜索
app.get('/search', (req, res) => {
  let hotP = new Promise((resolve, reject) => {
    fs.readFile('./mock/hotSearch.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    })
  });
  let historyP = new Promise((resolve, reject) => {
    fs.readFile('./mock/historySearch.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    })
  });
  hotP.then((hot) => {
    let obj = {};
    obj["hot"] = hot;
    historyP.then((history) => {
      obj["history"] = history;
      res.json(obj);
    })
  })
});

// 搜索接口
app.post('/search', (req, res) => {
  let {info} = req.body;
  let dataSource = new Promise((resolve, reject) => {
    fs.readFile('./mock/allData.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    })
  });
  dataSource.then((result) => {
    let searchResult = [];
    result.forEach((item) => {
      if (item.title.includes(info) || item.describe.includes(info)) {
        let temp = {
          "gid": item.gid,
          "title": item.title
        };
        searchResult.push(temp);
      }
    });
    res.json(searchResult)
  });
});

// 清空历史搜索
app.delete('/search', (req, res) => {
  fs.writeFile('./mock/historySearch.json', '[]', 'utf-8', (err) => {
    if (err) {
      res.json({"msg": "清空失败!", err: 1});
      return;
    }
    res.json({"msg": "清空成功!", err: 0})
  })
});

/*-------------------------------*/

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

let tempCode = '!@#$%^&*()_+';
// 登录接口
app.post('/login', (req, res) => {
  let {username, password, mobilecode} = req.body;
  let _password;
  if (password) {
    _password = crypto.createHash('md5').update(password).digest('base64');
  }
  let user = userList.find((item) => {
    return (item.mobile === username) && (password ? (item.password === _password) : (tempCode === mobilecode));
  });
  if (user) {
    req.session.user = user.userid;
    userID = user.userid;
    res.json({user: user.userid, msg: '', success: 'ok', err: 0});
    tempCode = '!@#$%^&*()_+';
  } else {
    res.json({user: null, msg: '用户名或密码不正确', success: 'no', err: 1});
  }
});

// 验证码获取
app.get('/phonecode', (req, res) => {
  let {mobile} = req.query;
  let user = userList.find((item) => item.mobile === mobile);
  if (user) {
    res.json({"msg": "该手机号已被注册！", "err": 1});
    return;
  }
  let randomCode = '';
  for (let i = 0; i < 6; i++) {
    randomCode += Math.round(Math.random() * 9);
  }
  tempCode = randomCode;
  res.json({"mobileCode": randomCode, "err": 0});
});

// 获取个人信息
app.post('/userInfo', (req, res) => {
  if (!req.session.user) {
    res.json({"msg": "用户错误！", "err": 1});
    return;
  }
  fs.readFile('./mock/userInfo.json', 'utf-8', (err, data) => {
    if (err) return console.log('读取失败');
    let userList = JSON.parse(data);
    let userInfo = userList.find((item) => item.userid === req.session.user);
    let tempInfo = {};
    tempInfo.userid = userInfo.userid;
    tempInfo.userimg = userInfo.userimg;
    tempInfo.username = userInfo.username;
    tempInfo.bill = userInfo.bill;
    tempInfo.assets = userInfo.assets;
    tempInfo.collection = userInfo.collection;
    tempInfo.address = userInfo.address;
    tempInfo.news = userInfo.news;
    tempInfo.help = userInfo.help;
    res.json(tempInfo);
  });
});

/*-------------------------------*/

// 验证登录状态
app.get('/validate', (req, res) => {
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