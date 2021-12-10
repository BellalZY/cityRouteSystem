<template>
  <div class="c2">
    <div class="Input1">
      <span> 时刻 </span>
      <input autocomplete="off" placeholder="请输入具体时刻,如'08:37'" data-action="input" v-model="value1">
    </div>
    <div class="Input2">
      <span> 站台ID </span>
      <input autocomplete="off" placeholder="请输入站点ID,如'16147'" data-action="input" v-model="value2">
    </div>
  </div>
</template>

<script>
export default {
  name: "c2",
  data(){
    return{
      value1:"",
      value2:"",
    }
  },
  watch:{
    value1(){
      this.$store.commit('setSearchWord3',this.value1)
    },
    value2(){
      this.$store.commit('setSearchWord4',this.value2)
    }
  }
}
</script>

<style scoped>
.c2{
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.c2 span{
  font-family: Helvetica;
}
.c2 input {
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
