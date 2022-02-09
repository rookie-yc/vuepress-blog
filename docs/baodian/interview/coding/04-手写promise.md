## 手写Promise

```js
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromise(fn) {
    // 保存初始化状态
    var self = this;

    // 初始化状态
    this.state = PENDING;

    // 用于保存resolve 或者 rejected 传入的值
    this.value = null;

    // 用于保存resolve的回调函数
    this.resolvedCallbacks = [];

    // 用于保存reject的回调函数
    this.rejectedCallbacks = [];

    // 状态转变为resolved方法
    function resolve(value) {
        // 判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再进行改变
        if (value instanceof MyPromise) {
            return value.then(resolve, reject);
        }
        // 保证代码的执行顺序为本轮事件循环的末尾
        setTimeout(() => {
            // 只有状态为 pending 时才能转变，
            if(self.state === PENDING) {
                // 修改状态
                self.state = RESOLVED;

                // 设置传入的值
                self.value = value;
                // 执行回调函数
                self.resolvedCallbacks.forEach(callback => {
                    callback(value);
                });
            }
        }, 0)
    }

    function reject(value) {
        // 判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再进行改变
        if (value instanceof MyPromise) {
            return value.then(resolve, reject);
        }

        setTimeout(() => {
            if(self.state === PENDING) {
                self.state = REJECTED
                self.value = value;
                self.rejectCallbacks.forEach(callback => {
                    callback(value)
                })
            }
        },0);
    }
    try(
        fn(resolve, reject);
    ) catch (e) {
        reject(e)
    }
}

MyPromise.prototype.then = function(onResolved, onRejected) {
    onResolved =
        typeof onResolved === 'function'
            ? onResolved
            : function(value) {
                return value;
            };
    onRejected =
    typeof onRejected === "function"
      ? onRejected
      : function(error) {
          throw error;
        };
    if (this.state === PENDINFG) {
        this.resolvedCallbacks.push(onResolved);
        this.rejectedCallbacks.push(onRejected);
    }
    if (this.state === RESOLVED) {
        onResolved(this.value);
    }

    if (this.state === REJECTED) {
        onRejected(this.value);
    }

}
```