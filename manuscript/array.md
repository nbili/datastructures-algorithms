## javascript基础数组操作

#### push

> 添加元素到数组末尾

```javascript
    numbers.push(11);
```

#### unshift

> 添加元素到数组首位

```javascript
    numbers.unshift(11);
```

#### pop

> 删除数组中最后的元素

```javascript
    numbers.pop(11)
```

#### shift

> 删除数组中第一个元素

```javascript
    numbers.shift(11);
``

#### delete

> 删除数组中的元素


```javascript
    delete number[0];
    number[0] == undefined;
```

#### splice

> 在任意位置添加或者删除元素

```javascript
    number.splice(5, 3); // 从索引5开始删除3个元素
    number.splice(5, 3, 000); // 从索引5开始删除3个元素，把000插入
```

#### concat

> 数组合并

```javascript
    arr1.concat(5, arr2);
```

#### every

> 迭代元素

```javascript
    numbers.every(isEven);
    // 迭代每个元素，直到返回false，然后every结束执行
```

#### some

> 迭代元素

```javascript
    numbers.some(isEven);
    // 迭代每个元素，直到返回true，然后some结束执行
```

#### forEach

> 迭代方法

```javascript
    numbers.forEach(function(item, index, array){
        // 迭代每个元素，无返回值
    });
```

#### map

> 迭代方法

```javascript
    numbers.map(function(item, index, array){
        // 迭代每个元素，返回新数组
    });
```

#### filter

> 过滤元素

```javascript
    numbers.filter(function(){
        // 返回为true的，组成新数组返回
    });
```

#### reduce

> 迭代方法

```javascript
    numbers.reduce(function(previous, current, index, array){
        // 四个参数，返回累加器
    });
```

#### entries

> 获取迭代器

```javascript
    let aEntris = numbers.entries();
    aEntris.next().value;
```

#### keys

> 获取数组索引

```javascript
    numbers.keys();
```

#### values

> 获取数组值

```javascript
    numbers.values();
```

#### from

> 复制数组

```javascript
    numbers.from(ary, filterFunction);
    // 返回新数组
```

#### of

> 参数转数组

```javascript
    numbers.of(1, 2, 3, 4);
    // 返回新数组
```

#### fill

> 填充数组

```javascript
    numbers.fill(0);
    numbers.fill(startIndex, endIndex, fillValue);
```

#### copyWithin

> 复制系列元素到同数组指定位置

```javascript
    numbers.copyWithin(index, startCopyIndex, endCopyIndex);
```