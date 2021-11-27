<template>
<div class="c5">
  <div class="Input1">
    <span> 班号1 </span>
    <input autocomplete="off" placeholder="请输入线路号,如'30'" data-action="input">
  </div>
  <div class="Input2">
    <span> 班号2 </span>
    <input autocomplete="off" placeholder="请输入线路号,如'30'" data-action="input">
  </div>
</div>
</template>

<script>
export default {
  name: "c5"
}
</script>

<style scoped>
.c5{
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.c5 span{
  font-family: Helvetica;
}
.c5 input {
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
