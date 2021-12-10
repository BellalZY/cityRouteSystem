<template>
  <div class="c2">
    <li class="dropdown">
      <div class="select">
        <img src="../../../assets/img/triangle.svg" alt="" />
        {{keyValue}}
      </div>
      <div class="dropdown-change">
        <ul class="dropdown-content" v-for="(item,index) in data" :key="index">
          <li @mouseenter="changeColorToBlue(index),changeWord(item, index)">
            <img :src="picSrc[index]" alt="" />
            {{item}}
          </li>
          <!--        <li @mouseenter="changeColorToBlue(0),train()" >-->
          <!--          <img :src=picSrc[0] alt="" />-->
          <!--          地铁-->
          <!--        </li>-->
          <!--        <li @mouseenter="changeColorToBlue(1),departure()">-->
          <!--          <img :src=picSrc[1] alt="" />-->
          <!--          起点站-->
          <!--        </li>-->
          <!--        <li @mouseenter="changeColorToBlue(2),destination()">-->
          <!--          <img :src=picSrc[2] alt="" />-->
          <!--          终点站-->
          <!--        </li>-->
        </ul>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "c2",
  data(){
    return{
      keyValue:"请选择特殊站台",
      data:["地铁","起点站","终点站"],
      picSrc:[require("../../../assets/img/whiteTriangle.svg"),require("../../../assets/img/whiteTriangle.svg"),require("../../../assets/img/whiteTriangle.svg")],
    }
  },
  methods:{
    train(){
      this.$store.commit('setSearchWord1', 1)
      this.keyValue = "地铁"
    },
    departure(){
      this.$store.commit('setSearchWord1', 2)
      this.keyValue = "起点站"
    },
    destination(){
      this.$store.commit('setSearchWord1', 3)
      this.keyValue = "终点站"
    },
    changeWord(item, index){
      this.$store.commit('setSearchWord1', index + 1)
      this.keyValue = item
    },
    changeColorToBlue(index){//鼠标事件有优先级，click高于enter？这样子
      var i
      for(i = 0; i < 3; i++){
        this.picSrc[i]=require("../../../assets/img/whiteTriangle.svg")
      }
      this.picSrc[index]=require("../../../assets/img/blueTriangle.svg")
      console.log(this.picSrc[index])
    },
  }
}
</script>

<style scoped>
.c2{
  position: absolute;
  height: 100%;
  width: 100%;
}
.c2 .dropdown{
  position: absolute;
  left: 15%;
  top:34%;
  width: 60%;
  border-radius: 5px;
  list-style: none;
}
.c2 .dropdown .select{
  padding: 10px;
  background: #FAFAFA;
}
.c2 .dropdown img{
  -webkit-transition:-webkit-transform 0.2s;
  -moz-transition:-moz-transform 0.2s;
  -o-transition:-o-transform 0.2s;
}
.c2 .dropdown-change{
  border-radius: 0 0 5px 5px;
  width:100%;
  transform: scaleY(0);
  transition:transform 0.2s;
  transform-origin: top left;
  background: #FAFAFA;
  /*-webkit-transition:-webkit-transform 0.2s;*/
  /*-moz-transition:-moz-transform 0.2s;*/
  /*-o-transition:-o-transform 0.2s;*/
}
.c2 .dropdown:hover{
  border-radius: 5px 5px 0 0;
 }
.c2 .dropdown:hover img{
  transform: rotateZ(180deg);
}
.c2 .dropdown:hover .dropdown-change {
  transform: scaleY(1);
}
.c2 .dropdown .dropdown-change .dropdown-content{
  display:block;
  list-style: none;
}
.c2 .dropdown .dropdown-change .dropdown-content li{
  padding: 10px;
}
.c2 .dropdown .dropdown-content li:hover{
  background: #e6e9f1;
}
</style>
