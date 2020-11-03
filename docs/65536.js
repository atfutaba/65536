(() => {
  const text = 'mousemove to out of the window left or top with mousedown'
  const magicNumber = 256 * (256 - 32) //a value close to 65536(256*256)
  const isOver = value => magicNumber < Math.abs(value)
  const color = value => '<span style="color:red;">' + value + '</span>'
  const html = value => isOver(value) ? color(value) : value
  document.body.innerHTML = text
  addEventListener('mousemove', e => {
    const { buttons, clientX, clientY, offsetX, offsetY, pageX, pageY, screenX, screenY } = e
    e.preventDefault()
    document.body.innerHTML = text + '<pre>' + [
      'button pressed:' + !!buttons,
      'is in content-area:' + (0 <= clientX && clientX <= innerWidth && 0 <= clientY && clientY <= innerHeight),
      'is in window:' + (screenLeft <= screenX && screenX <= screenLeft + outerWidth && screenTop <= screenY && screenY <= screenTop + outerHeight),
      'event.clientX:' + html(clientX),
      'event.clientY:' + html(clientY),
      'event.offsetX:' + html(offsetX),
      'event.offsetY:' + html(offsetY),
      'event.pageX:' + html(pageX),
      'event.pageY:' + html(pageY),
      'event.screenX:' + html(screenX),
      'event.screenY:' + html(screenY),
      'window.screenX:' + html(window.screenX),
      'window.screenY:' + html(window.screenY),
      'window.screenLeft:' + html(screenLeft),
      'window.screenTop:' + html(screenTop)
    ].join('\n') + '</pre>'
  })
})()
