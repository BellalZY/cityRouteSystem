<template>
<div class="c4">
  <div class="Input">
    <span> 班次信息 </span>
    <input type="text" placeholder="请输入按方向线路,如'2路上行'" v-model="value"/>
  </div>
</div>
</template>

<script>
export default {
  name: "c4",
  data(){
    return{
      value:"",
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
.c4{
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.c4 span{
  font-family: Helvetica;
}
.c4 input {
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
