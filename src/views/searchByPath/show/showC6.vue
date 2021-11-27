<template>
  <div class="showC6">
    <span v-for="(item, key, index) in data" :key="index">
        <showTable1>
        <div>
          {{key}}
        </div>
      </showTable1>
        <div class="showC4-Content" v-for="(item2, i) in item" :key="i">
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
  name: "showC6",
  components:{
  showTable1,showTable2,showTable2Active
  },
  data(){
    return{
      data:{
        "name":["1","2","3"],
        "name2":["1","2","3"],
        "name3":["1","2","3"],
        "name4":["1","2","3"],
        "name5":["1","2","3"],
        "name6":["1","2","3"],
        "name7":["1","2","3"],
        "name8":["1","2","3"],
      }
    }
  }
}
</script>

<style scoped>
.showC6{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
