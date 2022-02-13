## 手写flat

### （1）递归时间
普通的递归思路很容易理解，就是通过循环递归的方式，一项一项地去遍历，如果每一项还是一个数组，那么就继续往下遍历，利用递归程序的方法，来实现数组的每一项的连接：

```js
// call实现
let arr = [1, [2, [3, 4, 5]]];
function flatten (arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
```

### （2）reduce 函数迭代
从上面普通的递归函数中可以看出，其实就是对数组的每一项进行处理，那么其实也可以用reduce 来实现数组的拼接，从而简化第一种方法的代码，改造后的代码如下所示：

```js
let arr = [1, [2, [3, 4]]];
function flatten (arr) {
  return arr.reduce(function(pre, next) {
    return pre.concat(Array.isArray(next) ? flatten(next) : next)
  },[])
}
```

### （3）扩展运算符实现
```js
let arr = [1, [2, [3, 4]]];
function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
```