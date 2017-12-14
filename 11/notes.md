# Challenge 11, video manipulation
The challenge is to try out some things with the video tag, and custom some
  controls.

### What I learned

There are 3 cools eventListener: `timeupdate/progress`, `play` & `pause`.

My code isn't Wes' like but his is much better since it's using those.

All the listeners can be found [here][10].

Globally, extracting video wo/ using iframes is hardcore. Idk why tho...

[Here][1] is a link on how to achieve it from Vimeo (it may expire tho...)

Steps to follow: 1, 2, 3 & copypasta the url in your code.
BOOM! it's done, no more stuff to do ! Here's a visual.
![here][2]

Then, to use this stream (_I guess ?_) we can get some ressources of docs here:
- [MDN][3] as always !
- this [one][5].
- this [one][6] too I guess.
- awesome [W3C test page][4] where you can test some stuff quickly & with all the
  displayed values in real time.

To use a YouTube video into a `video` tag, we have 2 choices:
- do not do this and use their `iframe` [way][7] (check samples section)
- just use [plyr][9] !
- use [MediaElement][8] not super cool because using Flash......

The part after `/* eslint-disable no-return-assign */` is to prevent the
  eventListener to trigger 20k times per second.

This part (enable/disable fullscreen mode) was pretty hardcore to find,
  especially to find one working method... Just copypasta it, if needed.

```js
function toggleFullscreen () {
  document.webkitFullscreenElement
    ? document.webkitExitFullscreen()
    : video.webkitRequestFullscreen()
}
```

[1]: https://superuser.com/questions/1033563/how-to-download-video-with-blob-url
[2]: https://i.imgur.com/UDrQSaW.png
[3]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
[4]: https://www.w3.org/2010/05/video/mediaevents.html
[5]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
[6]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
[7]: https://developers.google.com/youtube/iframe_api_reference#Examples
[8]: https://github.com/mediaelement/mediaelement
[9]: https://github.com/sampotts/plyr
[10]: https://developer.mozilla.org/en-US/docs/Web/Events

### Cool stuff to add

- [x] cute penguins added ! <3
- [x] add the fullscreen mode (by double clicking) to the player