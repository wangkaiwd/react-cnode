/*
 * @Author: wangkaiwd
 * @Date: 2018-06-06 20:47:26
 * @Last Modified by: wangakiwd
 * @Last Modified time: 2018-06-06 21:07:21
 * @Desc: 项目api配置
 */

import { ajaxFunc } from './axiosConfig'
// 主题api接口

// 主题首页
export const fetchTopicIndex = ajaxFunc('/topics', 'get');
