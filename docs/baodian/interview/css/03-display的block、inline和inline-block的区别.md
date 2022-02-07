## display的block、inline和inline-block的区别

（1）**block**： 会独占一行，多个元素会另起一行，可以设置width、height、margin和padding属性；
（2）**inline**：元素不会独占一行，设置width、heigh属性无效。但可以设置水平方向的margin和padding属性，不能设置垂直方向；
（3）**inline-block**:将对象设置为inline对象，但是对象的内容作为block对象呈现，之后的内联对象会被排列在同一行内。  
  
对于行内元素和块级元素，其特点如下：  
**（1）行内元素**
- 设置宽高无效；
- 可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin；
- 不会自动换行
**（2）块级元素**
- 可以设置高宽；
- 设置margin和padding都有效；
- 可以自动换行；
- 多个块状，默认排列从上到下;


