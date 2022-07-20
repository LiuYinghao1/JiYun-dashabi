import request from '../utils/request'

/**
 * 登录接口
 * @param {*} model
 * @returns
 */
export const getLogin = (model) => request.post('/login', model)
/**
 * 用户信息
 * @param {*} model
 * @returns
 */
export const getInfo = (model) => request.post('/getinfo', model)

/**
 * 请求卡片数据
 * @param {*} model 
 * @returns 
 */
export const getCard=(model)=>request.get('/statistics1',model)

/**
 * ECharts图表
 * @param {*} model 
 * @returns 
 */
export const getEcharts=(model)=>request.get('/statistics3?type=hour',model)