<template>
  <div class="showC1">
    <div class="stations" v-for="(item,key,index) in data" :key="index">
      <station>
        <div slot="id">{{key}}</div>
        <div slot="name">
          <div v-for="(item2,i) in item" :key = i>
            {{item2}}分钟后到达
          </div>
        </div>
      </station>
    </div>
  </div>
</template>

<script>
import station from "@/components/station";
export default {
  name: "showC1",
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
      searchWord5:"",
      isState: false
    }
  },
  watch:{
    state(){
      this.searchWord3 = this.$store.state.searchWord3
      this.searchWord4 = this.$store.state.searchWord4
      this.searchWord5 = this.$store.state.searchWord5
      var that = this
      if(this.state){
        this.$axios.get("/api/line/getLineDocked",
          {
            params: {
              "now": that.searchWord3,
              "stationID": that.searchWord4,
              "time": that.searchWord5
            }
          })
          .then((res) => {
            if (res != null){
              this.isState = true
              that.data = res.data
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
