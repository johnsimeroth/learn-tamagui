import { ScrollView, XStack, YStack, Theme, ColorModePreview, MyHeader, NavMenu} from '@my/ui'

export function HomeScreen() {
  return (
    <YStack display='flex' f={1}>
      <MyHeader />
      <XStack>
        <NavMenu />
      <ScrollView tag='main'>
        <XStack display='flex' f={1} flexWrap='wrap'>
          <Theme name='light'>
            <ColorModePreview />
          </Theme>
          <Theme name='dark'>
            <ColorModePreview />
          </Theme>
        </XStack>
      </ScrollView>
      </XStack>
    </YStack>
  )
}
