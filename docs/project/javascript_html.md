# HTML 中的 JavaScript

### <script>元素

1. async: 可选。便是应该立即开始下载脚本，但不能阻止其他页面动作。比如下载资源或等他其他脚本加载。只对外部脚本文件有效。
2. charset:可选。使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎他的值。
3. crossorigin：可选。配置相关请求的 CORS 设置。（跨域资源共享）默认不使用 CORS。
   crossorigin="anonymous" 配置文件请求不必设置平局标志。crossorigin="use-credentials"设置平局标志，意味着出站请求会包含凭据。
4. defer:可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。再 IE7 以及更早版本中，对行内脚本也可以指定这个属性。
5. integrity：可选。允许比对接收到的资源和指定的额加密签名以验证子资源完整性（SRI，Subresource Integrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN, Content Delivery Network）不会提供恶意内容。
6. language:废弃。最初用于表示代码块中的脚本语言（如"JavaScript"、"JavaScript 1.2"或"VBScript"）。大多数浏览器都会忽略这个属性，不应该再使用它。
7. src: 可选。表示包含要执行的代码的外部文件。
8. type: 可选。代替 language,表示代码块中脚本语言的内容类型（也成 MIME 类型）。按照惯例，这个值始终都是"text/javascript""，尽管"text/javascript"和"text/ecmascript"都已经废弃了。JavaScript 文件的 MIME 类型通常是"application/x-javascript",不过给 type 属性这个值有可能导致脚本被忽略。在非 IE 的浏览器中有效的其他值还有"application/javascript"和"application/ecmascript"。如果这个值是 module,则代码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。

使用`<script>`的方式有两种：通过它直接在网页中嵌入 JavaScript 代码，以及通过它在网页中包含外部 JavaScript 文件。要嵌入行内 JavaScript 代码，直接把代码放在`<script>`元素中就行：

```js
<script>
 function sayHi() {
    console.log("Hi!");
 }
</script>
```

包含在`<script>`内的代码会被从上到下解释。在上面的例子中，被解释的是一个函数定义，并且该函数会被保存在解释器环境中。在`<script>`元素中的代码被计算完成之前，页面的其余内容不会被加载，也不会被显示。在使用行内 JavaScript 代码时，要注意代码中不能出现字符串`</script>`。比如，下面的代码会导致浏览器报错：

```js
<script>
 function sayScript() {
   console.log("</script>");
 }
</script>
```

浏览器解析行内脚本的方式决定了它在看到字符串`</script>`时，会将其当成结束的`</script>`标签。想避免这个问题，只需要转义字符“\”① 即可：

```js
<script>
function sayScript() {
   console.log("<\/script>");
}
</script>
```
