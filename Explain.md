## 项目页面
首页：main
分类：goodscategory
品味：savour
{
  article_id, id
  url,跳转连接
  display_mode, 暂时没用
  from, 来源
  title, 标题
  subtitle, 不标题
  pic_url, 图片路径
  pic_urls, 补充图片路径
}
购物车：cart
个人：usercenter
详情：detail

项目初始化   $ yarn install;
服务server  端口 localhost:9999
项目启用     端口 localhost:3000

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


首页数据请求
'/main'
分页数据请求
'/goodscategory'
品味页面请求
'/savour'


首页轮播图 sliders:[]
活动导航: activity: [{
  aId : 分类id
  url: 图片地址,
  title: 标题,
  describe: 描述,
  link: 跳转地址
  }
}]
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

