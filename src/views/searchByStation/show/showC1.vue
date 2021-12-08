<template>
  <div class="showC1">
     <span v-for="(item, index) in data" :key="index">
        <showTable1>
        <div>
          {{item.id}}
        </div>
      </showTable1>
        <div class="showC4-Content" v-for="(item2, i) in item.lines" :key="i">
          <div v-if="i%2">
            <showTable2>
              <div>
                {{item2}}
              </div>
            </showTable2>
          </div>
          <div v-else>
            <show-table2-active>
              <div>
                {{item2}}
              </div>
            </show-table2-active>
          </div>
        </div>
      </span>
  </div>
</template>

<script>
import showTable1 from "@/components/showTable1";
import showTable2 from "@/components/showTable2";
import showTable2Active from "@/components/showTable2-active";
export default {
  name: "showC1",
  components:{
    showTable1,showTable2,showTable2Active
  },
  props:{
    state:Boolean
  },
  data(){
    return{
    //   data:[{
    //         "id": 64355,
    //         "name": null,
    //         "lines": [
    //           "N26路下行",
    //           "G33路上行",
    //           "17路下行"
    //         ]},{
    //   "id": 64356,
    //   "name": null,
    //   "lines": [
    //   "N26路上行",
    //   "G33路下行",
    //   "17路上行"
    // ]},{
    //   "id": 58289,
    //   "name": null,
    //   "lines": [
    //   "K5路下行"
    // ]},{
    //   "id": 58290,
    //   "name": null,
    //   "lines": [
    //   "K5路上行"
    // ]}],
      data:{},
      searchWord:"",
    }
  },
  watch:{
    state(){
      this.searchWord = this.$store.state.searchWord3
      console.log(this.searchWord)
      var that = this;
      if(this.state){
        this.$axios.get("/api/line/newGetLinesByStationName",
          {
            params: {
              "stationName": this.searchWord
            }
          })
          .then((res) => {
            if (res != null){
              console.log(res)
              that.data = res.data
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
.showC1{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
