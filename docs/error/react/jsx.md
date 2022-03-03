#### jsx

1. 基本使用,表达式用 {}包裹
```js
const name = 'react test';
const jsx = <div>hello, {name}</div>
```
2. 函数
```js
const obj = {
    firstName: '冰',
    lastName:'敦敦'
}
function formatName(obj){
    return `${obj.firstName}${obj.lastName}`;
}

const jsx = <div>{format(obj)}</div>
```

3. JSX对象
```js
const jsxc = <div>green</div>
const jsx = jsxc
```

4. 条件语句
```js
const jsxc = <div>green</div>;
const show = false;
const jsx = <div>
            {show?jsxc:'登录 '}
            {show&&jsxc}
    </div>
```

5. 数组
```js
const arr = [0,1,2]
const jsx = <ul>
                {a.map(i=>{
                    <li key={i}>{i}</li>
                })}
            </ul>
```

6. 属性
```js
import logo from 'logo.png';
const jsx = <img src={logo} className="logo" style={{width:'100%', height: '50%'}}/>

```

7. 模块化
```js
 import styles from 'index.module.css'
 /** index.module.css
  * .app{}
  * 
  * ***/ 

 const jsx = <div className={styles.app}></div>
```

