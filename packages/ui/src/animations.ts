import { createAnimations } from '@tamagui/animations-css'

export const animations = createAnimations({
  fast: 'ease-in-out 0.1s',
  medium: 'ease-in-out 0.25s',
  slow: 'ease-in-out 0.4s',
})



// export const animations = createAnimations({
//   bouncy: {
//     type: 'spring',
//     damping: 10,
//     mass: 0.9,
//     stiffness: 100,
//   },
//   lazy: {
//     type: 'spring',
//     damping: 20,
//     stiffness: 60,
//   },
//   quick: {
//     type: 'spring',
//     damping: 20,
//     mass: 1.2,
//     stiffness: 250,
//   },
// })

// import { createAnimations } from '@tamagui/animations-css'
// export const animations = createAnimations({
//   fast: {
//     damping: 9,
//     mass: 0.9,
//     stiffness: 150,
//   },
//   medium: {
//     damping: 14,
//     mass: 0.9,
//     stiffness: 100,
//   },
//   slow: {
//     damping: 18,
//     stiffness: 50,
//   },
// });
