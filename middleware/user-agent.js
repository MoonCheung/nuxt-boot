/*
 * @Description: user-agent 中间件
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-09-06 22:18:19
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-09-06 22:44:14
 */
export default function (context) {
  // 给上下文对象增加 userAgent 属性（增加的属性可在 `asyncData` 和 `fetch` 方法中获取）
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
