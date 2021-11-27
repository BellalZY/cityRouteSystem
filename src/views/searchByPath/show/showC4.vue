<template>
  <div class="showC4">
    <span v-for="(item, index) in stations" :key="index">
        <showTable1>
        <div>
          {{item.name}}
        </div>
      </showTable1>
        <div class="showC4-Content" v-for="(item2, i) in timetables[index]" :key="i">
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
  name: "showC4",
  components:{
    showTable1,showTable2,showTable2Active
  },
  props:{
    state:Boolean
  },
  data(){
    return{
      timetables:[],
      stations:[],
      // timetables:[["07:00","07:06","07:12","07:18"],["07:00","07:06","07:12","07:18"],["07:00","07:06","07:12","07:18"]],
      // stations:[{id:1,name:"金沙江路",english:"jinshajianglu"},{id:1,name:"金沙江路",english:"jinshajianglu"},{id:1,name:"金沙江路",english:"jinshajianglu"}],
      searchWord:this.$store.state.searchWord3,
    }
  },
  watch:{
    state(){
      this.searchWord = this.$store.state.searchWord3
      console.log(this.searchWord)
      var that = this
      if(this.state){
        this.$axios.get("/api/route/getShiftInformation",
          {
            params: {
              "route": this.searchWord
            }
          })
          .then((res) => {
            if (res != null){
              console.log(res)
              that.stations = res.data.stations
              that.timetables = res.data.timetable
              console.log(res.data.timetable)
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
.showC4{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
