Grasshopper - Summation

https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript


Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.


ie - 
```
summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

```



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


