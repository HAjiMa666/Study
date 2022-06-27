# 浏览器内核
-  最常见的浏览器内核是 webkit和blink内核,这两个是渲染引擎

# HTML元素

## HTML简介
1. 元素标签可以去MDN上找，这里不赘述-[HTML网址](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
2. 元素的组成：开标签-属性-内容-闭合标签
3. HTML最上面的一句话`<!DOCTYPE html>`是用来确定当前文档类型的
4. `<html>`是根元素
5. 现在的但标签可以不加闭合符号.img可以写成`<img>`

## head中的元素
常见设置
1. title元素: 设置网站的标题
2. meta元素
   1. charset:字符编码,一般设置为"utf-8"

## 常见元素
第一阶段需掌握
- p,h
- img,a,iframe
- div,span

---
## HTML元素类型
1. 块级元素
2. 行内级元素

## HTML元素-表格元素
1. table: table的父亲
2. thead: table的头部
3. th:头部的单元格
4. tbody:table的主体
5. tr:table的普通行
6. td:table的单元格
7. tfoot: 表格的尾部
8. caption:表格的标题
9. border-collapse:用于表格的边距合并的
10. 跨列合并: 使用colspan.在最左边的单元格写上colspan属性,并且省略掉合并的td
11. 跨行合并:使用rowspan,在最上面的单元格写上rowspan属性,并且省略掉后面tr中的td
## HTML元素-列表元素
1. 有序列表: ol,li
2. 无序列表: ul,li
   1. ul的直接子元素是li
3. 定义列表: dl,dt,dd

## HTML元素-表单元素
1. form
2. input
3. textArea
4. select,option
5. button
6. label
7. 这些东西不懂的直接去mdn上查,我就不记录了

## Emmet语法
1. `+` 兄弟
2. `>`子代
3. `^` 上一级 或者给中间的元素加上括号,表示同一级
4. `$` 表示数字
5. `{}`为元素添加文本内容
## 内容补充
1. img是行内可替换元素.
2. 解释一下行内可替换元素,如果网络请求资源后,可以将这个元素进行一个替换,用请求过来的资源替换掉了当前的元素,则称为可替换元素,亦或是行内级元素可以设置宽高,也可以说明它是一个可替换元素
3. link是外部资源链接元素,规范了文档与外部资源的关系,它通常是在head元素当中,同时它也可以用来创建站点图表(favicon)
   1. href: 指定被链接资源的URL,可以是绝对的,也可以是相对的
   2. rel:指定链接类型,`icon`,`stylesheet`
4. 在rel中一个属性是`dns-prefetch`,这个是一个性能优化手段,它可以提前告诉浏览器中的该资源的请求需要进行DNS查询和协议握手,可以避免用户在使用的时候才去建立连接,浪费用户的时间

## HTML语义化元素
> 为了使得整个网站语义化,更好被搜索引擎所收入

1. header:头部元素
2. nav:导航元素
3. section:定义文档某个区域的元素
4. article:内容元素
5. aside:侧边元素
6. footer:底部元素

7. HTML5新增了对媒体类型的支持(audio和video) 
8. video标签子的自动播放必须要搭配静音使用才能够自动播放(在chrome浏览器中)
9. video的兼容性写法: 优先读取第一个video 如果不能用 就会使用source
```HTML
 <video src="">
    <source src=""></source>
 </video>
```
10. HTML5对`input`元素进行了一定的扩展
    1.  placeholder
    2.  multiple
    3.  autofocus
    4.  新增了很多type类型,具体的上MDN看吧

11. data-xx: HTML5新增的自定义属性类型,目的是为了可以让JS可以拿取到HTML元素自定义的值 element.dataset
