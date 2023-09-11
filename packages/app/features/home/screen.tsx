import {
  ScrollView,
  XStack,
  Theme,
  ColorModePreview,
} from '@my/ui'

export function HomeScreen() {
  return (
    <ScrollView>
      <XStack
        display='flex'
        flex={1}
        flexWrap='wrap'
      >
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
