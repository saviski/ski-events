import { Emitter } from './emitter.js'

export const onabort = new Emitter('abort', UIEvent)
export const onanimationcancel = new Emitter('animationcancel', AnimationEvent)
export const onanimationend = new Emitter('animationend', AnimationEvent)
export const onanimationiteration = new Emitter('animationiteration', AnimationEvent)
export const onanimationstart = new Emitter('animationstart', AnimationEvent)
export const onauxclick = new Emitter('auxclick', MouseEvent)
export const onbeforeinput = new Emitter('beforeinput', InputEvent)
export const onblur = new Emitter('blur', FocusEvent)
export const oncancel = new Emitter('cancel', Event)
export const oncanplay = new Emitter('canplay', Event)
export const oncanplaythrough = new Emitter('canplaythrough', Event)
export const onchange = new Emitter('change', Event)
export const onclick = new Emitter('click', MouseEvent)
export const onclose = new Emitter('close', Event)
export const oncompositionend = new Emitter('compositionend', CompositionEvent)
export const oncompositionstart = new Emitter('compositionstart', CompositionEvent)
export const oncompositionupdate = new Emitter('compositionupdate', CompositionEvent)
export const oncontextmenu = new Emitter('contextmenu', MouseEvent)
export const oncuechange = new Emitter('cuechange', Event)
export const ondblclick = new Emitter('dblclick', MouseEvent)
export const ondrag = new Emitter('drag', DragEvent)
export const ondragend = new Emitter('dragend', DragEvent)
export const ondragenter = new Emitter('dragenter', DragEvent)
export const ondragexit = new Emitter('dragexit', Event)
export const ondragleave = new Emitter('dragleave', DragEvent)
export const ondragover = new Emitter('dragover', DragEvent)
export const ondragstart = new Emitter('dragstart', DragEvent)
export const ondrop = new Emitter('drop', DragEvent)
export const ondurationchange = new Emitter('durationchange', Event)
export const onemptied = new Emitter('emptied', Event)
export const onended = new Emitter('ended', Event)
export const onerror = new Emitter('error', ErrorEvent)
export const onfocus = new Emitter('focus', FocusEvent)
export const onfocusin = new Emitter('focusin', FocusEvent)
export const onfocusout = new Emitter('focusout', FocusEvent)
export const ongotpointercapture = new Emitter('gotpointercapture', PointerEvent)
export const oninput = new Emitter('input', Event)
export const oninvalid = new Emitter('invalid', Event)
export const onkeydown = new Emitter('keydown', KeyboardEvent)
export const onkeypress = new Emitter('keypress', KeyboardEvent)
export const onkeyup = new Emitter('keyup', KeyboardEvent)
export const onload = new Emitter('load', Event)
export const onloadeddata = new Emitter('loadeddata', Event)
export const onloadedmetadata = new Emitter('loadedmetadata', Event)
export const onloadstart = new Emitter('loadstart', Event)
export const onlostpointercapture = new Emitter('lostpointercapture', PointerEvent)
export const onmousedown = new Emitter('mousedown', MouseEvent)
export const onmouseenter = new Emitter('mouseenter', MouseEvent)
export const onmouseleave = new Emitter('mouseleave', MouseEvent)
export const onmousemove = new Emitter('mousemove', MouseEvent)
export const onmouseout = new Emitter('mouseout', MouseEvent)
export const onmouseover = new Emitter('mouseover', MouseEvent)
export const onmouseup = new Emitter('mouseup', MouseEvent)
export const onpause = new Emitter('pause', Event)
export const onplay = new Emitter('play', Event)
export const onplaying = new Emitter('playing', Event)
export const onpointercancel = new Emitter('pointercancel', PointerEvent)
export const onpointerdown = new Emitter('pointerdown', PointerEvent)
export const onpointerenter = new Emitter('pointerenter', PointerEvent)
export const onpointerleave = new Emitter('pointerleave', PointerEvent)
export const onpointermove = new Emitter('pointermove', PointerEvent)
export const onpointerout = new Emitter('pointerout', PointerEvent)
export const onpointerover = new Emitter('pointerover', PointerEvent)
export const onpointerup = new Emitter('pointerup', PointerEvent)
export const onprogress = new Emitter('progress', ProgressEvent)
export const onratechange = new Emitter('ratechange', Event)
export const onreset = new Emitter('reset', Event)
export const onresize = new Emitter('resize', UIEvent)
export const onscroll = new Emitter('scroll', Event)
export const onsecuritypolicyviolation = new Emitter(
  'securitypolicyviolation',
  SecurityPolicyViolationEvent
)
export const onseeked = new Emitter('seeked', Event)
export const onseeking = new Emitter('seeking', Event)
export const onselect = new Emitter('select', Event)
export const onselectionchange = new Emitter('selectionchange', Event)
export const onselectstart = new Emitter('selectstart', Event)
export const onstalled = new Emitter('stalled', Event)
export const onsubmit = new Emitter('submit', Event)
export const onsuspend = new Emitter('suspend', Event)
export const ontimeupdate = new Emitter('timeupdate', Event)
export const ontoggle = new Emitter('toggle', Event)
export const ontouchcancel = new Emitter('touchcancel', TouchEvent)
export const ontouchend = new Emitter('touchend', TouchEvent)
export const ontouchmove = new Emitter('touchmove', TouchEvent)
export const ontouchstart = new Emitter('touchstart', TouchEvent)
export const ontransitioncancel = new Emitter('transitioncancel', TransitionEvent)
export const ontransitionend = new Emitter('transitionend', TransitionEvent)
export const ontransitionrun = new Emitter('transitionrun', TransitionEvent)
export const ontransitionstart = new Emitter('transitionstart', TransitionEvent)
export const onvolumechange = new Emitter('volumechange', Event)
export const onwaiting = new Emitter('waiting', Event)
export const onwheel = new Emitter('wheel', WheelEvent)

export const onafterprint = new Emitter('afterprint', Event)
export const onbeforeprint = new Emitter('beforeprint', Event)
export const onbeforeunload = new Emitter('beforeunload', BeforeUnloadEvent)
export const oncompassneedscalibration = new Emitter('compassneedscalibration', Event)
export const ondevicemotion = new Emitter('devicemotion', DeviceMotionEvent)
export const ondeviceorientation = new Emitter(
  'deviceorientation',
  DeviceOrientationEvent
)
export const ondeviceorientationabsolute = new Emitter(
  'deviceorientationabsolute',
  DeviceOrientationEvent
)
export const ongamepadconnected = new Emitter('gamepadconnected', GamepadEvent)
export const ongamepaddisconnected = new Emitter('gamepaddisconnected', GamepadEvent)
export const onhashchange = new Emitter('hashchange', HashChangeEvent)
export const onmousewheel = new Emitter('mousewheel', Event)
export const onoffline = new Emitter('offline', Event)
export const ononline = new Emitter('online', Event)
export const onorientationchange = new Emitter('orientationchange', Event)
export const onpagehide = new Emitter('pagehide', PageTransitionEvent)
export const onpageshow = new Emitter('pageshow', PageTransitionEvent)
export const onpopstate = new Emitter('popstate', PopStateEvent)
export const onreadystatechange = new Emitter('readystatechange', ProgressEvent)
export const onstorage = new Emitter('storage', StorageEvent)
export const onunload = new Emitter('unload', Event)
export const onvrdisplayactivate = new Emitter('vrdisplayactivate', Event)
export const onvrdisplayblur = new Emitter('vrdisplayblur', Event)
export const onvrdisplayconnect = new Emitter('vrdisplayconnect', Event)
export const onvrdisplaydeactivate = new Emitter('vrdisplaydeactivate', Event)
export const onvrdisplaydisconnect = new Emitter('vrdisplaydisconnect', Event)
export const onvrdisplaypresentchange = new Emitter('vrdisplaypresentchange', Event)
