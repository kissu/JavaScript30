# Challenge 4, Cardio practice
The goal here was to make some practice with basic methods of JavaScript like
  map, sort, filter and so on.

### What I learned
- `reduce` is pretty much used to make some computation on a lot of stuff.

But faster and in a cleaner way.
Since reduce works in a `reduce(counter, item)` way.

```js
var totalYears = 0
for (var i = 0; i < inventors.length; i++) {
  totalYears += invetors[i].year
}
```

- `map` is all always just copying an array into another after some operations on
  its elements.

- `sort` can be used in multiple ways:

```js
wes way ↵
const oldest = inventors.sort(function(a, b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return lastInventor > nextInventor ? -1 : 1; // sort bubbling
});
```
```js
mine ↵
inventors.sort((a, b) => (b['passed'] - b['year']) - (a['passed'] - a['year']))
```
The 2 codes above are for a sorting of people (by how much they lived).
The 2 ways are ofc correct, just a preference.