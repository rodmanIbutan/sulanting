import axios from "axios";
import md5 from "md5";
export default {
    /**
     * 注册
     * @param {string} account 通行证
     * @param {string} username 用户名
     * @param {string} password 密码
     * @return {string}
     */
    async register(account, username, password) {
        var md5word = md5(password);
        var url = "http://1.117.175.168:8081/register";
        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
          let res =''
        await axios.post(url, {
            "userName": username,
            "accountNumber": account,
            "password": md5word
        },config).then(function (response) {
            console.log("🚀 ~ file: Axios.js:18 ~ register ~ response:", response)
            res= response.data;
        }).catch(function (error) {
            console.log("🚀 ~ file: Axios.js:21 ~ register ~ error:", error)
            res= error
        });
        return res
    },

    /**
     * 登录
     * @param {string} account 通行证
     * @param {string} password 密码
     * @return {string}
     */
    async login(account, password) {
        var md5word = md5(password);
        console.log("🚀 ~ file: index.js:35 ~ login ~ md5word:", md5word)
        var url = "http://1.117.175.168:8081/login";
        // var url = "http://localhost:8090/user/login";
        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
        let res="";
        
        await axios.post(url, {
            "accountNumber": account,
            "password": md5word,
        },config).then(function (response) {
            console.log("🚀 ~ file: Axios.js:37 ~ login ~ response:", response);
            res = response.data;
        }).catch(function (error) {
            console.log("🚀 ~ file: Axios.js:40 ~ login ~ error:", error);
            res = error;
        });
        return res;
    }, 
    /**
     * 获取播放量信息
     * @param {string} id 
     * @param {'video' | 'article'} Type
     * @returns 
     */
    async getData(id,Type){
        var url;
        if(Type == "video"){
            url = "http://1.117.175.168:8081/videoData/selectVideoData";
        }else{
            url = "http://1.117.175.168:8081/articleData/selectArticleData";
        }
        // var url = "http://localhost:8090/user/login";
        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
        let res="";
        await axios.post(url, {
            "articleId": id
        },config).then(function (response) {
            res = response.data;
        }).catch(function (error) {
            res = error;
        });
        return res;
    },
    /**
     * Get方法 
     * @param {string} GetUrl 接口
    */  
    async requestGet(GetUrl){
        const url = "http://1.117.175.168:8081"+ GetUrl
        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
        let res = ''
        await axios.get(url,config).then(response=>{
            res = response.data;
        }).catch(error=>{
            res = error
        });
        return res;
    }
}