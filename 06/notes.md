# Challenge 6, JSON fetch cities
The goal here was to get fetch some data from an external API, and to filter the results based on some user's input.

### What I learned
Basic one but super important, you **CAN** add values to a `const`. A `const`
  just cannot be re-assigned or re-declared but you can add values to it:

```js
  const tab = []; tab.push(3) // allowed
  const tab = []; tab = [3] // forbidden
```

`fetch` ([can I use support](https://caniuse.com/#search=fetch)) method is pretty like the old one `XMLHttpRequest`, it's sends us a
  promise. It can be used with the keyword [`then`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) to use the success return.

Use `.then` to transform into .json and then, use it again to make some use of
the data, print it, map it or whatever ! :yum:

---
```js
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
```
this function is pretty nice to get some _8 405 837_ formatted numbers (a space
  after each 3 digits)

Prefer using `addEventListener('input', function)` instead of change + keyup.

### Small stuff
Best practice is to make a variable for the regex and to use it in tests later
  on, rather than directly writting it into the condition.

`new RegExp(variable, 'gi')` -> `g` (global) & `i` (case insensitive)
