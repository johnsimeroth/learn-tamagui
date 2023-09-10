import {
  ScrollView,
  XStack,
  Theme,
  ColorModePreview,
  ResponsiveStack,
} from '@my/ui'

export function HomeScreen() {
  return (
    <ScrollView>
      <ResponsiveStack flex={1}>
        <Theme name='light'>
          <ColorModePreview />
        </Theme>
        <Theme name='dark'>
          <ColorModePreview />
        </Theme>
      </ResponsiveStack>
    </ScrollView>
  )
}
