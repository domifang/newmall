<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
// import MainTabBar from '../../vue-tabBar/src/components/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
