import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
      // 就是公共的数据，所有的组件都可以直接使用
      isShow:false,
      isLogin:false,
      userInf:{
        userId:''||localStorage.getItem('userId'),
        userName:''||localStorage.getItem('userName'),
        profilePhoto:''||localStorage.getItem('profilePhoto')
      }
  },
  mutations:{
    setShow:(state,isShow)=>{
        state.isShow=isShow
    },
    setUser:(state,userInf)=>{
      state.userInf.userId = userInf.userId
      state.userInf.userName = userInf.userName
      state.userInf.profilePhoto = userInf.profilePhoto
      localStorage.setItem('userId',state.userInf.userId)
      localStorage.setItem('userName',state.userInf.userName)
      localStorage.setItem('profilePhoto',state.userInf.profilePhoto)
    }
  }
})
export default store