## 项目页面

项目初始化   $ yarn install;
服务server  端口 localhost:9999
项目启用     端口 localhost:3000


首页：main
分类：goodscategory
品味：savour
购物车：cart
个人：usercenter
产品详情：detail
宣传详情：content
搜索: search

数据属性名
有品推荐 recommend G0001
居家 family G0002
家电 jiadian G0003
手机 phone G0004
影音 video G0005
日杂 riza G0006
服饰 clothes G0007
健康 healthy G0008
餐厨 tableware G0009
智能 intelligence G0010
洗护 xihu G0011
箱包 xiangbao G0012
婴童 baby G0013
饮食 diet G0014
配件 parts G0015
出行 travel G0016
品牌 brand G0017
小米众筹 crowdfunding G0018
热门 hotItems G0019
新品 newItems G0020
限时购 limit G0021
更多商品 allData G9999



首页初始化
'/init'
首页数据请求
'/main' {id}
分页数据请求
'/goodscategory' {id}
品味页面请求
'/savour' {"offset":0,"limit":5}
购物车请求
'/cart'
注册 post
'/register'  {"username":"","password":""}
登录 post
'/login' {"username":"","password":""}
搜索 post
'/search' {"search":""}

分工
姬利 品味
陈万军 首页
王宇 分页
王俊 购物车
李义超 个人中心


用户数据
{
    "userid": "U10001",          --用户id
    "userimg": "",               --用户邮箱
    "username": "yangbo",        --用户名
    "password": "4QrcOUm6Wau+VuBX8g+IPg==", --用户密码
    "mobile": "15134578149",     --用户手机
    "bill": {                    --我的订单
      "all": [],                 --全部订单
      "pendingPayment": [],      --待付款
      "pendingReceived": [],     --待收货
      "pendingEvaluate":[],      --待评价
      "refund": [],              --退款订单
      "received": []             --已收货
    },
    "cart": [                    --购物车
      {
        "from": "小米/米家自营",
        "minfreight": 0,
        "isSelected": true,
        "pic_url": "http://i1.mifile.cn/a1/pms_1477916442.08799062.jpg",
        "title": "米家空气净化器Pro 白色",
        "price": 1499,
        "number": 1
      }
    ],
    "assets": {},                --我的资产
    "collection": {},            --我的收藏
    "address": {},               --地址管理
    "news": {},                  --消息中心
    "help": {}                   --帮助和反馈
  }