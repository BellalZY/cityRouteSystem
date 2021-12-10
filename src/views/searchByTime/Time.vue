<template>
  <div class="Time">
    <div class="searchCase">
      <div class="searchState">
        <div class="c1" @click="change1" :class="{active:isActive===1}">
          <h>某个时段即将停靠</h>
        </div>
        <div class="c2" @click="change2" :class="{active:isActive===2}">
          <h>最近3趟班次</h>
        </div>
      </div>
      <div class="searchContent">
        <component :is="currentState"></component>
      </div>
      <div class="searchButton">
        <search-button :state="state1" v-on:searchEvent="changeValue"></search-button>
      </div>
    </div>
    <img src="../../../public/img.png" alt="" />
    <div class="showResult">
      <component :is="currentState2" :state="state1" v-on:resultEvent="changeValue"></component>
    </div>
  </div>
</template>

<script>
import searchButton from "@/components/searchButton";
import c1 from "@/views/searchByTime/child/c1";
import c2 from "@/views/searchByTime/child/c2";
import showC1 from "@/views/searchByTime/show/showC1";
import showC2 from "@/views/searchByTime/show/showC2";
export default {
  name: "Time",
  components: {
    searchButton,c1,c2,showC1,showC2
  },
  data() {
    return {
      isActive: 1,
      state1: false,
      isActiveComp:['c1','c2'],
      isActiveComp2:['showC1','showC2'],
    }
  },
  computed:{
    currentState(){
      return this.isActiveComp[this.isActive - 1]
    },
    currentState2(){
      return this.isActiveComp2[this.isActive - 1]
    }
  },
  methods: {
    change1() {
      this.isActive = 1;
      console.log(this.isActive)
    },
    change2() {
      this.isActive = 2;
    },
    changeValue(val) {
      this.state1 = val
    }
  }
}
</script>

<style scoped>
.Time {
  top: 10%;
  height: 90%;
  width: 100%;
  position: absolute;
  font-family: GJ;
  font-size: 1.2rem;
  color: black;
  z-index: -1;
}

.searchCase {
  position: absolute;
  top: 10%;
  left: 10%;
  right: 40%;
  width: 50%;
  height: 35%;
  border: 2px solid #0099ff;
  border-radius: 5px;
}

.searchState {
  position: absolute;
  left: 0%;
  width: 14%;
  height: 100%;
  border-right: 2px solid #0099ff;
  flex: 1 0 auto;
}

.searchState .c1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  padding: 5px;
  border-bottom: 1px solid #0099ff;
}

.searchState .c2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  padding: 5px;
  border-top: 1px solid #0099ff;
  border-bottom: 1px solid #0099ff;
}

.searchContent {
  position: absolute;
  left: 20%;
  width: 70%;
  height: 100%;
}

.searchButton {
  left: 80%;
  width: 20%;
  height: 100%;
}

.Time img{
  position: absolute;
  top: 10%;
  left: 70%;
  height: 35%;
}

.showResult {
  position: absolute;
  top: 50%;
  left: 10%;
  width: 80%;
  right: 10%;
  overflow: scroll;
}

.active {
  background: #0099ff;
  color: #ffffff;
  /*color: #ffffff;*/
}
</style>
