# Challenge 7, cardio's arrays 2.0
Some other exercices & tips on iterable elements.

A bit too simple exercice. ^^

### Small stuff
Pretty small and easy exercice.

`splice` is used as
```js
  array.splice(start, numberOfElementsToDeleteFromTheIndex, stuffToAdd)
```

So it can be used as
```js
array.splice(1, 0, "stuff", "to", "add") // add elements from the index 1
```

```js
array.splice(2, 2) // remove 2 elements from index 2
```

Or other combinations ofc, complete examples can de found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

---

`slice` is a splice-like function, but it just takes a part of an array.
```js
  array.slice(begin, end)
```
it takes the `begin` index and the `end-1` and return this range.

Great examples [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) as always.