# Challenge 5, Image Gallery
We had to make a responsive flexbox 5-grided wallpaper. Each tile grows when
  clicked and nearby ones got a reduced size.

### Minor stuff
Don't forget to use the `transitionend` listener to achieve nice transitions.

When using it, check which things are transition'ed, to avoid multiple
  useless operations. Just do
```js
function asideText(e) {
  if e.propertyName === 'something' {
  // or use `if (e.propertyName !== 'something') return` to ignore some cases
    ...
  }
}
```

Think about using `:first-child` & `:last-child` to target properly children.

Instead of using js conditions or `:not` vaudoo selectors. :fearful: