
/*axios中文说明文档*/
//https://www.kancloud.cn/yunye/axios/234845

import {isJSON} from '../tool/tool'

import axios from 'axios'

import Vue from 'vue'

import qs from 'qs'

Vue.prototype.$axios = axios;

const serverUrl = "";

axios.defaults.baseURL = serverUrl;

/*请求超时时间*/
axios.defaults.timeout = 60000;

/* `url` 是用于请求的服务器 URL*/
// axios.defaults.url = '/api'


/*
* // 用于请求之前对请求数据进行操作
  // 只用当请求方法为‘PUT’，‘POST’和‘PATCH’时可用
  // 最后一个函数需return出相应数据
  // 可以修改headers
  */

// axios.defaults.transformRequest = function(data,headers){
//     console.log("请求的参数")
//     console.log(JSON.stringify(data));
//     console.log(qs.stringify(data));
//     console.log(typeof data)
//     console.log(typeof JSON.stringify(data))
//     return qs.stringify(data);
// }

//`transformResponse` 在传递给 then/catch 前，允许修改响应数据
axios.defaults.transformResponse = function(data){
    if(isJSON(data)){
        return JSON.parse(data);
    }
    return data;
}

// `withCredentials` 表示跨域请求时是否需要使用凭证 默认false
axios.defaults.withCredentials = false;


/*定义允许的响应内容的最大尺寸*/
axios.defaults.maxContentLength = 2000000;


/*request拦截器*/
axios.interceptors.request.use(function (res) {
    console.log(`request interceptors,${JSON.stringify(res)},${new Date()}`);
    return res;
},function (error) {
    console.log(`request interceptors error,${JSON.stringify(error)},${new Date()}`);
    return Promise.reject(error)
});

/*response拦截器*/
axios.interceptors.response.use(function (resp) {
    console.log(`response interceptors,${JSON.stringify(resp)},${new Date()}`);
    return resp;
},function (error) {
    console.log(`response interceptors error,${JSON.stringify(error)},${new Date()}`);
    return Promise.reject(error.response);
});
