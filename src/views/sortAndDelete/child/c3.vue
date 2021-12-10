<template>
  <div class="c3">
    <div class="Input">
      <span>线路号</span>
      <input autocomplete="off" placeholder="请输入线路号,如2" data-action="input" v-model="value"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "c3",
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
.c3{
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
