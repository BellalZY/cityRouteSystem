<template>
  <div class="stationLine">
    <div class>
      <img src="../../../assets/img/time.svg" style="vertical-align:middle;" alt=""/>
      预计用时：{{time}}分钟
      <div>
        <img src="../../../assets/img/white.svg" alt="" />
      </div>
      <div>
        <img src="../../../assets/img/white.svg" alt="" />
      </div>
    </div>
    <div v-for="(item, index) in data" :key="index">
      <station>
        <div slot="id">id：{{item.id}}</div>
        <div slot="name">{{item.name}}</div>
        <div slot="english">{{item.english}}</div>
      </station>
      <div v-if="index !== data.length-1" style="font-family: oppo;color:#8F8F8F">
        <div>
          <img src="../../../assets/img/white.svg" alt="" />
        </div>
        <div>
          <img src="../../../assets/img/next1.svg" style="width: 45px;height:45px;vertical-align:middle;" alt=""/>
          <img src="../../../assets/img/01_bus.png" style="width: 45px;height:45px;vertical-align:middle;" alt="" />
          搭乘线路：{{next[index]}}
          <img src="../../../assets/img/next1.svg" style="width: 45px;height:45px;vertical-align:middle;" alt=""/>
        </div>
        <div>
          <img src="../../../assets/img/white.svg" alt="" />
        </div>
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
      next:[],
      time:null,
      searchWord3:"",
      searchWord4:""
    }
  },
  watch:{
    state(){
      this.searchWord3 = this.$store.state.searchWord3
      this.searchWord4 = this.$store.state.searchWord4
      console.log(this.searchWord3)
      console.log(this.searchWord4)
      var that = this
      if(this.state){
        this.$axios.get("/api/route/getShortestPathByNames",
          {
            params: {
              "startName": this.searchWord3,
              "endName": this.searchWord4
            }
          })
          .then((res) => {
            if (res != null){
              that.data = res.data.stations;
              that.next = res.data.next;
              that.time = res.data.time;
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
