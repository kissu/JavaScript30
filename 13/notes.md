# Challenge 13, fancy animation on scroll
Today's challenge is how to make some images fade-in gently while we scroll
  down. :lipstick:

Hide and fade-in back when scroll up, without using a lot of ressources ofc.

This exercise was pretty tricky to understand what we're testing/talking about
  :cold_sweat: but after that, it's pretty easy.

### What I learned
`debounce` is useful to not spam the eventListener by checking every
  _1ms_ if we scrolled the page or not, it'screen kinda a refresh rate. PS:
  [Lodash][1] implementation.

Grafikart did a [video][2] about the [IntersectionObserver][3]. Either use this if
  IE 11 support is not needed or use an external library.

---
`window.innerHeight` gives us the current height of the window, so around
  1000px (how long it is from top to bottom).

`window.scrollY` gives us how much the document is scrolled vertically atm.

The combo: `window.scrollY + window.innerHeight` gives us the position in pixels
  of the browser bottom line.

`offsetTop` gives the **absolute** position of an element on the page from the top.
  As expected, this value never changes.

The main thing to understand here is that everytime we scroll, we gonna make
  tests on all of the images and check their coordinates (make class changes
  if needed. That's how we know which ones need to be changed, we just take each
  of them for tests ! :neutral_face:

[1]: https://lodash.com/docs/4.17.4#debounce
[2]: https://youtu.be/Qoa-N30FrSY
[3]: https://caniuse.com/#search=intersection
