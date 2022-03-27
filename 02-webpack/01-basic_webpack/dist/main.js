/*
 * @Author: czx
 * @Date: 2022-03-26 15:44:38
 * @LastEditors: czx
 * @LastEditTime: 2022-03-26 15:45:54
 * @description: 
 */
(() => { var o = { 86: o => { o.exports = { format: o => "￥" + o } } }, r = {}; function t(e) { var s = r[e]; if (void 0 !== s) return s.exports; var n = r[e] = { exports: {} }; return o[e](n, n.exports, t), n.exports } (() => { "use strict"; const { format: o } = t(86); console.log(100), console.log(o(1e4)) })() })();