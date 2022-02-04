const { title } = require("../.vuepress/config");

module.exports = [
  {
    title: "HTML",
    collapsable: true,
    children: [
      { title: "01-src和href的区别", path:"/guide/notes/html/01-src和href的区别"},
      { title: "02-HTML语义化的理解", path:"/guide/notes/html/02-HTML语义化的理解"},
      { title: "03-HTML5有哪些更新", path:"/guide/notes/html/03-HTML5有哪些更新"},
    ],
  },
  {
    title: "CSS",
    collapsable: true,
    children: [
      {
        title: "01-css样式书写顺序和命名规范",
        path: "/guide/notes/css/01-css样式书写顺序和命名规范",
      },
      { title: "02-less", path: "/guide/notes/css/02-less" },
      { title: "03-CSS基本样式和选择器", path: "/guide/notes/css/03-CSS基本样式和选择器"},
      { title: "04-CSS盒模型", path: "/guide/notes/css/04-盒模型" },
      { title: "05-显示样式", path: "/guide/notes/css/05-显示样式" },
      { title: "06-浮动", path: "/guide/notes/css/06-浮动" },
      { title: "07-定位", path: "/guide/notes/css/07-定位" },
      {
        title: "08-高级选择器和伪元素",
        path: "/guide/notes/css/08-高级选择器和伪元素",
      },
      { title: "09-动画样式", path: "/guide/notes/css/09-动画样式" },
      { title: "10-transform", path: "/guide/notes/css/10-transform" },
      { title: "11-弹性盒模型", path: "/guide/notes/css/11-弹性盒模型" },
      { title: "12-响应式", path: "/guide/notes/css/12-响应式" },

    ],
  },

  {
    title: "Javascipt",
    collapsable: true,
    children: [
      {
        title: "01-变量与数据类型介绍",
        path: "/guide/notes/js/01-变量与数据类型介绍",
      },
      { title: "02-基础dom操作", path: "/guide/notes/js/02-基础dom操作" },
      { title: "03-表达式和操作符", path: "/guide/notes/js/03-表达式和操作符" },
      { title: "04-判断", path: "/guide/notes/js/04-判断" },
      { title: "05-循环", path: "/guide/notes/js/05-循环" },
      { title: "06-函数", path: "/guide/notes/js/06-函数" },
      {
        title: "07-作用域,闭包,预解析",
        path: "/guide/notes/js/07-作用域,闭包,预解析",
      },
      { title: "08-数组", path: "/guide/notes/js/08-数组" },
      { title: "09字符串", path: "/guide/notes/js/09-字符串" },
      { title: "10-类型转换", path: "/guide/notes/js/10-类型转换" },
      { title: "11-DOM进阶", path: "/guide/notes/js/11-DOM进阶" },
      { title: "12-bom", path: "/guide/notes/js/12-bom" },
      { title: "13-面向对象", path: "/guide/notes/js/13-面向对象" },
      {
        title: "14-内置数学和时间对象",
        path: "/guide/notes/js/14-内置数学和时间对象",
      },
      {
        title: "15-各种距离宽高获取",
        path: "/guide/notes/js/15-各种距离宽高获取",
      },
      { title: "16-正则表达式", path: "/guide/notes/js/16-正则表达式" },
      { title: "17-箭头函数", path: "/guide/notes/js/17-箭头函数" },
      { title: "18-解构赋值", path: "/guide/notes/js/18-解构赋值" },
      {
        title: "19-剩余参数和展开运算符",
        path: "/guide/notes/js/19-剩余参数和展开运算符",
      },
      {
        title: "20-Set 和 Map数据结构和Symbol",
        path: "/guide/notes/js/20-Set 和 Map数据结构和Symbol",
      },
      {
        title: "21-遍历器和for-of循环",
        path: "/guide/notes/js/21-遍历器和for-of循环",
      },
      { title: "22-Promise", path: "/guide/notes/js/22-Promise" },
      { title: "23-Clsss类", path: "/guide/notes/js/23-Clsss类" },
      { title: "24-module模块", path: "/guide/notes/js/24-module模块" },
      { title: "25-Babel", path: "/guide/notes/js/25-Babel" },
      { title: "26-本地存储", path: "/guide/notes/js/26-本地存储" },
      { title: "27-ajax", path: "/guide/notes/js/27-ajax" },
    ],
  },


];
