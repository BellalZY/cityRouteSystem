<template>
  <div class="showC3">
    <div v-for="(item,index) in data" :key="index">
      <img src="../../../assets/img/count.svg" style="vertical-align:middle;" alt=""/>
      {{name[index]}}：{{item}}
      <div>
        <img src="src/assets/img/white.svg" alt="" />
      </div>
      <div>
        <img src="src/assets/img/white.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "showC3",
  props:{
    state:Boolean
  },
  data(){
    return{
      data:[],
      name:["常规公交","快速公交","高峰公交","夜班公交"],
    }
  },
  watch:{
    state(){
      var that = this
      if(this.state){
        this.$axios.get("/api/line/getDifferentLinesCount")
          .then((res) => {
            if (res != null){
              that.data = res.data;
              console.log(res)
              this.state = false;
              this.$emit('resultEvent',this.state)
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }
}
</script>

<style scoped>

</style>
