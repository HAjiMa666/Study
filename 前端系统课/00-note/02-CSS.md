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

## CSS属性:display
1. block:块级元素
2. inline:行内元素,行内元素设置宽高不生效,但是对于`img`元素是不生效的,虽然img是行内元素,但是它同时也是一个可替换元素.
3. inline-block:行内块元素
4. none:隐藏元素

---
编写HTML的注意事项
- 块级元素,inline-block元素
  - 一般情况下,可以包含其他任何元素(比如块级元素,行内级元素,inline-block元素)
  - 特殊情况下,p元素不能包含其他块级元素
- 行内级元素(a,spacing,strong)
  - 一般情况下,只包含行内级元素

## CSS的隐藏方法

1. `display:none`:直接消失,不占有位置
2. `visibility: hidden | visible`:只是界面上隐藏,仍旧占据位置
3. `rgba`:设置颜色的透明度,为0时,元素会看不见,但仍旧占据位置
4. `opacity`:设置元素的透明度.但同时会设置所有的子元素也会有透明度.

## CSS属性:overflow
1. hidden:会将多余的元素隐藏
2. auto:会根据内容自己判断
3. scroll:会一直拥有滚动条
4. visible:即使溢出,仍旧会展示

## CSS的样式不生效的技巧
1. 选择器的优先级太低
2. 选择器没选中对应的元素
3. CSS属性的使用形式不对
   1. 元素不支持此CSS属性
   2. 浏览器不支持此CSS属性
   3. 被同类型的CSS属性覆盖

## CSS的盒子模型
盒子模型由以下东西组成
1. 内容(content)
2. 内边距(padding)
3. 边框(border)
4. 外边距(margin)

---
- ==注意==:width和height的默认值是`auto`
- max-width和min-width:代表最大宽度和最小宽度
- min-height和max-height: 这两个不常用
- padding: 如果是三个值的话,left没写的话,会使用right的值

---
border
1. border-width
2. border-style
3. border-color
4. border-radius: 百分比超过50%,效果是一样的,都是一个⚪

---
margin
1. 上下margin的传递
   1. margin-top的传递
      - 如果块级元素的顶部线和父元素的顶部线重叠,那么这个块级元素的margin-top值会传递给父元素
   2. margin-bottom传递
   - 如果块级元素的底部线和父元素的底部线重写,并且父元素的高度是`auto`,那么这个块级元素的margin-bottom值会传递给父元素

2. margin传递解决方案
   1. BFC:在父元素设置`overflow:auto`,还有其他的方案可以触发
   2. 给父元素设置border

3. 建议
   1. margin一般是用来设置兄弟之间的间距
   2. padding一般是用来设置父子之间的间距

4. 上下margin的折叠: 垂直方向上相邻的2个margin(margin-top,margin-bottom)有可能合并为1个margin,这种现象叫做collapse(折叠)
   1. 折叠计算规则:两个值进行比较,取较大的值
   2. 只设置其中一个元素的margin

5. 块级元素居中的方法: `margin:0 auto`的原理
   1. 首先我们要了解`块级元素=width+padding+margin+border`
   2. 当一个块级元素设置为具体宽度时,其他未设置时,此时padding,border都是0,此时margin-left和margin-right都是0
   3. 但是w3c规定一个块级元素,必须要占满整行,那么浏览器就会自动给margin-right进行分配这一行剩余的宽度
   4. 但是当我们设置`margin:0 auto`的时候,这时候就是相当于告诉浏览器,我将`margin-left`和`margin-right`设置为auto了,你这个时候需要将剩余的宽度平均分到left和right上去了,所以说这个时候margin就会帮忙将块级元素进行一个居中显示了

## CSS的属性: outline(外边距)
1. 不会占据实际空间
2. 实际使用场景: a连接的使用Tab栏选中的时候,不需要那个外边框
3. a元素直接使用outline也是可以消除掉的,因为直接设置属性,也是相当于给所有的伪类设置了属性,是一起设置的
4. input的默认outline去除

## CSS属性: box-shadow
1. 属性值: x偏移量 y偏移量 blur 向外扩散 color 阴影位置

## CSS属性: text-shadow
1. 用法上和box-shadow是一样的,就是没有向外扩散

## 行内非替换元素的注意事项
1. 对于像`span`这种元素来讲,设置padding,border,虽然看起来盒子内容撑大了,但是实际上并不占据位置
2. margin只能设置左右,上下不会设置