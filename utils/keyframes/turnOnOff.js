import makeKeyframe from './makeKeyframe'

export const turnOn = makeKeyframe({
  0: {
    scale: '1, 0.8',
    translate3d: '0, 0, 0',
    filter: 'brightness(30)',
    opacity: '1',
  },
  8: {
    scale: '1, 0.8',
    translate3d: '0, 100%, 0',
  },
  12: {
    scale: '1, 0.8',
    translate3d: '0, -100%, 0',
    opacity: '1',
  },
  32: {
    scale: '1.3, 0.6',
    translate3d: '0, 100%, 0',
    filter: 'brightness(30) saturate(8)',
    opacity: '0',
  },
  66: {
    skew: '0.6, 1.3',
    translate3d: '0, 0, 0',
    filter: 'blur(2) brightness(0) saturate(12)',
    opacity: '0',
  },
  99: {
    scale: '1, 1',
    skew: '0',
    translate3d: '0, 0, 0',
    filter: 'contrast(1) brightness(1.2) saturate(1.3)',
    opacity: '1',
  },
})
