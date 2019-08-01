
/*axios中文说明文档*/
//https://www.kancloud.cn/yunye/axios/234845

import {isJSON} from '../tool/tool'

import {Spin} from 'iview'

import 'iview/dist/styles/iview.css'

import axios from 'axios'

import Vue from 'vue'

import qs from 'qs'

Vue.prototype.$axios = axios


const serverurl = "https://avcapdemo.zealcomm.cn:8083"
//https://avcapdemo.zealcomm.cn:8083
//http://localhost:8082
/**/
axios.defaults.baseURL = serverurl;

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
    // console.log(data);
    // console.log(typeof data)
    if(isJSON(data)){
        return JSON.parse(data);
    }
    return data;
}

// `withCredentials` 表示跨域请求时是否需要使用凭证 默认false
axios.defaults.withCredentials = false;


/*定义允许的响应内容的最大尺寸*/
axios.defaults.maxContentLength = 20000;


/*request拦截器*/
axios.interceptors.request.use(function (res) {
    Spin.show({
        render: (h) => {
            return h('div', [
                h('Icon', {
                    'class': 'demo-spin-icon-load',
                    props: {
                        type: 'ios-loading',
                        size: 18
                    }
                }),
                h('div', 'Loading')
            ])
        }
    });
    console.log('request interceptors')
    console.log(res)
    return res;
},function (error) {
    console.log('request interceptors error')
    console.log(error)
    Spin.hide();
    return Promise.reject(error)
})

/*response拦截器*/
axios.interceptors.response.use(function (rep) {
    console.log("response interceptors")
    console.log(rep)
    Spin.hide();
    if (rep.code == 401){
        localStorage.removeItem('zaccesstoken');
        localStorage.removeItem('zuserId');
    }
    return rep;
},function (error) {
    console.log("response interceptors error")
    // console.log(error)
     Spin.hide();
    return Promise.reject(error)
})
