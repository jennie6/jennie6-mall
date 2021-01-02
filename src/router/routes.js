export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/list',
    name: 'list',
    meta: {
      title: '列表'
    },
    component: () => import('@/views/list/list.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {
      title: '详情页'
    },
    component: () => import('@/views/detail/detail.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    meta: {
      title: '注册'
    },
    component: () => import('@/views/regist/regist.vue'),
  },
  {
    path: '/my',
    name: 'my',
    meta: {
      title: '个人中心'
    },
    component: () => import('@/views/my/my.vue'),
    children: [
      {
        path: 'myOrder',
        name: 'myOrder',
        meta: {
          title: '我的订单'
        },
        component: () => import('@/views/my/my-order/my-order.vue'),
      },
      {
        path: 'buyback',
        name: 'buyback',
        meta: {
          title: '回购列表'
        },
        component: () => import('@/views/my/buyback/buyback.vue')
      },
      {
        path: 'address',
        name: 'address',
        meta: {
          title: '我的地址'
        },
        component: () => import('@/views/my/my-address/my-address.vue')
      },
      {
        path: 'favorite',
        name: 'favorite',
        meta: {
          title: '我的收藏'
        },
        component: () => import('@/views/my/favorite/favorite.vue')
      },
      {
        path: 'message',
        name: 'message',
        meta: {
          title: '消息提醒'
        },
        component: () => import('@/views/my/message/message.vue')
      },
      {
        path: 'advice',
        name: 'advice',
        meta: {
          title: '建议反馈'
        },
        component: () => import('@/views/my/advice/advice.vue')
      },
      {
        path: 'coupon',
        name: 'coupon',
        meta: {
          title: '我的优惠券'
        },
        component: () => import('@/views/my/coupon/coupon.vue')
      },
      {
        path: 'redenvelope',
        name: 'redenvelope',
        meta: {
          title: '我的红包'
        },
        component: () => import('@/views/my/redenvelope/redenvelope.vue')
      },
      {
        path: 'repurchaseFund',
        name: 'repurchaseFund',
        meta: {
          title: '我的回购金'
        },
        component: () => import('@/views/my/repurchase-fund/repurchase-fund.vue')
      },
      {
        path: 'afterSale',
        name: 'afterSale',
        meta: {
          title: '售后服务'
        },
        component: () => import('@/views/my/after-sale/after-sale.vue')
      },
      {
        path: 'mycycle',
        name: 'mycycle',
        meta: {
          title: '以旧换新'
        },
        component: () => import('@/views/my/mycycle/mycycle.vue')
      },
    ]
  },
]