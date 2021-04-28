<template>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/images/tabBar/home-n.png" alt="" >
        <img slot="item-icon-active" src="~assets/images/tabBar/home-s.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/images/tabBar/material-n.png" alt="" >
        <img slot="item-icon-active" src="~assets/images/tabBar/material-s.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/images/tabBar/sale-n.png" alt="" >
        <img slot="item-icon-active" src="~assets/images/tabBar/sale-s.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/images/tabBar/my-n.png" alt="" >
        <img slot="item-icon-active" src="~assets/images/tabBar/my-s.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>        
    </tab-bar>
</template>
<script>
import TabBar from 'components/common/tabBar/tabBar'
import TabBarItem from 'components/common/tabBar/tabBarItem'
export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>