import wepy from 'wepy'
let preUrlPath = 'https://dev.weupay.com'

export const menu = params => { return wepy.request({url: 'https://dev.weupay.com/pay/syscore/menu', data: params, method: 'POST'}).then(res => res) }

export const selectOne = params => { return wepy.request({url: `${preUrlPath}/admin/api/wd/200/1/selectOne`, data: params, method: 'POST'}).then(res => res.data) }

export const querySmallApp = params => { return wepy.request({url: `${preUrlPath}/admin/api/wd/300/1/querySmallApp`, data: params, method: 'POST'}).then(res => res.data) }

export const queryAppNews = params => { return wepy.request({url: `${preUrlPath}/admin/api/wd/400/1/queryAppNews`, data: params, method: 'POST'}).then(res => res.data) }

export const getNewDetail = params => { return wepy.request({url: `${preUrlPath}/admin/api/wd/400/1/getNewDetail`, data: params, method: 'POST'}).then(res => res.data) }
