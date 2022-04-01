# 语言基础

任何语言的核心所描述的都是这门语言在最基本的层面上如何工作，涉及语法、操作符、数据类型以及内置功能，在此基础之上才可以构建复杂的解决方案。如前所述，ECMA-262 以一个名为 ECMAScript 的伪语言的形式，定义了 JavaScript 的所有这些方面。
ECMA-262 第 5 版（ES5）定义的 ECMAScript，是目前为止实现得最为广泛（即受浏览器支持最好）的一个版本。第 6 版（ES6）在浏览器中的实现（即受支持）程度次之。到 2017 年底，大多数主流浏览器几乎或全部实现了这一版的规范。为此，本章接下来的内容主要基于 ECMAScript 第 6 版。

### 3.1 语法

ECMAScript 的语法很大程度上借鉴了 C 语言和其他类 C 语言，如 Java 和 Perl。熟悉这些语言的开发者，应该很容易理解 ECMAScript 宽松的语法。

#### 3.1.1 区分大小写

首先要知道的是，ECMAScript 中一切都区分大小写。无论是变量、函数名还是操作符，都区分大小写。换句话说，变量 test 和变量 Test 是两个不同的变量。类似地，typeof 不能作为函数名，因为它是一个关键字（后面会介绍）。但 Typeof 是一个完全有效的函数名。

#### 3.1.2 标识符

所谓标识符，就是变量、函数、属性或函数参数的名称。标识符可以由一或多个下列字符组成：

1. 第一个字符必须是一个字母，下划线(\_)或者美元符号($)。
2. 剩下的其他字符可以是字母，下划线，美元符号或者数字。
   标识符中的字母可以是扩展 ASCII（Extended ASCII）中的字母，也可以是 Unicode 的字母字符，如 À 和 Æ（但不推荐使用）。
   按照惯例，ECMAScript 标识符使用驼峰大小写形式，即第一个单词的首字母小写，后面每个单词的首字母大写，如：

```js
firstSecond;
myCar;
doSomethingImportant;
```

虽然这种写法并不是强制性的，但因为这种形式跟 ECMAScript 内置函数和对象的命名方式一致，所以算是最佳实践。

#### 3.1.3 注释

ECMAScript 采用 C 语言风格的注释，包括单行注释和块注释。单行注释以两个斜杠字符开头，如：

```js
// 单行注释
```

块注释以一个斜杠和一个星号（/_）开头，以它们的反向组合（_/）结尾，如：

```js
/* 这是多行
注释 */
```

#### 3.1.4 严格模式

ECMAScript 5 增加了严格模式（strict mode）的概念。严格模式是一种不同的 JavaScript 解析和执行模型，ECMAScript 3 的一些不规范写法在这种模式下会被处理，对于不安全的活动将抛出错误。要对整个脚本启用严格模式，在脚本开头加上这一行：
`"use strict";`
虽然看起来像个没有赋值给任何变量的字符串，但它其实是一个预处理指令。任何支持的 JavaScript 引擎看到它都会切换到严格模式。选择这种语法形式的目的是不破坏 ECMAScript 3 语法。也可以单独指定一个函数在严格模式下执行，只要把这个预处理指令放到函数体开头即可：

```js
function doSomething() {
  'use strict';
  // 函数体
}
```

严格模式会影响 JavaScript 执行的很多方面，因此本书在用到它时会明确指出来。所有现代浏览器都支持严格模式。

#### 3.1.5 语句

ECMAScript 中的语句以分号结尾。省略分号意味着由解析器确定语句在哪里结尾，如下面的例子所示：

```js
let sum = a + b; // 没有分号也有效，但不推荐
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
if (test) console.log(test);
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

ECMAScript 变量是松散类型的，意思是变量可以用于保存任何类型的数据。每个变量只不过是一个用于保存任意值的命名占位符。有 3 个关键字可以声明变量：`var`、`const` 和 `let`。其中，`var` 在 ECMAScript 的所有版本中都可以使用，而 `const` 和 `let` 只能在 ECMAScript 6 及更晚的版本中使用。

#### var 关键字

要定义变量，可以使用 var 操作符（注意 var 是一个关键字），后跟变量名（即标识符，如前所述）：

```js
var message;
```

这行代码定义了一个名为 message 的变量，可以用它保存任何类型的值。（不初始化的情况下，变量会保存一个特殊值 undefined，下一节讨论数据类型时会谈到。）ECMAScript 实现变量初始化，因此可以同时定义变量并设置它的值：

```js
var message = 'hi';
```

这里，message 被定义为一个保存字符串值 hi 的变量。像这样初始化变量不会将它标识为字符串类型，只是一个简单的赋值而已。随后，不仅可以改变保存的值，也可以改变值的类型：

```js
var message = 'hi';
message = 100; // 合法，但不推荐
```

在这个例子中，变量 message 首先被定义为一个保存字符串值 hi 的变量，然后又被重写为保存了数值 100。虽然不推荐改变变量保存值的类型,但这在 ECMAScript 中是完全有效的。

1. var 声明作用域
   关键的问题在于，使用 var 操作符定义的变量会成为包含它的函数的局部变量。比如，使用 var 在一个函数内部定义一个变量，就意味着该变量将在函数退出时被销毁：

```js
function test() {
  var message = 'hi'; // 局部变量
}
test();
console.log(message); // 出错！
```

这里，message 变量是在函数内部使用 var 定义的。函数叫 test()，调用它会创建这个变量并给它赋值。调用之后变量随即被销毁，因此示例中的最后一行会导致错误。不过，在函数内定义变量时省略 var 操作符，可以创建一个全局变量：

```js
function test() {
  message = 'hi'; // 全局变量
}
test();
console.log(message); // "hi"
```

去掉之前的 var 操作符之后，message 就变成了全局变量。只要调用一次函数 test()，就会定义
这个变量，并且可以在函数外部访问到。

注意：
虽然可以通过省略 var 操作符定义全局变量，但不推荐这么做。在局部作用域中定义的全局变量很难维护，也会造成困扰。这是因为不能一下子断定省略 var 是不是有意而为，在严格模式下，如果像这个月给未声明的变量赋值，则会导致抛出 ReferenceError。

如果需要定义多个变量，可以在一条语句中用逗号分隔每个变量（及可选的初始化）：

```js
var message = 'hi',
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

let 跟 var 的作用差不多，但有着非常重要的区别。明显的区别是，let 声明的范围是块作用域，而 var 声明的范围是函数作用域。

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
   let 和 var 的另一个重要的区别就是，let 声明的变量不会在作用域中被提升。

```js
// name 会被提升
console.log(name); // undefined
var name = 'Matt';
// age 不会被提升
console.log(age); // ReferenceError：age 没有定义
let age = 26;
```

在解析代码时， JavaScript 引擎也会注意出现在块后面的 let 声明，只不过在此之前不能以任何方式来引用未声明的变量。在 let 声明之前的执行瞬间被称为‘暂时性死区’（temporal dead zone），在此阶段引用任何后面才声明的变量都会抛出参考错误 ReferenceError。

2. 全局声明
   与 var 关键字不同的，使用 let 在全局作用域中声明的变量不会称为 window 的属性，var 声明的变量则会。

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
不能使用 let 进行条件式声明是件好吃，因为条件声明是一种反模式，他让程序变得更难理解。如果你发现自己在使用这个模式，那一定有更好的替代方式。

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
  setTimeout(() => console.log(i), 0);
}
// 会输出 0、1、2、3、4
```

这种每次迭代声明一个独立变量实例的行为适用于所有风格的 for 循环，包括 for-in 和 for-of 循环。

#### const 声明

const 的行为与 let 基本相同，唯一一个重要的区别是用他声明变量时必须同时初始化变量，且尝试修改 const 声明的变量会导致运行时错误。

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

const 声明的限制是适用于她只想的变量的引用，换句话说就是，如果 const 变量引用的是一个对象，那么修改这个对象内部的属性并不违反 const 的限制。

```js
const person = {};
person, (name = 'tom'); // ok
```

JavaScript 引擎会为 for 循环中的 let 声明分别创建独立的变量实例，虽然 const 变量跟 let 变量很相似，但是不能用 const 来声明迭代变量，因为迭代变量会自增。

```js
for (const i = 0; i < 10; i++) {} // TypeError: 给常量赋值
```

不过如果你只想用 const 声明一个不会被修改的 for 循环变量，那也是可以的，也就是说每次迭代只是创建一个新的变量，这对 for-in 和 for-of 循环特别有意义。

```js
let i = 0;
for(const j = 7;i<5;i++>){
  console.log(j);
}// 7 7 7 7 7
for(const key in {a:1, b:2}){
  console.log(key);
}//a,b
for(const value of [1,2,3,4,5]){
  console.log(value);
}//1,2,3,4,5
```

#### 声明风格及最佳实践

ECMAScript 6 增加 let 和 const 从客观上为这门语言更精确的生命作用域和语义提供了更好的支持。行为怪异的 var 所造成的各种问题已经让 JavaScript 社区位置苦恼了很多年，随着这两个新关键字的出现，此女人有助于提升代码质量的最佳实践也逐渐显现。

1. 不使用 var
   有了 let 和 const。大多数开发者会发现自己不再需要 var，限制自己只使用；let 和 const 有助于提升代码质量，因为变量有了明确的作用域。声明位置，以及不变的值。
2. const 优先，let 次之
   使用 const 声明可以让浏览器运行时强制保持变量不变，也可以让静态代码分析工具提前发现不合法的赋值操作。因此，很多开发者认为应该优先使用 const 来声明变量，只在提前知道未来会有修改时才用 let，这样可以让开发者更有存此南方人推断某些变量的值永远不会变，同时也能迅速发现因意外赋值导致的非预期行为。

### 数据类型

ECMAScript 有 6 种简单数据类型，也称为原始类型：Undefined,Null,Boolean,String,Number,Symbol。
Symbel 是 ECMAScript 6 新增的。还有一种复杂数据类型叫 Object 对象。Object 是一种无序名值对的集合，因为在 ECMAScript 中不能定义自己的数据类型，所有值都可以用上述 7 中数据类型之一来表示。只有 7 种数据类型似乎不足以表示全部数据，但是 ECMAScript 的数据类型很灵活，一种数据类型可以当作多重数据类型来使用。

#### typeof 操作符

因为 ECMAScript 的类型系统是松散的，所以需要一种手段来确定任意变量的数据类型。typeof 操作符就是为此而生。对一个值使用 typeof 操作符会反悔下列字符串之一

1. undefined 表示值为定义
2. boolean 表示值为布尔
3. string 表示值为字符串
4. number 表示值为数值
5. object 表示值为对象，而不是函数或者 null
6. function 表示值为函数
7. symbol 表示值为符号

```js
let message = 'some string';
console.log(typeof message); // "string"
console.log(typeof message); // "string"
console.log(typeof 95); // "number"
```

在这个例子中，我们把一个变量（message）和一个数值字面量传给了 typeof 操作符。注意，因为 typeof 是一个操作符而不是函数，所以不需要参数（但可以使用参数）。
注意 typeof 在某些情况下返回的结果可能会让人费解，但技术上讲还是正确的。比如，调用 typeof null 返回的是"object"。这是因为特殊值 null 被认为是一个对空对象的引用。

注意： 严格来讲，函数在 ECMAScript 中被认为是对象，并不代表一种数据类型。可是，函数也有自己特殊的属性。为此，就有必要通过 typeof 操作符来区分函数和其他对象。

#### Undefined 类型

Undefined 类型只有一个值，就是特殊值 Undefined。当使用 var 或 let 声明了变量但没有初始化时，就相当于给变量赋予了 Undefined 的值。

```js
let message;
console.log(message == undefined); // true
```

这个例子中，变量 message 在声明的时候并未初始化。而在比较它和 undefined 的字面值时，两者是相等的。这个例子等同于如下：

```js
let message = undefined;
console.log(message == undefined); // true
```

这里，变量 message 显式地以 undefined 来初始化。但这是不必要的，因为默认情况下，任何未经初始化的变量都会取得 undefined 值。
注意：
一般来说，永远不用显式的给某个变量设置 undefined 值，字面值 undefined 主要用于比较，而且在 ECMA-262 第 3 版之前是不存在的。增加这个特殊值的目的就是为来正式明确空对象指针和未初始化变量的区别。

注意，包含 undefined 值的变量跟未定义变量是有区别的。请看下面的例子：

```js
let message; // 这个变量被声明了，只是值为 undefined
// 确保没有声明过这个变量
// let age
console.log(message); // "undefined"
console.log(age); // 报错
```

在上面的例子中，第一个 `console.log` 会指出变量 `message` 的值，即`"undefined"`。而第二个`console.log` 要输出一个未声明的变量 age 的值，因此会导致报错。对未声明的变量，只能执行一个有用的操作，就是对它调用 `typeof`。（对未声明的变量调用 `delete` 也不会报错，但这个操作没什么用，实际上在严格模式下会抛出错误。）
在对未初始化的变量调用 `typeof` 时，返回的结果是`"undefined"`，但对未声明的变量调用它时，返回的结果还是`"undefined"`，这就有点让人看不懂了。比如下面的例子：

```js
let message; // 这个变量被声明了，只是值为 undefined
// 确保没有声明过这个变量
// let age
console.log(typeof message); // "undefined"
console.log(typeof age); // "undefined"
```

无论是声明还是未声明，typeof 返回的都是字符串"undefined"。逻辑上讲这是对的，因为虽然严格来讲这两个变量存在根本性差异，但它们都无法执行实际操作。注意 即使未初始化的变量会被自动赋予 undefined 值，但我们仍然建议在声明变量的同时进行初始化。这样，当 typeof 返回‘undefined’,你就会知道那是因为给定的变量尚未声明，而不是声明来未初始化。
undefined 是一个假值，因此，如果需要，可以用更简洁的方式检测它。不过要记住，也有很多其他可能的值同样是假值。所以一定要明确自己想要检测的就是 undefined 这个字面值，而不是仅仅是假值。

```js
let message; // 这个变量被声明了，只是值为 undefined
// age 没有声明
if (message) {
  // 这个块不会执行
}
if (!message) {
  // 这个块会执行
}
if (age) {
  // 这里会报错
}
```

#### Null 类型

Null 类型同样只有一个值，即特殊值 null。逻辑上讲，null 值表示一个
空对象指针，这也是给 typeof 传一个 null 会返回"object"的原因:

```js
let car = null;
console.log(typeof car); // "object"
```

在定义将来要保存对象值的变量时，建议使用 null 来初始化，不要使用 其他值。这样，只要检查这个变量的值是不是 null 就可以知道这个变量 是否在后来被重新赋予了一个对象的引用，比如

```js
if (car != null) {
  // car是一个对象的引用
}
```

undefined 值是由 null 值派生而来的，因此 ECMA-262 将它们定义为表面 上相等，如下面的例子所示

```js
console.log(null == undefined); // true
```

用等于操作符(==)比较 `null` 和 `undefined` 始终返回 true。但要注意，这 个操作符会为了比较而转换它的操作数(本章后面将详细介绍)。
即使 `null` 和 `undefined` 有关系，它们的用途也是完全不一样的。如前所 述，永远不必显式地将变量值设置为 `undefined` 。但 `null` 不是这样的。 任何时候，只要变量要保存对象，而当时又没有那个对象可保存，就要 用 null 来填充该变量。这样就可以保持 null 是空对象指针的语义，并进 一步将其与
`undefined` 区分开来。
null 是一个假值。因此，如果需要，可以用更简洁的方式检测它。不过 要记住，也有很多其他可能的值同样是假值。所以一定要明确自己想检 测的就是 null 这个字面值，而不仅仅是假值。

```js
let message = null;
let age;
if (message) {
  // 这个块不会执行
}
if (!message) {
  // 这个块会执行
}
if (age) {
  // 这个块不会执行
}
if (!age) {
  // 这个块会执行
}
```

#### Boolean 类型

Boolean(布尔值)类型是 ECMAScript 中使用最频繁的类型之一，有两 个字面值:true 和 false。这两个布尔值不同于数值，因此 true 不等于 1，false 不等于 0。下面是给变量赋布尔值的例子:

```js
let found = true;
let lost = false;
```

注意，布尔值字面量 true 和 false 是区分大小写的，因此 True 和 False(及其他大小混写形式)是有效的标识符，但不是布尔值。
虽然布尔值只有两个，但所有其他 ECMAScript 类型的值都有相应布尔 值的等价形式。要将一个其他类型的值转换为布尔值，可以调用特定的 Boolean()转型函数:

```js
let message = 'Hello world!';
let messageAsBoolean = Boolean(message);
```

在这个例子中，字符串 message 会被转换为布尔值并保存在变量 messageAsBoolean 中。Boolean()转型函数可以在任意类型的数据上调 用，而且始终返回一个布尔值。什么值能转换为 true 或 false 的规则取 决于数据类型和实际的值。下表总结了不同类型与布尔值之间的转换规则。

| 数据类型  | 转换为 true 的值       | 转换为 false 的值 ｜ |
| --------- | ---------------------- | -------------------- |
| Boolean   | true                   | false                |
| String    | 非空字符串             | "" 空字符串 ｜       |
| Number    | 非零数值（包括无穷值） | 0， NaN              |
| Object    | 任意对象               | null                 |
| Undefined | N/A 不存在             | undefined            |

理解以上转换很重要，因为像 if 等流控制语句会自动执行其他类型值到布尔值的转换，例如：

```js
let message = 'Hello world!';
if (message) {
  console.log('Value is true');
}
```

在这个例子中，console.log 会输出字符串"Value is true"，因为字符 串 message 会被自动转换为等价的布尔值 true。由于存在这种自动转 换，理解流控制语句中使用的是什么变量就非常重要。错误地使用对象 而不是布尔值会明显改变应用程序的执行流。

#### Number 类型

ECMAScript 中最有意思的数据类型或许就是 Number 了。Number 类型使用 IEEE 754 格式表示整数和浮点值(在某些语言中也叫双精度值)。不同 的数值类型相应地也有不同的数值字面量格式。
最基本的数值字面量格式是十进制整数，直接写出来即可:

```js
let intNum = 55;
```

整数也可以用八进制(以 8 为基数)或十六进制(以 16 为基数)字面量 表示。对于八进制字面量，第一个数字必须是零(0)，然后是相应的 八进制数字(数值 0~7)。如果字面量中包含的数字超出了应有的范 围，就会忽略前缀的零，后面的数字序列会被当成十进制数，如下所 示:

```js
let octalNum1 = 070; // 八进制的56
let octalNum2 = 079; // 无效的八进制值，当成79处理
let octalNum3 = 08; // 无效的八进制值，当成8处理
```

八进制字面量在严格模式下是无效的，会导致 JavaScript 引擎抛出语法错误。
ECMAScript 2015 或 ES6 中的八进制值通过前缀 0o 来表示;严格模式下，前缀 0 会被视为语法 错误，如果要表示八进制值，应该使用前缀 0o。——译者注。

要创建十六进制字面量，必须让真正的数值前缀 0x(区分大小写)，然 后是十六进制数字(0~9 以及 A~F)。十六进制数字中的字母大小写均 可。下面是几个例子:

```js
let hexNum1 = 0xa; // 十六进制10
let hexNum2 = 0x1f; // 十六进制31
```

使用八进制和十六进制格式创建的数值在所有数学操作中都被视为十进制数值。
注意 由于 JavaScript 保存数值的方式，实际中可能存在正零 (+0)和负零(-0)。正零和负零在所有情况下都被认为是等同 的，这里特地说明一下。

1. 浮点值
   要定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个数字。虽然小数点前面不是必须有整数，但推荐加上。下面是几个例子:

```js
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = 0.1; // 有效，但不推荐
```

因为存储浮点值使用的内存空间是存储整数值的两倍。所以 ECMAScript 总是想方设法把值转换为整数。在小数点后没有数字的情况下，数值就会变成整数。类似的，如果数值本身就是整数，只是小数点后面跟着 0，如 1.0，那她也会被转换为整数，如下：

```js
let floatNum1 = 1; // 小数点后面没有数字，当成整数1处理
let floatNum2 = 10.0; // 小数点后面是零，当成整数10处理
```

对于非常大或非常小的数值，浮点值可以用科学记数法来表示。科学记数法用于表示一个应该乘以 10 的给定次幂的数值。
ECMAScript 中科学记数法的格式要求是一个数值（整数或浮点数）后跟一个大写或者小写的字母 e,再加上一个要乘的 10 的多少次幂，比如：

```js
let floatNum = 3.125e7; //等于31250000.
```

在这个例子中，floatNum 等于 31 250 000，只不过科学记数法显得 更简洁。这种表示法实际上相当于说:“以 3.125 作为系数，乘以 10 的 7 次幂。”
科学记数法也可以用于表示非常小的数值，例如 0.000 000 000 000 000 03。这个数值用科学记数法可以表示为 3e-17。默认情况下， ECMAScript 会将小数点后至少包含 6 个零的浮点值转换为科学记数 法(例如，0.000 000 3 会被转换为 3e-7)。
浮点值的精确度最高可达 17 位小数，但在算术计算中远不如整数精 确。例如，0.1 加 0.2 得到的不是 0.3，而是 0.300 000 000 000 000 04。由于这种微小的舍入错误，导致很难测试特定的浮点值。比如 下面的例子:

```js
if (a + b == 0.3) {
  //别这么干! console.log("You got 0.3.");
}
```

这里检测两个数值之和是否等于 0.3。如果两个数值分别是 0.05 和 0.25，或者 0.15 和 0.15，那没问题。但如果是 0.1 和 0.2，如前所述， 测试将失败。因此永远不要测试某个特定的浮点值。
注意 之所以存在这种舍入错误，是因为使用了 IEEE 754 数 值，这种错误并非 ECMAScript 所独有。其他使用相同格式的 语言也有这个问题。

2. 值的范围

由于内存的限制，ECMAScript 并不支持表示这个世界上的所有数值。ECMAScript 可以表示的最小数值保存在 Number.MIN_VALUE 中，这个值在多数浏览器中是 5e-324;可以表示的最大数值保存 在 Number.MAX_VALUE 中，这个值在多数浏览器中是 1.797 693 134 862 315 7e+308。如果某个计算得到的数值结果超出了 JavaScript 可以表 示的范围，那么这个数值会被自动转换为一个特殊的 Infinity(无 穷)值。任何无法表示的负数以-Infinity(负无穷大)表示，任 何无法表示的正数以 Infinity(正无穷大)表示。

如果计算返回正 Infinity 或负 Infinity，则该值将不能再进一步用 于任何计算。这是因为 Infinity 没有可用于计算的数值表示形式。 要确定一个值是不是有限大(即介于 JavaScript 能表示的最小值和最 大值之间)，可以使用 isFinite()函数，如下所示:

```js
let result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result)); // false
```

虽然超出有限数值范围的计算并不多见，但总归还是有可能的。因此在计算非常大或非常小的数值时，有必要监测一下计算结果是否超出范围。
注意 使用 Number.NEGATIVE_INFINITY 和 Number.POSITIVE_INFINITY 也可以获取正、负 Infinity。没 错，这两个属性包含的值分别就是-Infinity 和 Infinity。

3. NaN
   有一个特殊的数值叫 NaN，意思是“不是数值”(Not a Number)，用于表示本来要返回数值的操作失败了(而不是抛出错误)。比如，用 0 除任意数值在其他语言中通常都会导致错误，从而中止代码执 行。但在 ECMAScript 中，0、+0 或-0 相除会返回 NaN:

```js
console.log(0 / 0); // NaN
console.log(-0 / +0); // NaN
```

如果分子是非 0 值，分母是有符号 0 或无符号 0，则会返回 Infinity 或-Infinity

```js
console.log(5 / 0); // Infinity
console.log(5 / -0); // -Infinity
```

NaN 有几个独特的属性。首先，任何涉及 NaN 的操作始终返回 NaN(如 NaN/10)，在连续多步计算时这可能是个问题。其次，NaN 不等于包括 NaN 在内的任何值。例如，下面的比较操作会返回 false:

```js
console.log(NaN == NaN); // false
```

为此，ECMAScript 提供了 isNaN()函数。该函数接收一个参数，可 以是任意数据类型，然后判断这个参数是否“不是数值”。把一个值 传给 isNaN()后，该函数会尝试把它转换为数值。某些非数值的值 可以直接转换成数值，如字符串"10"或布尔值。任何不能转换为数 值的值都会导致这个函数返回 true。举例如下:

```js
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false，10是数值
console.log(isNaN('10')); // false，可以转换为数值10
console.log(isNaN('blue')); // true，不可以转换为数值
console.log(isNaN(true)); // false，可以转换为数值1
```

上述的例子测试了 5 个不同的值。首先测试的是 NaN 本身，显然会返 回 true。接着测试了数值 10 和字符串"10"，都返回 false，因为它 们的数值都是 10。字符串"blue"不能转换为数值，因此函数返回 true。布尔值 true 可以转换为数值 1，因此返回 false。

注意 虽然不常见，但 isNaN()可以用于测试对象。此时，首 先会调用对象的 valueOf()方法，然后再确定返回的值是否可 以转换为数值。如果不能，再调用 toString()方法，并测试其 返回值。这通常是 ECMAScript 内置函数和操作符的工作方 式，本章后面会讨论。

4. 数值转换
   有 3 个函数可以将非数值转换为数值:Number()、parseInt()和 parseFloat()。Number()是转型函数，可用于任何数据类型。后两 个函数主要用于将字符串转换为数值。对于同样的参数，这 3 个函数执行的操作也不同。 Number()函数基于如下规则执行转换。
   a. 布尔值，true 转换为 1，false 转换为 0。 数值，直接返回。
   b. null，返回 0。
   c. undefined，返回 NaN。
   d. 字符串，应用以下规则。
   如果字符串包含数值字符，包括数值字符前面带加、减号的情况，则转换为一个十进制数值。因此，Number("1") 返回 1，Number("123")返回 123，Number("011")返回 11(忽略前面的零)。
   如果字符串包含有效的浮点值格式如"1.1"，则会转换为相应的浮点值(同样，忽略前面的零)。
   如果字符串包含有效的十六进制格式如"0xf"，则会转换为与该十六进制值对应的十进制整数值。
   如果是空字符串(不包含字符)，则返回 0。 如果字符串包含除上述情况之外的其他字符，则返回 NaN。
   e. 对象，调用 valueOf()方法，并按照上述规则转换返回的值。 如果转换结果是 NaN，则调用 toString()方法，再按照转换字 符串的规则转换。

从不同数据类型到数值的转换有时候会比较复杂，看一看 Number() 的转换规则就知道了。下面是几个具体的例子:

```js
let num1 = Number('Hello world!'); // NaN
let num2 = Number(''); // 0
let num3 = Number('000011'); // 11
let num4 = Number(true); // 1
```

可以看到，字符串"Hello world"转换之后是 NaN，因为它找不到对 应的数值。空字符串转换后是 0。字符串 000011 转换后是 11，因为 前面的零被忽略了。最后，true 转换为 1。
注意 本章后面会讨论到的一元加操作符与 Number()函数遵循 相同的转换规则。
考虑到用 Number()函数转换字符串时相对复杂且有点反常规，通常 在需要得到整数时可以优先使用 parseInt()函数。parseInt()函数 更专注于字符串是否包含数值模式。字符串最前面的空格会被忽 略，从第一个非空格字符开始转换。如果第一个字符不是数值字 符、加号或减号，parseInt()立即返回 NaN。这意味着空字符串也 会返回 NaN(这一点跟 Number()不一样，它返回 0)。如果第一个字 符是数值字符、加号或减号，则继续依次检测每个字符，直到字符 串末尾，或碰到非数值字符。比如，"1234blue"会被转换为 1234， 因为"blue"会被完全忽略。类似地，"22.5"会被转换为 22，因为小 数点不是有效的整数字符。
假设字符串中的第一个字符是数值字符，parseInt()函数也能识别 不同的整数格式(十进制、八进制、十六进制)。换句话说，如果 字符串以"0x"开头，就会被解释为十六进制整数。如果字符串 以"0"开头，且紧跟着数值字符，在非严格模式下会被某些实现解 释为八进制整数。

下面几个转换示例有助于理解上述规则:

```js
let num1 = parseInt('1234blue'); // 1234
let num2 = parseInt(''); // NaN
let num3 = parseInt('0xA'); // 10，解释为十六进制整数
let num4 = parseInt(22.5); // 22
let num5 = parseInt('70'); // 70，解释为十进制值
let num6 = parseInt('0xf'); // 15，解释为十六进制整数
```

不同的数值格式很容易混淆，因此 parseInt()也接收第二个参数， 用于指定底数(进制数)。如果知道要解析的值是十六进制，那么 可以传入 16 作为第二个参数，以便正确解析:

```js
 let num = parseInt("0xAF", 16); // 175
```
事实上，如果提供了十六进制参数，那么字符串前面的"0x"可以省 掉:

```js
 let num1 = parseInt("AF", 16);  // 175
 let num2 = parseInt("AF");      // NaN
```
在这个例子中，第一个转换是正确的，而第二个转换失败了。区别 在于第一次传入了进制数作为参数，告诉parseInt()要解析的是一个十六进制字符串。而第二个转换检测到第一个字符就是非数值字 符，随即自动停止并返回NaN。
通过第二个参数，可以极大扩展转换后获得的结果类型。比如:
```js
let num1 = parseInt("10", 2); // 2，按二进制解析 
let num2 = parseInt("10", 8); // 8，按八进制解析 
let num3 = parseInt("10", 10); // 10，按十进制解析
let num4 = parseInt("10", 16); // 16，按十六进制解析
```
因为不传底数参数相当于让parseInt()自己决定如何解析，所以为 避免解析出错，建议始终传给它第二个参数。
注意 多数情况下解析的应该都是十进制数，此时第二个参数 就要传入10。
parseFloat()函数的工作方式跟parseInt()函数类似，都是从位置0 开始检测每个字符。同样，它也是解析到字符串末尾或者解析到一 个无效的浮点数值字符为止。这意味着第一次出现的小数点是有效 的，但第二次出现的小数点就无效了，此时字符串的剩余字符都会 被忽略。因此，"22.34.5"将转换成22.34。

parseFloat()函数的另一个不同之处在于，它始终忽略字符串开头 的零。这个函数能识别前面讨论的所有浮点格式，以及十进制格式 (开头的零始终被忽略)。十六进制数值始终会返回0。因 为parseFloat()只解析十进制值，因此不能指定底数。最后，如果 字符串表示整数(没有小数点或者小数点后面只有一个零)， 则parseFloat()返回整数。下面是几个示例:
```js
let num1 = parseFloat("1234blue"); // 1234，按整数解析 
let num2 = parseFloat("0xA"); // 0
let num3 = parseFloat("22.5"); // 22.5
let num4 = parseFloat("22.34.5"); // 22.34
let num5 = parseFloat("0908.5"); // 908.5
let num6 = parseFloat("3.125e7");  // 31250000
```
#### String 类型
String(字符串)数据类型表示零或多个16位Unicode字符序列。字符 串可以使用双引号(")、单引号(')或反引号(`)标示，因此下面的 代码都是合法的:
```js
let firstName = "John";
let lastName = 'Jacob';
let lastName = `Jingleheimerschmidt`;
```
跟某些语言中使用不同的引号会改变对字符串的解释方式不同， ECMAScript语法中表示字符串的引号没有区别。不过要注意的是，以 某种引号作为字符串开头，必须仍然以该种引号作为字符串结尾。比 如，下面的写法会导致语法错误:
```js
let firstName = 'Nicholas";
// 语法错误:开头和结尾的引号必须是同一种
```
1. 字符字面量
字符串数据类型包含一些字符字面量，用于表示非打印字符或有其他用途的字符，如下表示：

| 字面量  | 含义       |
| --------- | ---------------------- |
| \n   | 换行  |
| \t   | 制表  |
| \b   | 退格  |
| \r   | 回车  |
| \f  |  换页 |
| \\  |  反斜杠(\) |
|  \'  |  单引号(')，在字符串以单引号标示时使用，例如'He said, \'hey.\'' |
|  \"  |  双引号(")，在字符串以双引号标示时使用，例如"He said, \"hey.\"" |
|   \`  | 反引号(\`)，在字符串以反引号标示时使用，例如`He said, \`hey.\``  |
|  \xnn  | 以十六进制编码nn表示的字符(其中n是十六进制数字0~F)，例如\x41等 于"A"  |
|  \unnnn  |  以十六进制编码nnnn表示的Unicode字符(其中n是十六进制数字0~F)， 例如\u03a3等于希腊字符"Σ" |

这些字符字面量可以出现在字符串中的任意位置，且可以作为单个
字符被解释:
```js
 let text = "This is the letter sigma: \u03a3.";
```
在这个例子中，即使包含6个字符长的转义序列，变量text仍然是28个字符长。因为转义序列表示一个字符，所以只算一个字符。 字符串的长度可以通过其length属性获取:
```js
console.log(text.length); // 28
```
这个属性返回字符串中16位字符的个数。
注意 如果字符串中包含双字节字符，那么length属性返回的 值可能不是准确的字符数。第5章将具体讨论如何解决这个问 题。

02. 字符串的特点
ECMAScript中的字符串是不可变的(immutable)，意思是一旦创 建，它们的值就不能变了。要修改某个变量中的字符串值，必须先 销毁原始的字符串，然后将包含新值的另一个字符串保存到该变 量，如下所示:
```js
let lang = "Java";
lang = lang + "Script";
```
这里，变量lang一开始包含字符串"Java"。紧接着，lang被重新定 义为包含"Java"和"Script"的组合，也就是"JavaScript"。整个过 程首先会分配一个足够容纳10个字符的空间，然后填充 上"Java"和"Script"。最后销毁原始的字符串"Java"和字符 串"Script"，因为这两个字符串都没有用了。所有处理都是在后台 发生的，而这也是一些早期的浏览器(如Firefox 1.0之前的版本和 IE6.0)在拼接字符串时非常慢的原因。这些浏览器在后来的版本中 都有针对性地解决了这个问题。
03. 转换为字符串
有两种方式把一个值转换为字符串。首先是使用几乎所有值都有的 toString()方法。这个方法唯一的用途就是返回当前值的字符串等 价物。比如:
```js
let age = 11;
let ageAsString = age.toString(); // 字符串"11" let found = true;
let foundAsString = found.toString(); // 字符串"true"
```
toString()方法可见于数值、布尔值、对象和字符串值。(没错， 字符串值也有toString()方法，该方法只是简单地返回自身的一个 副本。)null和undefined值没有toString()方法。
多数情况下，toString()不接收任何参数。不过，在对数值调用这 个方法时，toString()可以接收一个底数参数，即以什么底数来输 出数值的字符串表示。默认情况下，toString()返回数值的十进制 字符串表示。而通过传入参数，可以得到数值的二进制、八进制、 十六进制，或者其他任何有效基数的字符串表示，比如:
```js
let num = 10; 
console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"
console.log(num.toString(8)); // "12"
console.log(num.toString(10)); // "10"
console.log(num.toString(16)); // "a"
```
这个例子展示了传入底数参数时，toString()输出的字符串值也会 随之改变。数值10可以输出为任意数值格式。注意，默认情况下 (不传参数)的输出与传入参数10得到的结果相同。
如果你不确定一个值是不是null或undefined，可以使用String()转 型函数，它始终会返回表示相应类型值的字符串。String()函数遵 循如下规则。
 a. 如果值有toString()方法，则调用该方法(不传参数)并返回 结果。
 b. 如果值是null，返回"null"。 
 c. 如果值是undefined，返回"undefined"。

```js
 let value1 = 10;
 let value2 = true;
 let value3 = null;
 let value4;
 console.log(String(value1));  // "10"
 console.log(String(value2));  // "true"
 console.log(String(value3));  // "null"
 console.log(String(value4));  // "undefined"
```
这里展示了将4个值转换为字符串的情况:一个数值、一个布尔 值、一个null和一个undefined。数值和布尔值的转换结果与调 用toString()相同。因为null和undefined没有toString()方法，所 以String()方法就直接返回了这两个值的字面量文本。
注意 用加号操作符给一个值加上一个空字符串""也可以将其 转换为字符串(加号操作符本章后面会介绍)。

04. 模版字符串
ECMAScript 6新增了使用模板字面量定义字符串的能力。与使用单 引号或双引号不同，模板字面量保留换行字符，可以跨行定义字符 串:
```js
let myMultiLineString = 'first line\nsecond line';
let myMultiLineTemplateLiteral = `first line
second line`;
console.log(myMultiLineString);
// first line
// second line"
console.log(myMultiLineTemplateLiteral);
// first line
// second line
console.log(myMultiLineString === myMultiLinetemplateLiteral); // true
```

顾名思义，模板字面量在定义模板时特别有用，比如下面这个 HTML模板:

```js
let pageHTML = `
<div>
  <a href="#">
    <span>Jake</span>
  </a>
</div>`;
```
由于模板字面量会保持反引号内部的空格，因此在使用时要格外注
意。格式正确的模板字符串可能会看起来缩进不当:
```js
// 这个模板字面量在换行符之后有25个空格符 
let myTemplateLiteral = `first line second line`;
console.log(myTemplateLiteral.length);  // 47
// 这个模板字面量以一个换行符开头
let secondTemplateLiteral = `
first line
second line`;
console.log(secondTemplateLiteral[0] === '\n'); // true
// 这个模板字面量没有意料之外的字符
let thirdTemplateLiteral = `first line second line`; console.log(thirdTemplateLiteral);
// first line
// second line
```
05. 字符串插值

模板字面量最常用的一个特性是支持字符串插值，也就是可以在一 个连续定义中插入一个或多个值。技术上讲，模板字面量不是字符 串，而是一种特殊的JavaScript句法表达式，只不过求值后得到的是 字符串。模板字面量在定义时立即求值并转换为字符串实例，任何 插入的变量也会从它们最接近的作用域中取值。
字符串插值通过在${}中使用一个JavaScript表达式实现:

```js
let value = 5;
let exponent = 'second';
// 以前，字符串插值是这样实现的: 
let interpolatedString = value + ' to the ' + exponent + ' power is ' + (value * value);
// 现在，可以用模板字面量这样实现: 
let interpolatedTemplateLiteral =`${ value } to the ${ exponent } power is ${ value * value }`;
console.log(interpolatedString);           // 5 to the second power is 25
console.log(interpolatedTemplateLiteral);  // 5 to the second power is 25
```
所有插入的值都会使用toString()强制转型为字符串，而且任何 JavaScript表达式都可以用于插值。嵌套的模板字符串无须转义:
```js
 console.log(`Hello, ${ `World` }!`);  // Hello, World!
```
将表达式转换为字符串时会调用toString():
```js
 let foo = { toString: () => 'World' };
 console.log(`Hello, ${ foo }!`);      // Hello, World!
```
在插值表达式中可以调用函数和方法:

```js
function capitalize(word) {
  return `${ word[0].toUpperCase() }${ word.slice(1) }`;
}
console.log(`${ capitalize('hello') }, ${ capitalize('world') }!`);
// Hello, World!
```
此外，模板也可以插入自己之前的值:
```js
let value = '';
function append() {
  value = `${value}abc`
  console.log(value);
}
append();  // abc
append();  // abcabc
append();  // abcabcabc
```
06. 模板字面量标签函数
模板字面量也支持定义标签函数(tag function)，而通过标签函数 可以自定义插值行为。标签函数会接收被插值记号分隔后的模板和 对每个表达式求值的结果。
标签函数本身是一个常规函数，通过前缀到模板字面量来应用自定
义行为，如下例所示。标签函数接收到的参数依次是原始字符串数
组和对每个表达式求值的结果。这个函数的返回值是对模板字面量
求值得到的字符串。
最好通过一个例子来理解:
```js
let a = 6;
let b = 9;
function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
  console.log(strings);
  console.log(aValExpression);
  console.log(bValExpression);
  console.log(sumExpression);
  return 'foobar';
}
let untaggedResult = `${ a } + ${ b } = ${ a + b }`;
let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`;
// ["", " + ", " = ", ""]
// 6
// 9
// 15
console.log(untaggedResult);
console.log(taggedResult);
// "6 + 9 = 15"
// "foobar"
```
#### Symbol 类型

#### Object 类型

#### typeof 操作符

### 操作符

### 语句

### 函数

### 小结
