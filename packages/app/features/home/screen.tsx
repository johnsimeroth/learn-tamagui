import {
  ScrollView,
  XStack,
  Theme,
  ColorModePreview,
} from '@my/ui'

export function HomeScreen() {
  return (
    <ScrollView>
      <XStack flex={1}>
        <Theme name='light'>
          <ColorModePreview />
        </Theme>
        <Theme name='dark'>
          <ColorModePreview />
        </Theme>
      </XStack>
    </ScrollView>
  )
}
