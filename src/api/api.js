import wepy from 'wepy'
const extConfig = wepy.getExtConfigSync ? wepy.getExtConfigSync() : {}
let preUrlPath = extConfig.attr.host

export const selectOne = params => { return wepy.request({url: `${preUrlPath}/admin/api/mini/1/selectOne`, data: params, method: 'POST'}).then(res => res.data) }

export const querySmallApp = params => { return wepy.request({url: `${preUrlPath}/admin/api/mini/1/querySmallApp`, data: params, method: 'POST'}).then(res => res.data) }

export const queryAppNews = params => { return wepy.request({url: `${preUrlPath}/admin/api/mini/1/queryAppNews`, data: params, method: 'POST'}).then(res => res.data) }

export const getNewDetail = params => { return wepy.request({url: `${preUrlPath}/admin/api/mini/1/getNewDetail`, data: params, method: 'POST'}).then(res => res.data) }
