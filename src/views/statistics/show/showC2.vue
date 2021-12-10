<template>
  <div class="showC2">
    <div v-if="num !== 0" class>
      <img src="../../../assets/img/count.svg" style="vertical-align:middle;" alt=""/>
      线路条数：{{num}}
      <div>
        <img src="src/assets/img/white.svg" alt="" />
      </div>
    </div>
    <div v-for="(item, i) in data" :key="i">
      <lineName>
        <slot>
          {{item}}
        </slot>
      </lineName>
    </div>
  </div>
</template>

<script>
import lineName from "@/components/line";

export default {
  name: "showC2",
  components:{
    lineName
  },
  props:{
    state:Boolean
  },
  data(){
    return{
      data:[],
      num:0
    }
  },
  watch:{
    state(){
      if(this.state){
        console.log(this.$store.state.searchWord1)
        var that = this
        if(this.$store.state.searchWord1 === 1){
          this.$axios.get("/api/station/getSubwayStations")
            .then((res) => {
              if (res != null){
                that.data = res.data;
                this.num = that.data.length
                console.log(res)
                this.state = false;
                this.$emit('resultEvent',this.state)
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
        else if (this.$store.getters.getSearchWord1 === 2){
          this.$axios.get("/api/station/getDepartureStations")
            .then((res) => {
              if (res != null){
                that.data = res.data;
                this.num = that.data.length
                console.log(res)
                this.state = false;
                this.$emit('resultEvent',this.state)
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
        else if(this.$store.getters.getSearchWord1 === 3 ){
          this.$axios.get("/api/station/getTerminalStations")
            .then((res) => {
              if (res != null){
                that.data = res.data;
                this.num = that.data.length
                console.log(res)
                this.state = false;
                this.$emit('resultEvent',this.state)
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
        this.$store.commit('setSearchWord1',0)
      }
    }
  }
}
</script>

<style scoped>

</style>
