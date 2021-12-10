<template>
  <div class="showC2">
    <div v-for="(item, index) in data" :key="index" style="position:relative;">
      <div class v-for="(item2, key, i) in item" :key="i">
        <img src="../../../assets/img/count.svg" style="vertical-align:middle;" alt=""/>
        运行时间：{{item2}}
        <div>
          <img src="src/assets/img/white.svg" alt="" />
        </div>
        <div>
          <img src="src/assets/img/white.svg" alt="" />
        </div>
        <station>
          <div slot="name">{{key}}</div>
        </station>
      </div>
    </div>
  </div>
</template>

<script>
import station from "@/components/station";
export default {
  name: "showC2",
  components:{
    station
  },
  props:{
    state:Boolean
  },
  data(){
    return{
      data:[],
    }
  },
  watch:{
    state(){
      var that = this
      console.log(this.state)
      if(this.state){
        this.$axios.get("/api/route/getLongestRunTimeRoutes")
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
.showC2{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
