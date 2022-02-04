(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{411:function(t,s,a){"use strict";a.r(s);var r=a(56),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"知识点梳理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点梳理"}},[t._v("#")]),t._v(" 知识点梳理")]),t._v(" "),a("ul",[a("li",[t._v("浏览器加载页面和渲染过程")]),t._v(" "),a("li",[t._v("性能优化")]),t._v(" "),a("li",[t._v("Web 安全")])]),t._v(" "),a("p",[t._v("我们会从浏览器的加载过程开始讲解，")]),t._v(" "),a("p",[t._v("然后介绍如何进行性能优化，")]),t._v(" "),a("p",[t._v("最后介绍下 Web 开发中常见的安全问题和预防。")]),t._v(" "),a("h2",{attrs:{id:"加载页面和渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载页面和渲染过程"}},[t._v("#")]),t._v(" 加载页面和渲染过程")]),t._v(" "),a("h3",{attrs:{id:"题目-浏览器从加载页面到渲染页面的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目-浏览器从加载页面到渲染页面的过程"}},[t._v("#")]),t._v(" 题目：浏览器从加载页面到渲染页面的过程")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("可将加载过程和渲染过程分开说。")]),t._v(" "),a("p",[t._v("回答问题的时候，关键要抓住核心的要点，把要点说全面，稍加解析即可，简明扼要不拖沓。")])]),t._v(" "),a("h3",{attrs:{id:"加载过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载过程"}},[t._v("#")]),t._v(" 加载过程")]),t._v(" "),a("p",[a("strong",[t._v("要点如下：")])]),t._v(" "),a("ul",[a("li",[t._v("浏览器根据 DNS 服务器得到域名 ---\x3e IP 地址")]),t._v(" "),a("li",[t._v("浏览器根据iP地址向服务器发起http请求")]),t._v(" "),a("li",[t._v("服务器处理http请求，并返回给浏览器")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("DETAILS")]),t._v(" "),a("p",[t._v("例如在浏览器输入"),a("code",[t._v("https://juejin.im/timeline")]),t._v("，然后经过 DNS 解析，"),a("code",[t._v("juejin.im")]),t._v("对应的 IP 是"),a("code",[t._v("36.248.217.149")]),t._v("（不同时间、地点对应的 IP 可能会不同）。然后浏览器向该 IP 发送 HTTP 请求。")]),t._v(" "),a("p",[t._v("server 端接收到 HTTP 请求，然后经过计算（向不同的用户推送不同的内容），返回 HTTP 请求，返回的内容其实就是一堆 HMTL 格式的字符串，因为只有 HTML 格式浏览器才能正确解析，这是 W3C 标准的要求。接下来就是浏览器的渲染过程。")])]),t._v(" "),a("h3",{attrs:{id:"渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染过程"}},[t._v("#")]),t._v(" 渲染过程")]),t._v(" "),a("p",[t._v("要点如下：")]),t._v(" "),a("ul",[a("li",[t._v("根据 HTML 结构生成 DOM 树")]),t._v(" "),a("li",[t._v("根据 CSS 生成 CSSOM")]),t._v(" "),a("li",[t._v("将 DOM 和 CSSOM 整合形成 RenderTree")]),t._v(" "),a("li",[t._v("根据 RenderTree 开始渲染页面")]),t._v(" "),a("li",[t._v("遇到"),a("code",[t._v("<script>")]),t._v("时，会执行并阻塞渲染,完成再继续")]),t._v(" "),a("li",[t._v("直至把 Render Tree渲染完成")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("DETAILS")]),t._v(" "),a("p",[t._v("上文中，浏览器已经拿到了 server 端返回的 HTML 内容，开始解析并渲染。")]),t._v(" "),a("p",[t._v("最初拿到的内容就是一堆字符串，必须先结构化成计算机擅长处理的基本数据结构，因此要把 HTML 字符串转化成 DOM 树 —— 树是最基本的数据结构之一。")]),t._v(" "),a("p",[t._v("解析过程中，如果遇到"),a("code",[t._v('<link href="...">')]),t._v("和"),a("code",[t._v('<script src="...">')]),t._v("这种外链加载 CSS 和 JS 的标签，浏览器会异步下载，下载过程和上文中下载 HTML 的流程一样。只不过，这里下载下来的字符串是 CSS 或者 JS 格式的。")]),t._v(" "),a("p",[t._v("浏览器将 CSS 生成 CSSOM，再将 DOM 和 CSSOM 整合成 RenderTree ，然后针对 RenderTree 即可进行渲染了。大家可以想一下，有 DOM 结构、有样式，此时就能满足渲染的条件了。另外，这里也可以解释一个问题 —— "),a("strong",[t._v("为何要将 CSS 放在 HTML 头部？")]),t._v("—— 这样会让浏览器尽早拿到 CSS 尽早生成 CSSOM，然后在解析 HTML 之后可一次性生成最终的 RenderTree，渲染一次即可。如果 CSS 放在 HTML 底部，会出现渲染卡顿的情况，影响性能和体验。")]),t._v(" "),a("p",[t._v("最后，渲染过程中，如果遇到"),a("code",[t._v("<script>")]),t._v("就停止渲染，执行 JS 代码。")]),t._v(" "),a("p",[t._v("因为浏览器渲染和 JS 执行共用一个线程，而且这里必须是单线程操作，多线程会产生渲染 DOM 冲突。")]),t._v(" "),a("p",[t._v("待"),a("code",[t._v("<script>")]),t._v("内容执行完之后，浏览器继续渲染。")]),t._v(" "),a("p",[t._v("最后再思考一个问题 —— "),a("strong",[t._v("为何要将 JS 放在 HTML 底部？")]),t._v("—— JS 放在底部可以保证让浏览器优先渲染完现有的 HTML 内容，让用户先看到内容，体验好。另外，JS 执行如果涉及 DOM 操作，得等待 DOM 解析完成才行，JS 放在底部执行时，HTML 肯定都解析成了 DOM 结构。JS 如果放在 HTML 顶部，JS 执行的时候 HTML 还没来得及转换为 DOM 结构，可能会报错。")])]),t._v(" "),a("h2",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),a("h3",{attrs:{id:"题目-总结前端性能优化的解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目-总结前端性能优化的解决方案"}},[t._v("#")]),t._v(" 题目：总结前端性能优化的解决方案")]),t._v(" "),a("p",[t._v("性能优化的题目也是面试常考的，这类题目有很大的扩展性，能够扩展出来很多小细节，而且对个人的技术视野和业务能力有很大的挑战。")]),t._v(" "),a("h3",{attrs:{id:"优化原则和方向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化原则和方向"}},[t._v("#")]),t._v(" 优化原则和方向")]),t._v(" "),a("p",[t._v("性能优化的原则是"),a("strong",[t._v("以更好的用户体验为标准")]),t._v("，具体就是实现下面的目标：")]),t._v(" "),a("ol",[a("li",[t._v("多使用内存、缓存或者其他方法")]),t._v(" "),a("li",[t._v("减少 CPU 和GPU 计算，更快展现")])]),t._v(" "),a("h3",{attrs:{id:"优化的方向有两个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化的方向有两个"}},[t._v("#")]),t._v(" 优化的方向有两个：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("减少页面体积，提升网络加载")])]),t._v(" "),a("li",[a("strong",[t._v("优化页面渲染")])])]),t._v(" "),a("h3",{attrs:{id:"减少页面体积-提升网络加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减少页面体积-提升网络加载"}},[t._v("#")]),t._v(" 减少页面体积，提升网络加载")]),t._v(" "),a("ul",[a("li",[t._v("静态资源的压缩合并（JS 代码压缩合并、CSS 代码压缩合并、雪碧图）")]),t._v(" "),a("li",[t._v("静态资源缓存（资源名称加 MD5 戳）")]),t._v(" "),a("li",[t._v("使用 CDN 让资源加载更快")])]),t._v(" "),a("h3",{attrs:{id:"优化页面渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化页面渲染"}},[t._v("#")]),t._v(" 优化页面渲染")]),t._v(" "),a("ul",[a("li",[t._v("CSS 放前面，JS 放后面")]),t._v(" "),a("li",[t._v("懒加载（图片懒加载、下拉加载更多）")]),t._v(" "),a("li",[t._v("减少DOM 查询，对 DOM 查询做缓存")]),t._v(" "),a("li",[t._v("减少DOM 操作，多个操作尽量合并在一起执行（"),a("code",[t._v("DocumentFragment")]),t._v("）")]),t._v(" "),a("li",[t._v("事件节流")]),t._v(" "),a("li",[t._v("尽早执行操作（"),a("code",[t._v("DOMContentLoaded")]),t._v("）")]),t._v(" "),a("li",[t._v("使用 SSR 后端渲染，数据直接输出到 HTML 中，减少浏览器使用 JS 模板渲染页面 HTML 的时间")])]),t._v(" "),a("h3",{attrs:{id:"详细解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详细解释"}},[t._v("#")]),t._v(" 详细解释")]),t._v(" "),a("h4",{attrs:{id:"静态资源的压缩合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源的压缩合并"}},[t._v("#")]),t._v(" 静态资源的压缩合并")]),t._v(" "),a("p",[t._v("如果不合并，每个都会走一遍之前介绍的请求过程")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("b.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("c.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("如果合并了，就只走一遍请求过程")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"静态资源缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源缓存"}},[t._v("#")]),t._v(" 静态资源缓存")]),t._v(" "),a("p",[t._v("通过链接名称控制缓存")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("abc_1.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("只有内容改变的时候，链接名称才会改变")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("abc_2.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这个名称不用手动改，可通过前端构建工具根据文件内容，为文件名称添加 MD5 后缀。")]),t._v(" "),a("h4",{attrs:{id:"使用-cdn-让资源加载更快"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-cdn-让资源加载更快"}},[t._v("#")]),t._v(" 使用 CDN 让资源加载更快")]),t._v(" "),a("p",[t._v("CDN 会提供专业的加载优化方案，静态资源要尽量放在 CDN 上。例如：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.bootcss.com/zepto/1.0rc1/zepto.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"用-ssr-后端渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-ssr-后端渲染"}},[t._v("#")]),t._v(" 用 SSR 后端渲染")]),t._v(" "),a("p",[t._v("可一次性输出 HTML 内容，不用在页面渲染完成之后，再通过 Ajax 加载数据、再渲染。例如使用 smarty、Vue SSR 等。")]),t._v(" "),a("h4",{attrs:{id:"css-放前面-js-放后面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-放前面-js-放后面"}},[t._v("#")]),t._v(" CSS 放前面，JS 放后面")]),t._v(" "),a("p",[t._v("上文讲述浏览器渲染过程时已经提过，不再赘述。")]),t._v(" "),a("h4",{attrs:{id:"懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),a("p",[t._v("一开始先给为 "),a("code",[t._v("src")]),t._v(" 赋值成一个通用的预览图，下拉时候再动态赋值成正式的图片。")]),t._v(" "),a("p",[t._v("如下，"),a("code",[t._v("preview.png")]),t._v("是预览图片，比较小，加载很快，而且很多图片都共用这个"),a("code",[t._v("preview.png")]),t._v("，加载一次即可。待页面下拉，图片显示出来时，再去替换"),a("code",[t._v("src")]),t._v("为"),a("code",[t._v("data-realsrc")]),t._v("的值。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/31/yUqnLZ7tTYWOEoi.png",alt:"image-20201231224127237"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("另外，这里为何要用"),a("code",[t._v("data-")]),t._v("开头的属性值？—— 所有 HTML 中自定义的属性，都应该用"),a("code",[t._v("data-")]),t._v("开头，因为"),a("code",[t._v("data-")]),t._v("开头的属性浏览器渲染的时候会忽略掉，提高渲染性能。")])]),t._v(" "),a("h4",{attrs:{id:"dom-查询做缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-查询做缓存"}},[t._v("#")]),t._v(" DOM 查询做缓存")]),t._v(" "),a("p",[t._v("两段代码做一下对比：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/31/3gyNja96vH1WrmG.png",alt:"image-20201231224139393"}})]),t._v(" "),a("p",[a("strong",[t._v("总结：DOM 操作，无论查询还是修改，都是非常耗费性能的，应尽量减少。")])]),t._v(" "),a("h4",{attrs:{id:"合并-dom-插入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并-dom-插入"}},[t._v("#")]),t._v(" 合并 DOM 插入")]),t._v(" "),a("p",[t._v("DOM 操作是非常耗费性能的，因此插入多个标签时，先插入 Fragment 然后再统一插入 DOM。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/31/prlJf7XVcPHmaKw.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"尽早执行操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尽早执行操作"}},[t._v("#")]),t._v(" 尽早执行操作")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/31/6BXxW5lAMTaRtpo.png",alt:"image-20201231224106370"}})]),t._v(" "),a("h4",{attrs:{id:"事件防抖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件防抖"}},[t._v("#")]),t._v(" 事件防抖")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时（技能施法前摇）")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/31/L3P29XWne8uTHYb.png",alt:"image-20201231224318486"}})]),t._v(" "),a("h4",{attrs:{id:"事件节流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件节流"}},[t._v("#")]),t._v(" 事件节流")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("每隔一段时间，只执行一次函数。(技能冷却时间)")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/31/ULjWyDJVztisZ1h.png",alt:"image-20201231224236066"}})]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("DETAILS")]),t._v(" "),a("h4",{attrs:{id:"性能优化怎么做"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化怎么做"}},[t._v("#")]),t._v(" "),a("strong",[t._v("性能优化怎么做")])]),t._v(" "),a("p",[t._v("上面提到的都是性能优化的单个点，性能优化项目具体实施起来，应该按照下面步骤推进：")]),t._v(" "),a("ol",[a("li",[t._v("建立性能数据收集平台，摸底当前性能数据，通过性能打点，将上述整个页面打开过程消耗时间记录下来")]),t._v(" "),a("li",[t._v("分析耗时较长时间段原因，寻找优化点，确定优化目标")]),t._v(" "),a("li",[t._v("开始优化")]),t._v(" "),a("li",[t._v("通过数据手机平台记录优化效果")]),t._v(" "),a("li",[t._v("不断调整优化点和预期目标，循环2~4步骤")])]),t._v(" "),a("p",[a("strong",[t._v("性能优化是个长期的事情，不是一蹴而就的，应该本着先摸底、再分析、后优化的原则逐步来做。")])])]),t._v(" "),a("h2",{attrs:{id:"web-安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-安全"}},[t._v("#")]),t._v(" Web 安全")]),t._v(" "),a("h3",{attrs:{id:"题目-前端常见的安全问题有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目-前端常见的安全问题有哪些"}},[t._v("#")]),t._v(" 题目：前端常见的安全问题有哪些？")]),t._v(" "),a("p",[t._v("Web 前端的安全问题，能回答出下文的两个问题，这个题目就能基本过关了。开始之前，先说一个最简单的攻击方式 —— SQL 注入。")]),t._v(" "),a("p",[t._v("上学的时候就知道有一个「SQL注入」的攻击方式。")]),t._v(" "),a("p",[t._v("例如做一个系统的登录界面，输入用户名和密码，提交之后，后端直接拿到数据就拼接 SQL 语句去查询数据库。如果在输入时进行了恶意的 SQL 拼装，那么最后生成的 SQL 就会有问题。")]),t._v(" "),a("p",[t._v("但是现在稍微大型一点的系统，都不会这么做，从提交登录信息到最后拿到授权，要经过层层的验证。因此，SQL 注入都只出现在比较低端小型的系统上。")]),t._v(" "),a("h3",{attrs:{id:"xss-cross-site-scripting-跨站脚本攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-cross-site-scripting-跨站脚本攻击"}},[t._v("#")]),t._v(" XSS（Cross Site Scripting，跨站脚本攻击）")]),t._v(" "),a("p",[t._v("是前端最常见的攻击方式，很多大型网站（如 Facebook）都被 XSS 攻击过。")]),t._v(" "),a("p",[t._v("举一个例子，我在一个博客网站正常发表一篇文章，输入汉字、英文和图片，完全没有问题。")]),t._v(" "),a("p",[t._v("但是如果我写的是恶意的 JS 脚本，例如获取到"),a("code",[t._v("document.cookie")]),t._v("然后传输到自己的服务器上，那我这篇博客的每一次浏览都会执行这个脚本，都会把访客 cookie 中的信息偷偷传递到我的服务器上来。")]),t._v(" "),a("p",[t._v("其实原理上就是黑客通过某种方式（发布文章、发布评论等）将一段特定的 JS 代码隐蔽地输入进去。")]),t._v(" "),a("p",[t._v("然后别人再看这篇文章或者评论时，之前注入的这段 JS 代码就执行了。")]),t._v(" "),a("p",[a("strong",[t._v("JS 代码一旦执行，那可就不受控制了，因为它跟网页原有的 JS 有同样的权限")]),t._v("，例如可以获取 server 端数据、可以获取 cookie 等。于是，攻击就这样发生了。")]),t._v(" "),a("h4",{attrs:{id:"xss的危害"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss的危害"}},[t._v("#")]),t._v(" XSS的危害")]),t._v(" "),a("p",[t._v("XSS 的危害相当大，如果页面可以随意执行别人不安全的 JS 代码，轻则会让页面错乱、功能缺失，重则会造成用户的信息泄露。")]),t._v(" "),a("p",[t._v("比如早些年社交网站经常爆出 XSS 蠕虫，通过发布的文章内插入 JS，用户访问了感染不安全 JS 注入的文章，会自动重新发布新的文章，这样的文章会通过推荐系统进入到每个用户的文章列表面前，很快就会造成大规模的感染。")]),t._v(" "),a("p",[t._v("还有利用获取 cookie 的方式，将 cookie 传入入侵者的服务器上，入侵者就可以模拟 cookie 登录网站，对用户的信息进行篡改。")]),t._v(" "),a("h4",{attrs:{id:"xss的预防"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss的预防"}},[t._v("#")]),t._v(" XSS的预防")]),t._v(" "),a("p",[t._v("那么如何预防 XSS 攻击呢？—— 最根本的方式，"),a("strong",[t._v("就是对用户输入的内容进行验证和替换")]),t._v("，需要替换的字符有")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("& 替换为："),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("\n< 替换为："),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v("\n> 替换为："),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),t._v("\n” 替换为："),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:'"'}},[t._v("&quot;")]),t._v("\n‘ 替换为："),a("span",{pre:!0,attrs:{class:"token entity",title:"&#x27;"}},[t._v("&#x27;")]),t._v("\n/ 替换为："),a("span",{pre:!0,attrs:{class:"token entity",title:"&#x2f;"}},[t._v("&#x2f;")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("替换了这些字符之后，黑客输入的攻击代码就会失效，XSS 攻击将不会轻易发生。")]),t._v(" "),a("p",[t._v("除此之外，还可以通过对 cookie 进行较强的控制，比如对敏感的 cookie 增加"),a("code",[t._v("http-only")]),t._v("限制，让 JS 获取不到 cookie 的内容。")]),t._v(" "),a("h3",{attrs:{id:"csrf-xsrf-cross-site-request-forgery-跨站请求伪造"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf-xsrf-cross-site-request-forgery-跨站请求伪造"}},[t._v("#")]),t._v(" CSRF(XSRF)（Cross-site request forgery，跨站请求伪造）")]),t._v(" "),a("p",[t._v("CSRF 是借用了当前操作者的权限来偷偷地完成某个操作，而不是拿到用户的信息。")]),t._v(" "),a("p",[t._v("你正在购物，看中了某个商品，商品id是100")]),t._v(" "),a("p",[t._v("付费接口是 xxx.com/pay?id=100，但没有任何验证")]),t._v(" "),a("p",[t._v("我是攻击者，我看中了一个商品，id是200")]),t._v(" "),a("p",[t._v("我向你发送一封电子邮件，邮件标题很吸引人")]),t._v(" "),a("p",[t._v("但邮件正文隐藏着<img src=xxx.com/pay?id=200")]),t._v(" "),a("p",[t._v("你一查看邮件，就帮我购买了id是200的商品")]),t._v(" "),a("h4",{attrs:{id:"预防-csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防-csrf"}},[t._v("#")]),t._v(" 预防 CSRF")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用post接口")])]),t._v(" "),a("li",[a("p",[t._v("增加验证，例如密码、短信验证码、指纹等")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);