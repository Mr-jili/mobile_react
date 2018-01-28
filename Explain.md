## 项目页面
首页：main
分类：goodscategory
品味：savour
购物车：cart
个人：usercenter
详情：detail

项目初始化   $ yarn install;
服务server  端口 localhost:9999
项目启用     端口 localhost:3000


首页轮播图 sliders:[]
api : /sliders

活动导航: activity: [{
  aId : 分类id
  url: 图片地址,
  title: 标题,
  describe: 描述,
  link: 跳转地址
  }
}]
api : /activity

分类 {
  "recommend" : [
    {
      aId : 商品id,
      title: 标题,
      describe: 描述,
      url: 图片地址,
      link: 跳转路径
    }
  ], // 有品推荐
  "crowdfunding": [
    {
      aId : 商品id，
      title: 标题，
      describe: 描述,
      url: 图片地址,
      link: 跳转路径,
      price: 价格,
      ratedPerson: 额定人数,
      actualPerson:实际人数，
      ratio: 比率 actualPerson/ratedPerson *100%
    }
  ], //小米众筹
  "hot":[
    {
      gId : 商品id,
      title: 标题,
      describe: 描述,
      url: 图片地址,
      link: 跳转路径,
      price: 价格
    }
  ], // 热门商品
  "new":[
    {
      aId : 商品id,
      title: 标题,
      describe: 描述,
      url: 图片地址,
      link: 跳转路径,
      price: 价格
    }
  ], // 新品
  "limit":[
    {
      aId : 商品id,
      title: 标题,
      describe: 描述,
      url: 图片地址,
      link: 跳转路径
      price: 价格,
      ratednum: 产品总数,
      soldnum: 已售数量,
      ratio: 比率 soldnum/ratednum*100%
    }
  ], // 限时购
  "brand": [
    {
      aId : 商品id,
      title: 标题,
      describe: 描述,
      url: 图片地址,
      link: 跳转路径
    }
  ], // 品牌
  "phone":[
    {
       aId : 商品id,
       title: 标题,
       describe: 描述,
       url: 图片地址,
       link: 跳转路径,
       mark: 是否有活动
    }
  ] // 手机
  "home" :
  ... 后面的格式都跟随手机数据格式
}

