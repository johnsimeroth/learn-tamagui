import { createAnimations } from '@tamagui/animations-css'

// TODO: make web animations bounce so they somewhat match native animations.

export const animations = createAnimations({
  fast: 'ease-in-out 0.1s',
  medium: 'ease-in-out 0.25s',
  slow: 'ease-in-out 0.4s',
})
