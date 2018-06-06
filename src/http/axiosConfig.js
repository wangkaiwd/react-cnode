/*
 * @Author: wangkaiwd
 * @Date: 2018-06-06 19:46:07
 * @Last Modified by: wangakiwd
 * @Last Modified time: 2018-06-06 21:08:53
 * @Desc: axios请求的封装
 */
import HTTP_CONFIG from './config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Toast } from 'antd-mobile'
import axios from 'axios'
const $axios = axios.create({
  baseURL: HTTP_CONFIG.HTTP_SERVER,
  timeout: 2000
})

/**
 * 拦截器配置
 *  request:请求拦截
 *  response:响应拦截
 */
$axios.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  },
  (err) => {
    NProgress.done();
    Toast.fail('请求出错!');
    return Promise.reject(err);
  }
)

$axios.interceptors.response.use(
  (res) => {
    if (res.status !== 200) {
      NProgress.done()
      Toast.info(res.data.msg);
      return Promise.reject(res);
    }
    NProgress.done();
    return res.data;
  },
  (err) => {
    Toast.fail('网络异常!');
    NProgress.done()
    return Promise.reject(err);
  }
)
/**
 * 请求封装的ajax函数
 * @param {string} url :请求地址
 * @param {string} [method="post"] :请求方式，默认为post
 */
export const ajaxFunc = (url, method = "post") => (data, success, fail) => {
  // let params = {};
  // method === 'post' ? params = data : params.params = data;
  // $axios[method](url, params)
  $axios({ url, method, data })
    .then(
      res => success(res),
      err => fail(err)
    )
}

