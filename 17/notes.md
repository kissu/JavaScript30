# Challenge 17, Sorting wo/ useless words
Again a little exercise on how to sort some band names without useless words
  like "a", "the", "oh"

### What I learned
My code was totally garbage and not as efficient as Wes'...but in fact, the
  solution was pretty damn easy, just didn't thought about a regex + replace.

`Replace` is super powerful btw, [check it][1] !

The classic `sort(a, b)` method is used here, obviously.

We need to do the `.join('')` to get rid of the commas `,` that innerHTML is
  automaticaly putting since it's changing the array to a string.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace