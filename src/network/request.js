//封装
import axios from 'axios'

export function request(config) {
  //1.创建对应axios实例,进行配置
  const request = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //2.axios拦截器  拦截一些不符合服务器要求的信息进行处理/发送网络请求时加缓存加载图标/网络请求携带某些信息(登录tocken)
    //请求拦截  request2.interceptors.request.use(config,err)                 
    //响应拦截  request2.interceptors.response.use(res,err)
  request.interceptors.request.use(
    config =>{
      //console.log(config);
      //返回
      return config
    },
    error =>{
      console.log(error);
    }
  )
  //3.使用axios实例   本身就为一个Promise
  return request(config);

}