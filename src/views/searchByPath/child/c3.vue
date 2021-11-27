<template>
<div class="c3">
  <div class="Input1">
    <span> 班号信息 </span>
    <input autocomplete="off" placeholder="请输入线路号,如'30'" data-action="input" v-model="value1">
  </div>
  <div class="Input2">
    <span> 起始站 </span>
    <input autocomplete="off" placeholder="请输入站点名,如'大悦城'" data-action="input" v-model="value2">
  </div>
  <div class="Input3">
    <span> 到达站 </span>
    <input autocomplete="off" placeholder="请输入站点名,如'小吃街'" data-action="input" v-model="value3">
  </div>
</div>
</template>

<script>
export default {
  name: "c3",
  data(){
    return{
      value1:"",
      value2:"",
      value3:""
    }
  },
  watch:{
    value1(){
      this.$store.commit('setSearchWord3',this.value1)
    },
    value2(){
      this.$store.commit('setSearchWord4',this.value2)
    },
    value3(){
      this.$store.commit('setSearchWord5',this.value3)
    }
  }
}
</script>

<style scoped>
.c3{
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.c3 span{
  font-family: Helvetica;
}
.c3 input {
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  padding: 10px;
  height: 100%;
  width: 65%;
  line-height: 22px;
  vertical-align: middle;
  cursor: auto;
  outline: none;
}
  input::-webkit-input-placeholder{
  font-family: "Heiti SC";
  color: #d8d8d8;
}
</style>
