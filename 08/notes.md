# Challenge 8, super fun Canvas drawing
The aim is to make a board like we're drawing in it. :D

### What I learned
`mouseout` helps to cancel the callback when the cursor is going out of the
  canvas to not permanently trigger the action but reset it instead.
`ctx.stroke()` is the main thing that draw lines !

`hsl`'s hue allow to not take into account values > 360, it will loop by itself.

### Small stuff
`canvas.width = window.innerWidth` helps to fit the canvas to the maximum width
  of the viewport (excluding the vertical scrollbar).
All other little methods can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D),
 as always.