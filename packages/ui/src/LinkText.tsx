import { styled, SizableText } from 'tamagui'

export const LinkText = styled(SizableText, {
  name: 'LinkText',
  // display: 'inline',
  alignSelf: 'flex-start',
  cursor: 'pointer',
  animation: 'fast',
  hoverStyle: {
    fontWeight: 'bold',
  },
  '$platform-web': {
    borderBottomColor: '$green9',
    borderBottomWidth: '$1',
  },
  '$platform-native': {
    textDecorationLine: 'underline',
    textDecorationColor: '$color10',
    textDecorationStyle: 'solid',
    color: '$green11',
  },
})
