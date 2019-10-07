// pages/home/home.js
import { getMultiData, getGoodsData } from '../../service/home.js'

const type = ['pop', 'new', 'sell']
const TOP_DISTANCE = 1000

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBackTop: false,
    isFixed: false,
    banners: [
      {
        image: 'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg'
      },
      {
        image: 'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg'
      },
      {
        image: 'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg'
      }
    ],
    recommend: [
      {
        title: '女装',
        image: 'https://s10.mogucdn.com/mlcdn/c45406/190903_71ih092j1k9chh2bjdghh2jl054a4_150x150.jpg_640x640.v1cAC.40.webp'
      },
      {
        title: '上衣',
        image: 'https://s10.mogucdn.com/mlcdn/c45406/190903_0572el03440fllf207k3g5kfe6g35_150x150.jpg_640x640.v1cAC.40.webp'
      },
      {
        title: '包包',
        image: 'https://s10.mogucdn.com/mlcdn/c45406/190627_11fi4352el0f0ea614ekf48cicgch_150x150.jpg_640x640.v1cAC.40.webp'
      },
      {
        title: '配饰',
        image: 'https://s10.mogucdn.com/mlcdn/c45406/190627_6il8cab37b6f2k66ebh0lj90027f6_150x150.jpg_640x640.v1cAC.40.webp'
      }
    ],
    tabcontrol: ['流行','新款','热门'],
    goods: {
      'pop': {
        page: 0,
        list: [
          { 
            title: '肉色光腿神器秋冬季加绒加厚美腿丝袜防勾丝保暖逼真假透肉连裤袜',
            price: 39.9,
            collect: 58,
            image: 'https://s2.mogucdn.com/mlcdn/17f85e/190904_25lc55h06a30ifhkg9lg8h9a1cdke_640x960.jpg_440x587.v1cAC.40.webp'
          },
          {
            title: '【买一件送一件】无钢圈无痕文胸聚拢调整收副乳内衣舒适性感胸罩',
            price: 39.9,
            collect: 1032,
            image: 'https://s11.mogucdn.com/mlcdn/17f85e/181004_09bl7h5b6l3fh944b389l9ibd84j0_640x960.jpg_440x587.v1cAC.40.webp'
          },
          {
            title: '秋季圆点印花连衣裙2019新款初秋气质两件套春秋风衣套装裙',
            price: 208,
            collect: 489,
            image: 'https://s2.mogucdn.com/mlcdn/c45406/190913_313l86225g5ldg9c6605hgjbj8eh2_640x960.jpg_440x587.v1cAC.40.webp'
          },
          {
            title: '肉色光腿神器秋冬季加绒加厚美腿丝袜防勾丝保暖逼真假透肉连裤袜',
            price: 39.9,
            collect: 58,
            image: 'https://s2.mogucdn.com/mlcdn/17f85e/190904_25lc55h06a30ifhkg9lg8h9a1cdke_640x960.jpg_440x587.v1cAC.40.webp'
          },
          {
            title: '【买一件送一件】无钢圈无痕文胸聚拢调整收副乳内衣舒适性感胸罩',
            price: 39.9,
            collect: 1032,
            image: 'https://s11.mogucdn.com/mlcdn/17f85e/181004_09bl7h5b6l3fh944b389l9ibd84j0_640x960.jpg_440x587.v1cAC.40.webp'
          },
          {
            title: '秋季圆点印花连衣裙2019新款初秋气质两件套春秋风衣套装裙',
            price: 208,
            collect: 489,
            image: 'https://s2.mogucdn.com/mlcdn/c45406/190913_313l86225g5ldg9c6605hgjbj8eh2_640x960.jpg_440x587.v1cAC.40.webp'
          },
          {
            title: '肉色光腿神器秋冬季加绒加厚美腿丝袜防勾丝保暖逼真假透肉连裤袜',
            price: 39.9,
            collect: 58,
            image: 'https://s2.mogucdn.com/mlcdn/17f85e/190904_25lc55h06a30ifhkg9lg8h9a1cdke_640x960.jpg_440x587.v1cAC.40.webp'
          },
          {
            title: '【买一件送一件】无钢圈无痕文胸聚拢调整收副乳内衣舒适性感胸罩',
            price: 39.9,
            collect: 1032,
            image: 'https://s11.mogucdn.com/mlcdn/17f85e/181004_09bl7h5b6l3fh944b389l9ibd84j0_640x960.jpg_440x587.v1cAC.40.webp'
          },
          {
            title: '秋季圆点印花连衣裙2019新款初秋气质两件套春秋风衣套装裙',
            price: 208,
            collect: 489,
            image: 'https://s2.mogucdn.com/mlcdn/c45406/190913_313l86225g5ldg9c6605hgjbj8eh2_640x960.jpg_440x587.v1cAC.40.webp'
          }
        ]
      },
      'new': {
        page: 0,
        list: [
          {
            title: '网红2019秋冬韩版百搭大翻领机车羊羔毛皮毛一体短款外套女潮',
            price: 269,
            collect: 0,
            image: 'https://s2.mogucdn.com/mlcdn/c45406/191007_0hl2539a0j5bhll0b2h5ccb39i12j_640x960.jpg_640x854.v1cAC.40.webp'
          },
          {
            title: '秋冬韩版拼接撞色刺绣字母羊羔毛外套女百搭休闲腰带牛仔裤两件套',
            price: 34,
            collect: 12,
            image: 'https://s17.mogucdn.com/mlcdn/c45406/191007_3e88fjb3jehkd1c134917egf1l3h0_3222x4999.jpg_640x854.v1cAC.40.webp'
          },
          {
            title: 'EGGKA连帽卫衣女宽松慵懒风帽衫2019年秋冬长袖开衫拉链',
            price: 234,
            collect: 2,
            image: 'https://s18.mogucdn.com/mlcdn/c45406/191007_35ab4jhj0g3e84i8f9a518k80ef14_640x960.jpg_640x854.v1cAC.40.webp'
          }
        ]
      },
      'sell': {
        page: 0,
        list: [
          {
            title: '【安琪拉推荐】烟酰胺面膜丝滑补水保湿滋润面膜收缩毛孔亮肤紧致',
            price: 99,
            collect: 294,
            image:'https://s2.mogucdn.com/mlcdn/c45406/190425_6f222jif4b8kdhkkebc34d05495cc_640x960.jpg_640x854.v1cAC.40.webp'
          }
        ]
      }
    },
    currentType: type[0]
  },

  //--------------网络请求----------
  _getMultiData () {
    //请求轮播图和推荐数据
    getMultiData().then(res => {
      console.log(res)
    })
  },
  _getGoodsData (type) {
    //根据type获取页码
    const page = this.data.goods[type].page + 1
    getGoodsData(type, page).then(res => {
      console.log(res)
    })
  },

  //--------------事件监听函数-------
  handleItemClick (e) {
    const index = e.detail.index
    this.setData({
      currentType: type[index]
    })
  },


  onReachBottom() {
    console.log('下拉加载更多')
    // this._getGoodsData(this.data.currentType)
  },

  onPageScroll (options) {
    // 获取#tab-control离顶部的距离
    const id = !this.data.isFixed? '1' : '2'
    wx.createSelectorQuery().select(`#tab-control${id}`).boundingClientRect(rect => {
      const flag1 = rect.top <= 0
      if (flag1 != this.data.isFixed) {
        this.setData({
          isFixed: flag1
        })
      }
    }).exec() 

    const scrollTop = options.scrollTop
    const flag = scrollTop > TOP_DISTANCE
    if (flag != this.data.showBackTop) {
      this.setData({
        showBackTop: flag
      })
    }   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getMultiData()
    // this._getGoodsData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})