import { ScrollView, XStack, YStack, Theme, ColorModePreview, SizableText, Separator } from '@my/ui'

import { Menu } from '@tamagui/lucide-icons'

function Header() {
  return (
    <XStack jc='space-between' paddingVertical='$3' paddingHorizontal='$5'>
      <Menu />
      <XStack space='$3'>
        <SizableText>GitHub</SizableText>
        <Separator alignSelf="stretch" vertical />
        <SizableText>Tamagui Docs</SizableText>
        <Separator alignSelf="stretch" vertical />
        <SizableText>Solito Docs</SizableText>
      </XStack>
    </XStack>
  )
}

export function HomeScreen() {
  return (
    <YStack display='flex' f={1}>
      <Header />
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
