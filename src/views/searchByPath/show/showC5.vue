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
  data(){
    return{
      data:[{id:1,name:"莲桂西路",english:"lianguixilu"},{id:2,name:"莲花一区",english:"lianhuayiqu"},{id:3,name:"海椒市",english:"haijiaoshi"}]
    }
  }
}
</script>

<style scoped>

</style>
