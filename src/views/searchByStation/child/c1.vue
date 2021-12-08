<template>
  <div class="c1">
    <div class="Input">
      <span> 线路信息 </span>
      <input autocomplete="off" placeholder="请输入站点名,如锦城广场" data-action="input" v-model="value"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "c1",
  data(){
    return{
      value:""
    }
  },
  watch:{
    value(){
      this.$store.commit('setSearchWord3',this.value)
    }
  }
}
</script>

<style scoped>
.c1{
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.c1 span{
  font-family: Helvetica;
}
.c1 input {
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
