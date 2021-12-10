<template>
  <div class="showC2">
    <div class="stations" v-for="(item,key,index) in data" :key="index">
      <station>
        <div slot="id">{{key}}</div>
        <div slot="name">
          {{item}}分钟后到达
        </div>
      </station>
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
      searchWord3:"",
      searchWord4:"",
      isState: false
    }
  },
  watch:{
    state(){
      this.searchWord3 = this.$store.state.searchWord3
      this.searchWord4 = this.$store.state.searchWord4
      var that = this
      if(this.state){
        this.$axios.get("/api/line/getShiftsDocked",
          {
            params: {
              "now": that.searchWord3,
              "stationID": that.searchWord4,
            }
          })
          .then((res) => {
            if (res != null){
              this.isState = true
              that.data = res.data
              that.data.sort()
              console.log(that.data)
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
