<template>
  <div class="searchButton">
    <div v-if="currentState == 'showC33'">
      <input type="submit" value="立即删除" @click="search">
    </div>
    <div v-else>
      <input type="submit" value="立即查询" @click="search">
    </div>
  </div>
</template>

<script>
export default {
  name: "searchButton",
  props:{
    state:Boolean,
    currentState:String
  },
  methods:{
    search(){
      console.log(this.currentState)
      this.state = true;
      this.$emit('searchEvent',this.state)
    }
  }
}
</script>

<style scoped>
.searchButton{
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
input{
  border: none;
  padding: 9px 0;
  width: 96px;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  background: #317cf7;
  -webkit-transition: background-color .2s;
  transition: background-color .2s;
}
input:hover{
  background: #629dff;
}
</style>
