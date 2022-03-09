/*
 * @Author: czx
 * @Date: 2022-03-09 17:06:22
 * @LastEditors: czx
 * @LastEditTime: 2022-03-09 18:11:50
 */
import * as React from "react"
const TextComponent = () => <div> hello , i am function component </div>
const toLearn = ['react', 'vue', 'webpack', 'nodejs']


class Index extends React.Component {
  status = false /* 状态 */
  renderFoot = () => <div> i am foot</div>
  render() {
    /* 以下都是常用的jsx元素节 */
    return <div style={{ marginTop: '100px' }}   >
      { /* element 元素类型 */}
      <div>hello,world</div>
      { /* fragment 类型 */}
      <React.Fragment>
        <div> 👽👽 </div>
      </React.Fragment>
      { /* text 文本类型 */}
      my name is alien
      { /* 数组节点类型 */}
      {toLearn.map(item => <div key={item} >let us learn {item} </div>)}
      { /* 组件类型 */}
      <TextComponent />
      { /* 三元运算 */}
      {this.status ? <TextComponent /> : <div>三元运算</div>}
      { /* 函数执行 */}
      {this.renderFoot()}
      <button onClick={() => console.log(this.render())} >打印render后的内容</button>
    </div>
  }
}
function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;


// {/* <div style={{ marginTop: '100px' }}>
// { /* element 元素类型 */}
// <div>hello,world</div>
// { /* fragment 类型 */}
// <React.Fragment>
//   <div> 👺👺</div>
// </React.Fragment>
// { /* text 文本类型 */}
// my name is alien
// { /* 数组节点类型 */}
// {toLearn.map(item => <div key={item} >let us learn {item} </div>)}
// {/* 三元运算 */}
// {isShow ? <span>函数被执行了</span> : "函数没有被执行"}
// { /* 组件类型 */}
// <TextComponent />
// {/* 函数执行 */}
// <button onClick={handleClick}>执行函数</button>
// </div> */}