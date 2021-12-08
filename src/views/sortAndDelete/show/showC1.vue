<template>
  <div class="showC1">
      <div v-for="(item, index) in data" :key="index" style="position:relative;">
        <div class>
          <img src="../../../assets/img/count.svg" style="vertical-align:middle;" alt=""/>
          线路条数：{{num[index]}}
          <div>
            <img src="../../../assets/img/white.svg" alt="" />
          </div>
          <div>
            <img src="../../../assets/img/white.svg" alt="" />
          </div>
        </div>
        <station>
          <div slot="id">id：{{item.id}}</div>
          <div slot="name">{{item.name}}</div>
        </station>
        <div v-for="(lines, i) in item.lines" :key="i">
          <lineName>
            <slot>
              {{lines}}
            </slot>
          </lineName>
        </div>
      </div>
  </div>
</template>

<script>
import station from "@/components/station";
import lineName from "@/components/line"
export default {
  name: "showC1",
  components:{
    station,lineName
  },
  props:{
    state:Boolean
  },
  data(){
    return{
      // data:[{id:123,name:"莲桂西路",english:"lianguixilu"},{id:2,name:"莲花一区",english:"lianhuayiqu"},{id:345678,name:"海椒市",english:"haijiaoshi"},{id:345678,name:"海椒市",english:"haijiaoshi"},{id:345678,name:"海椒市",english:"haijiaoshi"}],
      data:[],
      num:[]
    }
  },
  watch:{
    state(){
      var that = this
      var i;
      var len;
      if(this.state){
        this.$axios.get("/api/station/getStationsWithMostLines")
          .then((res) => {
            if (res != null){
              that.data = res.data;
              console.log(res)
              len = that.data.length
              for(i = 0; i < len; i++){
                this.num[i] = that.data[i].lines.length
              }
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
.showC1{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
