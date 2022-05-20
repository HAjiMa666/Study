# CSS
## 基础知识
## 颜色的表示
- RGB,16进制
   1. RGB的三个位置的表示刚好对应16进制的每两位
   2. RGB(100,100,100) 等价于 #646464,因为100对应的16进制是64
   3. RGBA(0,0,0,255)和#000000ff,可以看到最后这两位,这两位代表的是alpha透明通道,代表透明度,255和ff都是代表二进制的1,要想增加透明度,那么对应的减少最后两位的值即可,转换规则是255*透明百分比,如果是16进制则需要转换成16进制

## 文本属性
1. text-decoration:
   1. none: 无任何装饰线
   2. underline: 下划线
   3. overline: 上划线
   4. line-through: 删除线

2. text-transform:
   1. capitalize: 单词首字母大写
   2. uppercase: 所有字符大写
   3. lowercase: 所有字符小写
   4. none: 没有影响

3. text-indent: 文字缩进
4. ✨text-align:
   1. left: 左对齐
   2. right: 右对齐
   3. center: 正中间对齐
   4. justify: 两端对齐
   5. 这个属性专门是针对==行内级元素==来进行对齐的

5. letter-spacing:字母之间的间距
6. word-spacing:单词之间的间距

## 字体属性
1. ✨font-size:
   - 字体单位
      1. px:固定css像素单位
      2. em:相对于父元素的字体大小,1em等价于父元素的字体大小
      3. 百分比:因为每个元素设置百分比相对于什么作比较是不固定的,如果要用百分比需要去MDN文档中查询,对应的百分比是相对于那个设置的

2. ✨font-family:设置文本字体
   - 可以设置多个字体
   - 浏览器会选择列表中第一个计算机已经安装的字体
   - 可以通过`@font-face`下载网络字体

3. ✨font-weight:设置文本粗细
   - normal:400
   - bold:700

4. font-style:设置文本的常规,斜体显示
   - normal:常规显示
   - italic(斜体):字体的斜体显示(通常会有专门字体)
   - oblique(斜体):文本倾斜显示(仅仅让文字倾斜)

5. font-variant(了解,基本不用):影响小字母的显示方式
   - normal
   - small-caps:将小写字母替换为缩小过的大写字母

6. line-height:一行文本所占据的高度
   1. 严格定义:两行文字基线(baseline)之间的间距
   ![行高的基线标准](./images/2022-05-20-11-24-17.png)
   ![line-height的原理图](./images/2022-05-20-13-37-09.png)

7. font:所有有关字体属性的缩写,是font-style,font-variant,font-weight,`font-size/line-height`和font-family属性的简写
   1. font-style,font-variant,font-weight可以随意调换顺序,也可以省略
   2. /line-height可以省略,如果不省略,必须放在font-size后面
   3. font-size,font-family不可以调换顺序,不可以省略

## CSS选择器
   1. 通用选择器
   2. 元素选择器
   3. 类选择器
   4. id选择器
   5. 属性选择器
   6. 后代选择器
   7. 直接子代选择器:`>`只靠近自己的第一个子代
   8. 相邻兄弟选择器:`+`只选出靠近自己的第一个兄弟
   9. 普遍兄弟选择器:`~`选出所有相邻的兄弟
   10. 交集选择器:`div.box`用于精准选中某一个元素
   11. 并集选择器:`,`
   12. 伪类
       1. 动态伪类(dynamic pseudo-classes)
       2. 目标伪类(target ~)
       3. 语言伪类(language ~)
       4. 元素状态伪类(UI element states ~)
       5. 结构伪类(structure ~)
       6. 否定伪类(negation)
       7. 伪类的注意事项:
          1. `:link,:visited,:hover.:active`,这四个顺序不能乱,一定要按照这个顺序来,简写:`LVHA`
   13. 伪元素:推荐使用两个冒号,伪类使用一个冒号
       1.  `::first-line/::first-letter`
       2.  `::before/::after`:注意其中的content不能被省略,即使是不想要内容,也需要保留.如果想要引入资源的时候,使用`url()`,动态的引入资源

## CSS的继承
### CSS的属性继承
1. 常见的属性继承
   - font-size
   - font-family
   - font-weight
   - line-height
   - color
   - text-align

2. 强制性继承,在子代元素设置`inherit`,能强制继承那些原先不能被继承的元素
3. 继承过来的值是计算值而不是设置值,是已经计算好的值,而不是那些相对单位的值,例如父级是2em,那么子级继承则是32px,并不是2em

### CSS属性的层叠
如何判断CSS属性的层叠
1. 选择器的权重,权重大的生效,根据权重判断优先级
2. 先后顺序,权重相同时,后面设置的生效
3. 权重顺序
   1. `!important`:10000
   2. 内联样式:1000
   3. id选择器:100
   4. 类选择器,属性选择器,伪类:10
   5. 元素选择器,伪元素:1
   6. 通配符:0