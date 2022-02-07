## js数组转化为tree树状结构

### 1.数组转化为对象
```js
const arr = [
    { label: '男', value: 0 },
    { label: '女', value: 1 }
]

function ArrToObj (arr) {
    return arr.reduce((sum, item) => {
        sum[item['value']] = item['label']
        return sum
    },{})
}
const Obj = ArrToObj (arr);
```

### 2.对象转化为数组
```js
const obj = { 0: '男', 1: '女' }

function ObjToArr(obj) {
    let arr =[];
    let newObj = {}
    for( let key in obj) {
        newObj = { label : obj[key], value: key * 1}
        arr.push(newObj)
    }
    return arr
}
```

### 3.数组转化为树
```js
const data = [
  { id: '01', name: '张大大', pid: '', job: '项目经理' },
  { id: '02', name: '小亮', pid: '01', job: '产品leader' },
  { id: '03', name: '小美', pid: '01', job: 'UIleader' },
  { id: '04', name: '老马', pid: '01', job: '技术leader' },
  { id: '05', name: '老王', pid: '01', job: '测试leader' },
  { id: '06', name: '老李', pid: '01', job: '运维leader' },
  { id: '07', name: '小丽', pid: '02', job: '产品经理' },
  { id: '08', name: '大光', pid: '02', job: '产品经理' },
  { id: '09', name: '小高', pid: '03', job: 'UI设计师' },
  { id: '10', name: '小刘', pid: '04', job: '前端工程师' },
  { id: '11', name: '小华', pid: '04', job: '后端工程师' },
  { id: '12', name: '小李', pid: '04', job: '后端工程师' },
  { id: '13', name: '小赵', pid: '05', job: '测试工程师' },
  { id: '14', name: '小强', pid: '05', job: '测试工程师' },
  { id: '15', name: '小涛', pid: '06', job: '运维工程师' }
]
function toTree(data) {
    data.map(item => {
        item.label = item.name
        delete item.name
    })

    let arr = [];
    let obj = {};
    if(!(data instanceof Array)) {
        return arr
    }
    data.forEach(item => {
        obj[item.id] = item
    })
    function del(del) {
      return del.forEach(i => {
        delete i.id
        delete i.job
        delete i.pid
      })
    }
        data.forEach(item => {
          if (obj[item.pid]) {
            if (obj[item.pid].children) {
              obj[item.pid].children.push(item)
              // 遍历删除id、job、pid
              del(obj[item.pid].children)
            } else {
              ;(obj[item.pid].children = []).push(item)
              del(obj[item.pid].children)
            }
          } else {
            arr.push(item)
            del(arr)
          }
        })
        return arr
      }
。
}
```