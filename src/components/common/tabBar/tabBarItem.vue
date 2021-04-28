<template>   
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div> 
      <div v-else><slot name="item-icon-active"></slot></div>   
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        
      }
    },
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'orange'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    padding: 4px 0;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
</style>