#### 组件

从概念上类似与JavaScript函数。他接受任意的入参（props）,并返回用于描述页面展示内容的React元素。
组件有两种形式： class组件和function组件

1. class组件

class组件通常拥有状态和声明周期，继承于Component，实现render方法。用class组件创建一个Clock。

```js

import React, { Component } from 'react';

export default class ClassComponent extends Component {
  timer: NodeJS.Timer | undefined;
  constructor(props: any) {
    super(props);
    // 存储状态
    this.state = {
      date: new Date(),
    };
  }

  // 组件挂在完成之后执行
  componentDidMount() {
    this.timer = setInterval(() => {
        // 更新状态专用方法
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  // 组件卸载之前执行
  componentWillUnmount(){
      clearInterval(this.timer)
  }
  render() {
    const { date }: any = this.state;

    return (
      <div>
        <h3>ClassComponent</h3>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    );
  }
}



```




2. function组件
  function组件通常无状态，仅关注内容展示，返回渲染结果即可。
从React16.8开始，引入了hooks,函数组件也能拥有状态。

```js

import React, { useState, useEffect } from 'react';

export default FunComponent;

function FunComponent(props: any) {
  console.log(props);
  const [date, setDate] = useState(new Date());
  // useEffect 相当于componentDidMount【组件挂在完成之后执行】和componentWillUnmount【组件卸载之前执行】集合
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    // 销毁对象
    return () => clearInterval(timer);
  }, []);
  // 依赖项
  return (
    <div>
      <h3>FunComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}


```