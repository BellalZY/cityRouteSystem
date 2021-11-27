<template>
  <div class="Path">
    <div class="searchCase">
      <div class = "searchState">
        <div class="c1" @click="change1" :class="{active:isActive===1}">
          <h>基本信息</h>
        </div>
        <div class="c2" @click="change2" :class="{active:isActive===2}">
          <h>站点信息</h>
        </div>
        <div class="c3" @click="change3" :class="{active:isActive==3}">
          <h>路线查询</h>
        </div>
        <div class="c4" @click="change4" :class="{active:isActive==4}">
          <h>班次信息</h>
        </div>
        <div class="c5" @click="change5" :class="{active:isActive==5}">
          <span>重复查询</span>
        </div>
        <div class="c6" @click="change6" :class="{active:isActive==6}">
          <span>换乘路线</span>
        </div>
      </div>
      <div class="searchContent">
        <component :is="currentState"></component>
      </div>
      <div class="searchButton">
        <search-button :state="state1" v-on:searchEvent="changeValue"></search-button>
      </div>
    </div>
    <div class="showResult">
      <component :is="currentState2" :state="state1" v-on:resultEvent="changeValue"></component>
    </div>
  </div>
</template>

<script>
import c1 from "./child/c1"
import c2 from "./child/c2"
import c3 from "@/views/searchByPath/child/c3";
import c4 from "@/views/searchByPath/child/c4";
import c5 from "@/views/searchByPath/child/c5";
import c6 from "@/views/searchByPath/child/c6";
import searchButton from "@/components/searchButton";
import ShowC1 from "@/views/searchByPath/show/showC1";
import ShowC2 from "@/views/searchByPath/show/showC2";
import ShowC3 from "@/views/searchByPath/show/showC3";
import ShowC4 from "@/views/searchByPath/show/showC4";
import ShowC5 from "@/views/searchByPath/show/showC5";
import ShowC6 from "@/views/searchByPath/show/showC6";
export default {
  name: "Path",
  components:{
    ShowC1,ShowC2,ShowC3,ShowC4,ShowC5,ShowC6,
    c1,c2,c3,c4,c5,c6,searchButton
  },
  data(){
    return{
      state1:false,
      isActive:1,
      isActiveComp:['c1','c2','c3','c4','c5','c6'],
      isActiveComp2:['ShowC1','ShowC2','ShowC3','ShowC4','ShowC5','ShowC6'],
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
  methods:{
    change1(){
      this.isActive = 1;
      console.log(this.isActive)
    },
    change2(){
      this.isActive = 2;
    },
    change3(){
      this.isActive = 3;
    },
    change4(){
      this.isActive = 4;
    },
    change5(){
      this.isActive = 5;
    },
    change6(){
      this.isActive = 6;
    },
    changeValue(val){
      this.state1 = val
    }
  }
}
</script>

<style scoped>
.Path{
  top: 10%;
  height: 90%;
  width: 100%;
  position: absolute;
  font-family: GJ;
  font-size: 1.2rem;
  color: black;
  z-index: -1;
}
.searchCase{
  position: absolute;
  top: 10%;
  left: 10%;
  right: 40%;
  width: 50%;
  height: 35%;
  border: 2px solid #0099ff;
  border-radius: 5px;
}
.searchState{
  position: absolute;
  left: 0%;
  width: 14%;
  height:100%;
  border-right: 2px solid #0099ff;
  flex: 1 0 auto;
}
.searchState .c1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 17%;
  padding: 5px;
  border-bottom: 1px solid #0099ff;
}
.searchState .c2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 17%;
  padding: 5px;
  border-top: 1px solid #0099ff;
  border-bottom: 1px solid #0099ff;
}
.searchState .c3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 17%;
  padding: 5px;
  border-top: 1px solid #0099ff;
  border-bottom: 1px solid #0099ff;
}
.searchState .c4{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 17%;
  padding: 5px;
  border-top: 1px solid #0099ff;
  border-bottom: 1px solid #0099ff;
}
.searchState .c5{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 16%;
  padding: 5px;
  border-top: 1px solid #0099ff;
  border-bottom: 1px solid #0099ff;
}
.searchState .c6{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 16%;
  border-top: 1px solid #0099ff;
  padding: 5px;
 }
.searchContent{
  position: absolute;
  left: 20%;
  width: 70%;
  height: 100%;
}
.searchButton{
  left:80%;
  width:20%;
  height: 100%;
}
.showResult{
  position: absolute;
  top: 50%;
  left: 10%;
  width: 80%;
  right: 10%;
  overflow: scroll;
}
.active{
  background: #0099ff;
  color: #ffffff;
  /*color: #ffffff;*/
}
</style>
