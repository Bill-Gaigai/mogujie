import request from '../utils/request'

export const Swipe = params => request({
    url: '/home/data',
    params
})

export const Multidata = params => request({
    url: '/home/multidata',
    params
})