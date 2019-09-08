/*
 * @Description: visits 中间件
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-09-06 22:20:55
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-09-06 22:30:00
 */
export default function ({
  store,
  route,
  redirect
}) {
  store.commit('ADD_VISIT', route.path)
}
