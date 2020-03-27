Is n divisible by x and y?

https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript


The obvious
```
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}
```

the smarter
```
function isDivisible(n, x, y) {
  return (n % x === 0 && n % y === 0) ? true : false;
}
```

OR

```
function isDivisible(n, x, y) {
    return (n%x)==0 && (n%y) == 0;
}
```

```
let isDivisible = (n, x, y) => n % x == 0 && n % y == 0
```


the best

```
function isDivisible(n, x, y) {
  return !(n%x||n%y)
}
```

OR


