##  手写call、apply和bind函数

### 1.call函数的实现步骤


1. 判断调用对象是否是函数，即使我们是定义在函数的原型上的，但是可能出现使用call等方式调用的情况。  
2. 判断传入上下文对象是否存在，如果不存在，则设置为window  
3. 处理传入的参数，截取第一个参数后的所有参数。  
4. 将函数作为上下文对象的一个属性。  
5. 使用上下文对象来调用这个方法，并保存返回结果。  
6. 删除刚才新增的属性。  
7. 返回结果。

```js
// call实现
Function.prototypr.maCall = function(context) {
    if(typeof this !== 'function') {
        console.error('type error')
    }

    let args = [...arguments].slice(1),
        result = null;
    context = context || windows;
    context.fn = this;
    result = context.fn(...args);
    detele context.fn;
    return result;
}
```

### 2.apply函数的实现步骤

1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。  
2. 判断传入上下文对象是否存在，如果不存在，则设置为 window 。  
3. 将函数作为上下文对象的一个属性。
4. 判断参数值是否传入
5. 使用上下文对象来调用这个方法，并保存返回结果。
6. 删除刚才新增的属性
7. 返回结果

```js
// apply的实现
Function.prototype.maApply = function(context) {
    if(typeof this !== 'function') {
        console.error('type error')
    }
    let result = null;
    context = context || window;
    context.fn = this;
    if(arguments[i]) {
        result = context.fn(...arguments(1))
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}
```

### 3.bind 函数的实现步骤

1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
2. 保存当前函数的引用，获取其余传入参数值。
3. 创建一个函数返回
4. 函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。

```js
// bind实现
Function.prototype.myBind = function(context) {
    if(typeof this !== 'function') {
        console.error('type error')
    }

    let args = [...arguments].slice(1),
        fn = this;
    return function Fn() {
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        )
    }
}
```


