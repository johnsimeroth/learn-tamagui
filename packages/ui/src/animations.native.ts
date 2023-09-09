import { createAnimations } from '@tamagui/animations-react-native'

export const animations = createAnimations({
  fast: {
    type: 'spring',
    damping: 30,
    mass: 1,
    stiffness: 250,
  },
  medium: {
    type: 'spring',
    damping: 30,
    mass: 1,
    stiffness: 100,
  },
  slow: {
    type: 'spring',
    damping: 30,
    mass: 1,
    stiffness: 75,
  },
})
