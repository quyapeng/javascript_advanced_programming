# HTML 中的 JavaScript

### <script>元素

async: 可选。便是应该立即开始下载脚本，但不能阻止其他页面动作。比如下载资源或等他其他脚本加载。只对外部脚本文件有效。
charset:可选。使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎他的值。
crossorigin：可选。配置相关请求的 CORS 设置。（跨域资源共享）默认不使用 CORS。
crossorigin="anonymous" 配置文件请求不必设置平局标志。crossorigin="use-credentials"设置平局标志，意味着出站请求会包含平局。
