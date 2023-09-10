import { YStack, styled } from 'tamagui'

export const ResponsiveStack = styled(YStack, {
  name: 'ResponsiveStack',
  f: 1,
  $gtMd: {
    flexDirection: 'row',
  },
  variants: {
    spaced: {
      true: {
        w: '100%',
        space: '$6',
        jc: 'space-between',
        pb: '$6',
      },
    },
  } as const,
})

// TODO: figure out how to add media queries to variants like this.
// export const ResponsiveXStack = styled(YStack, {
//   name: 'ResponsiveXStack',
//   f: 1,
//   w: '100%',
//   space: '$6',
//   jc: 'space-between',
//   pb: '$6',
//   variants: {
//     dir: {
//       md: {
//         flexDirection: 'column',
//         $gtMd: { flexDirection: 'row' }, // should change to row for anything greater than medium breakpoint
//       }
//     },
//   } as const,
// })
