import { styled, SizableText } from 'tamagui'

export const LinkText = styled(SizableText, {
  name: 'LinkText',
  display: 'inline',
  alignSelf: 'flex-start',
  cursor: 'pointer',
  animation: 'fast',
  borderBottomColor: '$green9',
  borderBottomWidth: '$1',
  hoverStyle: {
    borderBottomWidth: '$1.5',
    fontWeight: 'bold',
  }
});
