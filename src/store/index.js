//状态管理库,以利用 Vue.js 的细粒度数据响应机制来进行高效的状态更新（管理共享变量）
import Vue from 'vue'
import Vuex from'vuex'
//1.安装插件
Vue.use(Vuex)
//2.新建对象
const store = new Vuex.Store({
    state:{
      searchWord1: 0,
      searchWord2: 0,
      searchWord3: "",
      searchWord4: "",
      searchWord5: "",
    },
    mutations:{
      setSearchWord1(state,searchWord1){
        state.searchWord1 = searchWord1;
      },
      setSearchWord2(state,searchWord2){
        state.searchWord2 = searchWord2;
      },
      setSearchWord3(state,searchWord3){
        state.searchWord3 = searchWord3;
      },
      setSearchWord4(state,searchWord4){
        state.searchWord4 = searchWord4;
      },
      setSearchWord5(state,searchWord5){
        state.searchWord5 = searchWord5;
      },
    },
    actions:{

    },
    getters:{
      getSearchWord1(state){
        return state.searchWord1
      },
      getSearchWord2(state){
        return state.searchWord2
      },
      getSearchWord3(state){
        return state.searchWord3
      },
      getSearchWord4(state){
        return state.searchWord4
      },
      getSearchWord5(state){
        return state.searchWord5
      }
    },
    modules:{

    }
})
//3.导出对象
export default store
