const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
player.controls = false

let oldValue = 0 // not core, used to make a cleaner console.log
function updateProgression () {
  setInterval(() => {
    let currentTime = video.currentTime
    const totalTime = video.duration
    let currentRatio = parseInt(currentTime / totalTime * 100)
    progressBar.style.flexBasis = `${currentRatio}%`
    if (currentRatio !== oldValue) {
      // console.log(`video progression is at ${currentRatio}%`)
      oldValue = currentRatio
    }
  }, 1000)
}

function togglePlay () {
  const x = video.paused ? video.play() : video.pause()
  if (x) {
    toggle.innerText = '❚❚'
    console.log('video running...')
  } else {
    toggle.innerText = '►'
    console.log('video paused.')
  }
}

// working too >> for(i of skipButtons) { console.log(i.dataset.skip) }
function skipSeconds () {
  const skipValue = this.dataset.skip
  video.currentTime += parseInt(skipValue)
  updateProgression()
  console.log(`buffered ${skipValue}s`)
}

function updateRanges () {
  const whichRange = this.name === 'volume' ? 'volume' : 'playbackRate'
  video[whichRange] = this.value
  if (this.name === 'volume') {
    console.log(`${this.name} updated to ${parseInt(this.value * 100)} %`)
  } else {
    console.log(`${this.name} updated to ${this.value}`)
  }
}

function skipTo (e) {
  const skipTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = skipTime
}

function toggleFullscreen () {
  document.webkitFullscreenElement
    ? document.webkitExitFullscreen()
    : video.webkitRequestFullscreen()
}

toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('dblclick', toggleFullscreen)

skipButtons.forEach(button => button.addEventListener('click', skipSeconds))
ranges.forEach(range => range.addEventListener('change', updateRanges))
ranges.forEach(range => range.addEventListener('mousemove', updateRanges))
progress.addEventListener('click', skipTo)

/* eslint-disable no-return-assign */
let mousedown = false
progress.addEventListener('mousemove', (e) => mousedown && skipTo(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)
updateProgression()
