<template>
  <div class="showC3">
    <div v-for="(item, index) in data" :key="index">
      <lineName>
        <slot>
          {{item}}
        </slot>
      </lineName>
    </div>
  </div>
</template>

<script>
import lineName from "@/components/line";
export default {
  name: "showC3",
  components:{
    lineName
  },
  props:{
    state:Boolean
  },
  data(){
    return{
      // data:[{id:123,name:"莲桂西路",english:"lianguixilu"},{id:2,name:"莲花一区",english:"lianhuayiqu"},{id:345678,name:"海椒市",english:"haijiaoshi"},{id:345678,name:"海椒市",english:"haijiaoshi"},{id:345678,name:"海椒市",english:"haijiaoshi"}],
      data:[],
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
        this.$axios.get("/api/route/direct",
          {
            params: {
              "start": this.searchWord3,
              "end": this.searchWord4
            }
          })
          .then((res) => {
            if (res != null){
              that.data = res.data;
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
