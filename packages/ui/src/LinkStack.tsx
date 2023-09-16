import { styled, YStack } from 'tamagui'

export const LinkStack = styled(YStack, {
  name: 'LinkStack',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: '$2',
  borderRadius: '$2',
  cursor: 'pointer',
  animation: 'fast',
  hoverStyle: {
    scale: 1.1,
    backgroundColor: 'rgba(117,159,110,0.7)'
  }
});
