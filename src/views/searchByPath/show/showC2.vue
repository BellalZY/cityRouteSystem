<template>
  <div class="stationLine" >
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
  name: "showC2",
  components:{
    station
  },
  props:{
    state:Boolean
  },
  data(){
    return{
      // data:[{id:123,name:"莲桂西路",english:"lianguixilu"},{id:2,name:"莲花一区",english:"lianhuayiqu"},{id:345678,name:"海椒市",english:"haijiaoshi"},{id:345678,name:"海椒市",english:"haijiaoshi"},{id:345678,name:"海椒市",english:"haijiaoshi"}],
      data:[],
      searchWord:"",
    }
  },
  watch:{
    state(){
      this.searchWord = this.$store.state.searchWord3
      console.log(this.searchWord)
      var that = this
      if(this.state){
        this.$axios.get("/api/station/getRouteStations",
          {
            params: {
              "routeName": this.searchWord
            }
          })
          .then((res) => {
            if (res != null){
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
