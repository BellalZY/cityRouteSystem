<template>
  <div v-if="isState" class="stationLine">
    <div>姓名：{{name}}</div>
    <div>用时：{{time}}</div>
    <div v-for="(item, index) in data" :key="index">
      <station>
        <div slot="id">id：{{item.id}}</div>
        <div slot="name">{{item.name}}</div>
        <div slot="english">{{item.english}}</div>
      </station>
      <div v-if="index !== data.length-1">
        <img src="../../../assets/img/next.svg" alt="" />
      </div>
      <div v-else v-for="i in 2" :key="i">
        <img src="../../../assets/img/next.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import station from "@/components/station";
export default {
  name: "showC3",
  components:{
    station
  },
  props:{
    state:Boolean
  },
  data(){
    return{
      data:[],
      name:"",
      time:"",
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
        this.$axios.get("/api/route/getRouteByLine",
          {
            params: {
              "line": that.searchWord3,
              "start": that.searchWord4,
              "end": that.searchWord5
            }
          })
          .then((res) => {
            if (res != null){
              this.isState = true
              that.name = res.data.name
              that.time = res.data.time
              that.data = res.data.stations;
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
