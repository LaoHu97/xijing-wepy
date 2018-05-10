import wepy from 'wepy'

export const menu = params => { return wepy.request('https://test.weupay.com/pay/syscore/menu', params).then(res => res) }
