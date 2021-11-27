<template>
  <div class="stationLine" >
    <div v-for="(item, index) in data" :key="index">
      <station>
        <div slot="id">{{item.id}}</div>
        <div slot="name">{{item.name}}</div>
        <div slot="english">{{item.english}}</div>
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
    }
  },
  watch:{
    state(){
      this.searchWord3 = this.$store.state.searchWord3
      this.searchWord4 = this.$store.state.searchWord4
      var that = this
      if(this.state){
        this.$axios.get("/api/station/getSameStations",
          {
            params: {
              "routeName1": that.searchWord3,
              "routeName2": that.searchWord4
            }
          })
          .then((res) => {
            if (res != null){
              this.isState = true
              that.data = res.data;
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
