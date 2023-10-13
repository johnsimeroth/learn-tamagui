import { XStack, Theme, ColorModePreview } from '@my/ui'

export function HomeScreen() {
  return (
    <XStack display='flex' f={1} flexWrap='wrap'>
      <Theme name='light'>
        <ColorModePreview />
      </Theme>
      <Theme name='dark'>
        <ColorModePreview />
      </Theme>
    </XStack>
  )
}
