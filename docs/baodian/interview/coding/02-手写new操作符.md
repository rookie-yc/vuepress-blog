## 手写new操作符

在调用**new**的过程中会发生以下四个步骤：  
（1）首先创建一个空对象；  
（2）设置原型，将对象的原型设置为函数的prototype对象。  
（3）让函数的this指向这个对象，并执行构造函数代码。  
（4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

```js
function objectFactory() {
    let obj = new Object();
    let fn = Array.prototype.shift.call(arguments);
    obj.__proto__ = fn.prototype;
    fn.apply(obj, arguments)
    return obj
}
```