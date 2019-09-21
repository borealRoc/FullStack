import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import App from './App'
// eslint-disable-next-line
import Lifecycle from './Lifecycle'
// eslint-disable-next-line
import Cart from './Cart'
import Message from './components/Message';

const $root = document.getElementById('root')
// ReactDOM.render(<App/>, $root)
// ReactDOM.render(<Lifecycle/>, $root)
// ReactDOM.render(<Cart title='React购物车'/>, $root)
ReactDOM.render(<Message/>, $root)

// 动态渲染
// React 只更新它需要更新的部分
// setInterval(() => {
//     ReactDOM.render(<h1>{new Date().toLocaleTimeString()}</h1>, $root)
// }, 1000)