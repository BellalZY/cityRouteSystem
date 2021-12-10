<template>
  <div id="app">
    <div class = "title">
      <div class="statistics" :class={active:isActiveS} @click="gotoStatis">
        <h>统计数据</h>
      </div>
      <div class="sortDelete" :class={active:isActiveSD} @click="gotoSort">
        <h>排序查询</h>
      </div>
      <div class="time" :class={active:isActiveT} @click="gotoTime">
        <h>时间查询</h>
      </div>
      <div class="station" :class={active:isActiveST} @click="gotoStation">
        <h>站点查询</h>
      </div>
      <div class="path" :class={active:isActiveP} @click="gotoPath">
        <h>班号查询</h>
      </div>
    </div>
    <div class="line">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  computed:{
    isActiveS(){
      return this.$route.path.indexOf("/Statistics") !== -1;
    },
    isActiveSD(){
      return this.$route.path.indexOf("/sortAndDelete") !== -1;
    },
    isActiveT(){
      return this.$route.path.indexOf("/searchByTime") !== -1;
    },
    isActiveST(){
      return this.$route.path.indexOf("/searchByStation") !== -1;
    },
    isActiveP(){
      return this.$route.path.indexOf("/searchByPath") !== -1;
    },
  },
  methods:{
    gotoStatis(){
      this.$router.push('/Statistics');
    },
    gotoSort(){
      this.$router.push('/sortAndDelete');
    },
    gotoTime(){
      this.$router.push('/searchByTime')
    },
    gotoStation(){
      this.$router.push('/searchByStation');
    },
    gotoPath(){
      this.$router.push('/searchByPath');
    },
  }
}
</script>

<style>
/*如果是在.vue文件中导入，那么是在vue组件的style里面导入，且import前面需要加@符号*/
@import "./assets/css/base.css";
@media screen and (max-width: 768px) {
  #app {
    background: url("assets/img/catcat.jpeg");
    height: 100%;
    width: 100%;
    font-size: 0.5rem;
  }
}
/* 笔记本电脑的字体大小 */
@media screen and (min-width: 768px) {
  #app {
    position: absolute;
    background-image: url("assets/img/newcat(1).png");
    background-size: 50% 100%;
    height: 100%;
    width: 100%;
    font-size: 1.5rem;
    font-family: oppo;
    overflow: scroll;
    z-index: -1;
  }
}
.title{
  position: fixed;
  top: 0%;
  left: 0%;
  height: 10%;
  width: 100%;
  box-shadow: 10px 10px 5px rgba(127,127,127,.2);
  z-index: 1;
  background: white;
}
.statistics{
  position: absolute;
  right: 10%;
  top: 30%;
}
.sortDelete{
  position: absolute;
  right: 20%;
  top: 30%;
}
.time{
  position: absolute;
  right: 30%;
  top: 30%;
}
.station{
  position: absolute;
  right: 40%;
  top: 30%;
}
.path{
  position: absolute;
  right: 50%;
  top: 30%;
}
.active{
  color:#0099ff;
  border-bottom: 4px solid #0099ff;
}
</style>
