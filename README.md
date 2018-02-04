
##项目 - 模仿某电商

####技术一般，水平有限，有很多的不足，请多指教。

项目初始化   $ yarn install;
服务server  端口 localhost:9999
项目启用     端口 localhost:3000

###后台文件是 server.js

###用户数据文件
userInfo.json 注册用户信息（主表）
userBill.json 用户订单表 （关联表）
userCart.json 用户购物车表 （关联表）
userCollection.json 用户搜藏表 （关联表）

###商品数据文件
allData.json           商品的所有数据
userEvaluate.json      用户评价表（商品关联表）

### 数据tree
resource  服务器端代码（静态文件）
  ├─images           icon图片文件夹
  ├─mock             json数据文件夹
  ├─pageImg          界面截图
  └─server.js        服务器

src  客户端代码
  ├─api              客户端接口
  ├─common           公共文件
  ├─components       公共组件
  │  ├─Header
  │  ├─Loading
  │  └─Tab
  ├─containers       页面组件
  │  ├─Cart          购物车（删除有一点bug）
  │  │  ├─common
  │  │  └─Split
  │  ├─Collection    我的收藏
  │  ├─Detaill       商品详情
  │  ├─Goodscategory 商品分类
  │  ├─Main          首页
  │  │  ├─common
  │  │  │  ├─CWJ
  │  │  │  ├─OneRow
  │  │  │  ├─OnlyRow
  │  │  │  ├─ThreeRow
  │  │  │  ├─Title
  │  │  │  ├─TRow
  │  │  │  └─TwoRow
  │  │  ├─MainBrand
  │  │  ├─MainCrowdfunding
  │  │  ├─MainFooter
  │  │  ├─MainHeader
  │  │  ├─MainHot
  │  │  ├─MainLink
  │  │  ├─MainMore
  │  │  ├─MainPhone
  │  │  ├─MainRecommend
  │  │  ├─MainSlider
  │  │  ├─NewGoods
  │  │  └─TimeBuy
  │  ├─OrderList     我的订单
  │  ├─Pay           支付
  │  ├─PersonalData  修改个人信息
  │  ├─Savour        品味
  │  ├─Search        搜索
  │  ├─ServiceLogin  登录
  │  ├─ServiceRegister   注册
  │  └─UserCenter        个人中心
  ├─images               图片文件夹
  └─store                redux 文件
      ├─actions
      │  ├─cart
      │  ├─detail
      │  ├─home
      │  ├─personaldata
      │  └─savour
      └─reducers
          └─detail


### 【友情提示】 在项目中 redux 不要滥用 ； 有关数据的详细信息可以看Exlpain.md （记录了一些项目中用到的参数）