import { ScrollView, XStack, YStack, Theme, ColorModePreview, MyHeader} from '@my/ui'

export function HomeScreen() {
  return (
    <YStack display='flex' f={1}>
      <MyHeader />
      <ScrollView>
        <XStack display='flex' f={1} flexWrap='wrap'>
          <Theme name='light'>
            <ColorModePreview />
          </Theme>
          <Theme name='dark'>
            <ColorModePreview />
          </Theme>
        </XStack>
      </ScrollView>
    </YStack>
  )
}
