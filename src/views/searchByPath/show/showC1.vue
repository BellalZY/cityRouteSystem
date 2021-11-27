<template>
  <div v-if="isState" class="showC1">
    <table name="table" v-for="(item,index) in information" :key="index">
      <tr>
        <th>姓名:</th>
        <td>{{item.name}}</td>
      </tr>
      <tr>
        <th>路线:</th>
        <td>{{item.route}}</td>
      </tr>
      <tr>
        <th>单程用时:</th>
        <td>{{item.oneWayTime}}</td>
      </tr>
      <tr>
        <th>方向:</th>
        <td>{{item.directional}}</td>
      </tr>
      <tr>
        <th>长度:</th>
        <td>{{item.kilometer}}公里</td>
      </tr>
      <tr>
        <th>运行时间:</th>
        <td>{{item.runtime}}</td>
      </tr>
      <tr>
        <th>停靠站点数:</th>
        <td>{{item.interval}}</td>
      </tr>
      <tr>
        <th>类型:</th>
        <td>{{item.type}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "showC1",
  props:{
    state:Boolean
  },
  data(){
    return{
      information:[{route:"",oneWayTime:"",directional:"",kilometer:"",name:"",runtime:"",interval:"",type:""}],
      searchWord:"",
      isState:false
    }
  },
  watch:{
    state(){
      this.searchWord = this.$store.state.searchWord3
      console.log(this.searchWord)
      var that = this
      if(this.state){
        this.$axios.get("/api/line/getLine",
          {
            params: {
              "name": this.searchWord
            }
          })
          .then((res) => {
            if (res != null){
              this.isState = true;
              that.information[0]["name"] = res.data.name
              that.information[0]["id"] = res.data.id
              that.information[0]["directional"] = res.data.directional
              that.information[0]["interval"] = res.data.interval
              that.information[0]["kilometer"] = res.data.kilometer
              that.information[0]["oneWayTime"] = res.data.onewayTime
              that.information[0]["route"] = res.data.route
              that.information[0]["runtime"] = res.data.runtime
              that.information[0]["type"] = res.data.type
              console.log(that.information)
              this.state = false;
              this.$emit('resultEvent',this.state)
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  },
}
</script>

<style scoped>
.showC1 table{
  height:100%;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.table tr th{
  position: absolute;
  left:0%;
  width: 50%;
}
.table tr td{
  position: absolute;
  left:50%;
  width: 50%;
}
</style>
