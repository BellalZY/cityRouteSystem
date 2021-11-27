<template>
  <div class="searchButton">
    <input type="submit" value="立即查询" @click="search">
  </div>
</template>

<script>
export default {
  name: "searchButton",
  props:{
    state:Boolean
  },
  methods:{
    search(){
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
