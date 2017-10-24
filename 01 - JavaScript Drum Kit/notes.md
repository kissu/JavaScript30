# Challenge 1, Drum Kit
The goal was to make some kind of drum machine, when you press a button, it makes a sound :musical_note: paired with a nice animation. :notes:

### What I learned
This part of code is pretty tricky :exclamation:
```js
document.querySelector(`audio[data-key="${e.keyCode}"]`).play()
```

+ First of, the play() method only works on a block (here, div w/ a 'src')
+ Thanks to ES6, we can interpolate `e.keyCode` with the `` ` `` (backticks)

```js
addEventListener('transitionend', functionToRun)
```

+ cool listener since it's auto runs when the animation on an object is done.
    But :exclamation: because it can sometimes be executed on multiple animations.
    In this code: box-shadow, border (all 4 of them) & transform would be executed 6 times if we didn't prevent it with `if (e.propertyName !== 'transform') return`

### Minor stuff
```js
var key = audio[data-key...]
```

+ selector structure is used to reach blocs like `<audio data-key="81" src="sounds/clap.wav"></audio>`

+ `div-containing-audio-file`.**currentTime = 0** is nice to allow spam if key is pressed again (it starts the whole audio from the beginning)

---
### Some ideas to add to the project
* [ ] add a better bg wallpaper: `horror soma room wallpaper` on Google Images
* [ ] some creepy sounds (Samples of Tenalach in my Downloads)
* [ ] make some fancy css effect to make it more creepy
* [ ] autorun a music in the background ?
