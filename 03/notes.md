# Challenge 3, CSS variables
The goal is to be aware of the existence of the css custom properties and how to
    use them in pair with js.

More information about it can be found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).

### What I learned
These CSS variables are super cool because when CSS is changed dynamicly, the
    browser repaints the page.
    
It also doesn't need any kind of preprocessor. But the compatibility is pretty
    meh [atm](https://caniuse.com/#search=variables).

### Minor stuff
`dataset` is a pretty useful property since it gives all the `data-*` elements
    available in page. 

Here we pnly have `data-sizing` but we could get 10 of them at the same time wo/
    any other selectors ! 

```js
    document.documentElement.style.setProperty
```
is probably not the usual way to go... Here it updates the value of the CSS
    variable to the one toggled by the input (cursor or color picker).

---
### Some ideas to add to the project

- [ ] `movemouse` and `change` can be done a bit more clever with some flags
- [x] make something fancy ? yes but what ??