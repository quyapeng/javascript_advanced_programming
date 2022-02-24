# 语言基础

任何语言的核心所描述的都是这门语言在最基本的层面上如何工作，涉及语法、操作符、数据类型以及内置功能，在此基础之上才可以构建复杂的解决方案。如前所述，ECMA-262以一个名为ECMAScript的伪语言的形式，定义了 JavaScript 的所有这些方面。
ECMA-262 第 5 版（ES5）定义的 ECMAScript，是目前为止实现得最为广泛（即受浏览器支持最好）的一个版本。第 6 版（ES6）在浏览器中的实现（即受支持）程度次之。到 2017 年底，大多数主流浏览器几乎或全部实现了这一版的规范。为此，本章接下来的内容主要基于 ECMAScript 第 6 版。
### 3.1 语法
ECMAScript 的语法很大程度上借鉴了 C 语言和其他类 C 语言，如 Java 和 Perl。熟悉这些语言的开发者，应该很容易理解 ECMAScript 宽松的语法。

#### 3.1.1 区分大小写
首先要知道的是，ECMAScript 中一切都区分大小写。无论是变量、函数名还是操作符，都区分大小写。换句话说，变量 test 和变量 Test 是两个不同的变量。类似地，typeof 不能作为函数名，因为它是一个关键字（后面会介绍）。但 Typeof 是一个完全有效的函数名。
#### 3.1.2 标识符
所谓标识符，就是变量、函数、属性或函数参数的名称。标识符可以由一或多个下列字符组成：
1. 第一个字符必须是一个字母，下划线(_)或者美元符号($)。
2. 剩下的其他字符可以是字母，下划线，美元符号或者数字。
标识符中的字母可以是扩展 ASCII（Extended ASCII）中的字母，也可以是 Unicode 的字母字符，如 À 和 Æ（但不推荐使用）。
按照惯例，ECMAScript 标识符使用驼峰大小写形式，即第一个单词的首字母小写，后面每个单词的首字母大写，如：
```js
firstSecond 
myCar 
doSomethingImportant 
```
虽然这种写法并不是强制性的，但因为这种形式跟 ECMAScript 内置函数和对象的命名方式一致，所以算是最佳实践。

#### 3.1.3 注释
ECMAScript 采用 C 语言风格的注释，包括单行注释和块注释。单行注释以两个斜杠字符开头，如：
```js
// 单行注释
```
块注释以一个斜杠和一个星号（/*）开头，以它们的反向组合（*/）结尾，如：
```js
/* 这是多行
注释 */
```

#### 3.1.4 严格模式
ECMAScript 5 增加了严格模式（strict mode）的概念。严格模式是一种不同的 JavaScript 解析和执行模型，ECMAScript 3 的一些不规范写法在这种模式下会被处理，对于不安全的活动将抛出错误。要对整个脚本启用严格模式，在脚本开头加上这一行：
`"use strict"; `
虽然看起来像个没有赋值给任何变量的字符串，但它其实是一个预处理指令。任何支持的 JavaScript引擎看到它都会切换到严格模式。选择这种语法形式的目的是不破坏 ECMAScript 3 语法。也可以单独指定一个函数在严格模式下执行，只要把这个预处理指令放到函数体开头即可：

```js
function doSomething() { 
 "use strict"; 
 // 函数体
} 
```
严格模式会影响 JavaScript 执行的很多方面，因此本书在用到它时会明确指出来。所有现代浏览器都支持严格模式。

#### 3.1.5 语句
ECMAScript 中的语句以分号结尾。省略分号意味着由解析器确定语句在哪里结尾，如下面的例子所示：
```js
let sum = a + b // 没有分号也有效，但不推荐
let diff = a - b; // 加分号有效，推荐
```
即使语句末尾的分号不是必需的，也应该加上。记着加分号有助于防止省略造成的问题，比如可以避免输入内容不完整。此外，加分号也便于开发者通过删除空行来压缩代码（如果没有结尾的分号，只删除空行，则会导致语法错误）。加分号也有助于在某些情况下提升性能，因为解析器会尝试在合适的位置补上分号以纠正语法错误。
多条语句可以合并到一个 C 语言风格的代码块中。代码块由一个左花括号`（{）`标识开始，一个右花括号`（}）`标识结束：
```js
if (test) { 
 test = false; 
 console.log(test); 
} 
```
if 之类的控制语句只在执行多条语句时要求必须有代码块。不过，最佳实践是始终在控制语句中使用代码块，即使要执行的只有一条语句，如下例所示：
```js
// 有效，但容易导致错误，应该避免
if (test) 
 console.log(test); 
// 推荐
if (test) { 
 console.log(test); 
} 
```
在控制语句中使用代码块可以让内容更清晰，在需要修改代码时也可以减少出错的可能性。
### 关键字与保留字

ECMA-262 描述了一组保留的关键字，这些关键字有特殊用途，比如表示控制语句的开始和结束，或者执行特定的操作。按照规定，保留的关键字不能用作标识符或属性名。ECMA-262 第 6 版规定的所有关键字如下：
break do in typeof 
case else instanceof var 
catch export new void 
class extends return while 
const finally super with 
continue for switch yield 
debugger function this 
default if throw 
delete import try 

规范中也描述了一组未来的保留字，同样不能用作标识符或属性名。虽然保留字在语言中没有特定用途，但它们是保留给将来做关键字用的。以下是 ECMA-262 第 6 版为将来保留的所有词汇。始终保留: 
enum 

严格模式下保留: 
implements package public 
interface protected static 
let private 

模块代码中保留: 
await
这些词汇不能用作标识符，但现在还可以用作对象的属性名。一般来说，最好还是不要使用关键字和保留字作为标识符和属性名，以确保兼容过去和未来的 ECMAScript 版本。
### 变量

ECMAScript 变量是松散类型的，意思是变量可以用于保存任何类型的数据。每个变量只不过是一个用于保存任意值的命名占位符。有 3 个关键字可以声明变量：`var`、`const` 和 `let`。其中，`var` 在ECMAScript 的所有版本中都可以使用，而 `const` 和 `let` 只能在 ECMAScript 6 及更晚的版本中使用。

#### var关键字

要定义变量，可以使用 var 操作符（注意 var 是一个关键字），后跟变量名（即标识符，如前所述）：
```js
var message; 
```
这行代码定义了一个名为 message 的变量，可以用它保存任何类型的值。（不初始化的情况下，变量会保存一个特殊值 undefined，下一节讨论数据类型时会谈到。）ECMAScript 实现变量初始化，因此可以同时定义变量并设置它的值：
```js
var message = "hi"; 
```

这里，message 被定义为一个保存字符串值 hi 的变量。像这样初始化变量不会将它标识为字符串类型，只是一个简单的赋值而已。随后，不仅可以改变保存的值，也可以改变值的类型：

```js
var message = "hi"; 
message = 100; // 合法，但不推荐
```

在这个例子中，变量 message 首先被定义为一个保存字符串值 hi 的变量，然后又被重写为保存了数值 100。虽然不推荐改变变量保存值的类型,但这在 ECMAScript 中是完全有效的。
1. var 声明作用域
关键的问题在于，使用 var 操作符定义的变量会成为包含它的函数的局部变量。比如，使用 var在一个函数内部定义一个变量，就意味着该变量将在函数退出时被销毁：
```js
function test() { 
 var message = "hi"; // 局部变量
} 
test(); 
console.log(message); // 出错！
```
这里，message 变量是在函数内部使用 var 定义的。函数叫 test()，调用它会创建这个变量并给它赋值。调用之后变量随即被销毁，因此示例中的最后一行会导致错误。不过，在函数内定义变量时省略 var 操作符，可以创建一个全局变量：
```js
function test() { 
  message = "hi"; // 全局变量
} 
test(); 
console.log(message); // "hi" 
```
去掉之前的 var 操作符之后，message 就变成了全局变量。只要调用一次函数 test()，就会定义
这个变量，并且可以在函数外部访问到。

注意：
虽然可以通过省略 var 操作符定义全局变量，但不推荐这么做。在局部作用域中定义的全局变量很难维护，也会造成困扰。这是因为不能一下子断定省略var是不是有意而为，在严格模式下，如果像这个月给未声明的变量赋值，则会导致抛出ReferenceError。

如果需要定义多个变量，可以在一条语句中用逗号分隔每个变量（及可选的初始化）：
```js
var message = "hi", 
 found = false, 
 age = 29; 
 ```
这里定义并初始化了 3 个变量。因为 ECMAScript 是松散类型的，所以使用不同数据类型初始化的变量可以用一条语句来声明。插入换行和空格缩进并不是必需的，但这样有利于阅读理解。在严格模式下，不能定义名为 eval 和 arguments 的变量，否则会导致语法错误。
2. var 声明提升
使用 var 时，下面的代码不会报错。这是因为使用这个关键字声明的变量会自动提升到函数作用域顶部：
```js
function foo() { 
 console.log(age); 
 var age = 26; 
} 
foo(); // undefined 
```
之所以不会报错，是因为 ECMAScript 运行时把它看成等价于如下代码：
```js
function foo() { 
var age; 
 console.log(age); 
 age = 26; 
} 
foo(); // undefined 
```
这就是所谓的“提升”（hoist），也就是把所有变量声明都拉到函数作用域的顶部。此外，反复多次使用 var 声明同一个变量也没有问题：
```js
function foo() { 
 var age = 16; 
 var age = 26; 
 var age = 36; 
 console.log(age); 
} 
foo(); // 36
```
#### let 声明

let 跟var的作用差不多，但有着非常重要的区别。明显的区别是，let声明的范围是块作用域，而var声明的范围是函数作用域。
```js
if (true) { 
 var name = 'Matt'; 
 console.log(name); // Matt 
} 
console.log(name);

if (true) { 
 let age = 26; 
 console.log(age); // 26 
} 
console.log(age); // ReferenceError: age 没有定义
```
在这里，age 变量之所以不能在 if 块外部被引用，是因为它的作用域仅限于该块内部。块作用域是函数作用域的子集，因此适用于 var 的作用域限制同样也适用于 let。
let 也不允许同一个块作用域中出现冗余声明。这样会导致报错：
```js
var name; 
var name; 
let age; 
let age; // SyntaxError；标识符 age 已经声明过了

```
当然， JavaScript 引擎会记录用于变量声明的标识符及所在的块作用域，因此嵌套使用相同的标识符不会报错，而是因为同一个块中没有重复声明。
```js
var name = 'Nicholas'; 
console.log(name); // 'Nicholas' 
if (true) { 
 var name = 'Matt'; 
 console.log(name); // 'Matt' 
} 
let age = 30; 
console.log(age); // 30 
if (true) { 
 let age = 26; 
 console.log(age); // 26 
}
```

对声明冗余报错不会因混用 let 和 var 而受影响。这两个关键字声明的并不是不同类型的变量，它们只是指出变量在相关作用域如何存在。
```js
var name; 
let name; // SyntaxError 
let age; 
var age; // SyntaxError
```
1. 暂时性死区
  let 和 var 的另一个重要的区别就是，let声明的变量不会在作用域中被提升。
```js
// name 会被提升
console.log(name); // undefined 
var name = 'Matt'; 
// age 不会被提升
console.log(age); // ReferenceError：age 没有定义
let age = 26;
```
在解析代码时， JavaScript 引擎也会注意出现在块后面的let 声明，只不过在此之前不能以任何方式来引用未声明的变量。在let 声明之前的执行瞬间被称为‘暂时性死区’（temporal dead zone），在此阶段引用任何后面才声明的变量都会抛出参考错误ReferenceError。

2. 全局声明
   与var关键字不同的，使用let在全局作用域中声明的变量不会称为window的属性，var声明的变量则会。
```js
var name = 'Matt'; 
console.log(window.name); // 'Matt' 
let age = 26; 
console.log(window.age); // undefined
```
不过，let 声明仍然是在全局作用域中发生的，相应变量会在页面的生命周期内存续。因此，为了避免 SyntaxError，必须确保页面不会重复声明同一个变量。
3. 条件声明

在使用 var 声明变量时，由于声明会被提升，JavaScript 引擎会自动将多余的声明在作用域顶部合并为一个声明。因为 let 的作用域是块，所以不可能检查前面是否已经使用 let 声明过同名变量，同时也就不可能在没有声明的情况下声明它。


<script> 
 var name = 'Nicholas'; 
 let age = 26; 
</script> 


<script> 

 // 假设脚本不确定页面中是否已经声明了同名变量
 // 那它可以假设还没有声明过
 var name = 'Matt'; 
 // 这里没问题，因为可以被作为一个提升声明来处理
 // 不需要检查之前是否声明过同名变量
 let age = 36; 
 // 如果 age 之前声明过，这里会报错
</script> 


使用 try/catch 语句或 typeof 操作符也不能解决，因为条件块中 let 声明的作用域仅限于该块。


<script> 
 let name = 'Nicholas'; 
 let age = 36; 
</script> 
<script> 
 // 假设脚本不确定页面中是否已经声明了同名变量
 // 那它可以假设还没有声明过
 if (typeof name === 'undefined') { 
 let name; 
 } 
 // name 被限制在 if {} 块的作用域内
 // 因此这个赋值形同全局赋值
 name = 'Matt'; 
 try { 
 console.log(age); // 如果 age 没有声明过，则会报错
 } 
 catch(error) { 
 let age;
 } 
 // age 被限制在 catch {}块的作用域内
 // 因此这个赋值形同全局赋值
 age = 26; 
</script> 
为此，对于 let 这个新的 ES6 声明关键字，不能依赖条件声明模式。
注意：
不能使用let进行条件式声明是件好吃，因为条件声明是一种反模式，他让程序变得更难理解。如果你发现自己在使用这个模式，那一定有更好的替代方式。
4. for 循环中的 let 声明
    let 出现之前，for 循环定义的迭代变量会渗透到循环体外部：
```js
for (var i = 0; i < 5; ++i) { 
 // 循环逻辑
} 
console.log(i); // 5
```

改成使用 let 之后，这个问题就消失了，因为迭代变量的作用域仅限于 for 循环块内部：
```js
for (let i = 0; i < 5; ++i) { 
 // 循环逻辑
} 
console.log(i); // ReferenceError: i 没有定义
```
在使用 var 的时候，最常见的问题就是对迭代变量的奇特声明和修改：
```js
for(var i = 0;i<5;++i>){
  setTimeout(()=>console.log(i), 0)
}

// 你可能以为会输出 0、1、2、3、4 
// 实际上会输出 5、5、5、5、5
```

之所以会这样，是因为在退出循环时，迭代变量保存的是导致循环退出的值：5。在之后执行超时逻辑时，所有的 i 都是同一个变量，因而输出的都是同一个最终值。
而在使用 let 声明迭代变量时，JavaScript 引擎在后台会为每个迭代循环声明一个新的迭代变量。每个 setTimeout 引用的都是不同的变量实例，所以 console.log 输出的是我们期望的值，也就是循环执行过程中每个迭代变量的值。
```js
for (let i = 0; i < 5; ++i) { 
 setTimeout(() => console.log(i), 0) 
} 
// 会输出 0、1、2、3、4 
```
这种每次迭代声明一个独立变量实例的行为适用于所有风格的 for 循环，包括 for-in 和 for-of循环。
#### const 声明
const的行为与let基本相同，唯一一个重要的区别是用他声明变量时必须同时初始化变量，且尝试修改const声明的变量会导致运行时错误。

```js
const age = 26;
age = 30; // TypeError :给常量赋值
// const 也不允许重复声明
const name = 'Matt'; 
const name = 'Nicholas'; // SyntaxError 
// const 声明的作用域也是块
const name = 'Matt'; 
if (true) { 
 const name = 'Nicholas'; 
} 
console.log(name); // Matt

```

#### 声明风格及最佳实践

### 数据类型


### 操作符

### 语句

### 函数

### 小结