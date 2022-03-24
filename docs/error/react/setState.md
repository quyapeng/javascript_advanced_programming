#### setState


1. 使用setState
setState(partialState, callback)

 a. partialState : object或function
 用于产生与当前state合并的子集。

 b. callback:function
 state更新之后被调用。

2. 关于 setState()

 a. 不要直接修改State
 ```js
 // 错误示范
 this.state.name = 'mia';
 ```
 而是应该使用 `setState()`
 ```js
 this.setState({name: 'mia'})
 ```

 b. State 的更新可能是异步的
 出于性能考虑，React可能会把多个 `setState()` 调用合并成一个调用。
 ```js
// interface MyObj {
//     name: string
//     age?: number
// }

// const [date, setDate] = useState<MyObj>({ name: 'Tom', age: 18 });

// setDate({
//     ...date,
//     name: 'Jack'
// })



 ```

总结：
setState 只有在合成时间和生命周期函数中是异步的。
在原生时间和 setTimeout中都是同步的，这里的异步其实是批量更新。

 c. State 的更新可能会被合并

setState()