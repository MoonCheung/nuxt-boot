/*
 * @Description: Vuex 状态管理
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-09-06 22:26:09
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-09-06 23:07:48
 */

export const state = () => ({
  visits: []
})

export const mutations = {
  ADD_VISIT(state, path) {
    state.visits.push({
      path,
      date: new Date().toJSON()
    })
  }
}
