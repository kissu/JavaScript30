# [HARDCORE] Challenge 10, shift input checklist
The challenge here is just to make a several click on each input inbetween
  checked box and where the cursor lands while pressing `shift` click.

### What I learned

> Check the comments in the code for further details !

Iterating over the DOM with childNodes and all that kind of stuff is a pretty
  bad idea since the HTML can simply be messed up if someone one day touches
  your code (and it WILL happen !).

Better use some common selectors, why not a bit more precise like in this
  exercise: `document.querySelectorAll('.inbox input[type=checkbox]')`

Do not try to messup with some `preventDefault` or whatever, like I first did...

Simply use [.shiftKey method][1] !

Cannot render `` `${x}` `` if `x = this` why ?!?

Need to be **super** careful with keyword `this` depending of if it's in an arrow
  function or not...

NEED TO work on that one again because the edge cases are pretty tricky.

### Small stuff

This is how multi line conditions are made in StandardJS
```js
if (
  (e.shiftKey && this.checked && previousClick !== this) &&
  (previousClick !== undefined)
) { // sexy code style
```

---

```html
<div class="item">
  <input type="checkbox" id="checkbox1">
  <label for="checkbox1">This is an inbox layout.</label>
</div>
```
is the way to go for a clicky label and an input checkbox.

Use `childNodes` to go into the children in a nodeList & `getAttribute` to get
  attribute (like `type`).


[1]: https://developer.mozilla.org/en-US/search?q=shiftkey

### Some ideas to add to the project

- [ ] fix some tricky edge cases, like if user click+shift 3 times on the
  same checkbox (_who does that ?_)
- [ ] try to refacto the code on my own way ? GL.
- [ ] make a better UX, click on the label instead of **just** the checkbox.