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
