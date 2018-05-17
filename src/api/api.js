import wepy from 'wepy'

export const menu = params => { return wepy.request({url: 'https://dev.weupay.com/pay/syscore/menu', data: params, method: 'POST'}).then(res => res) }
