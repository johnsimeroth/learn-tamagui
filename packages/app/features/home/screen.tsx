import { ScrollView, XStack, YStack, Theme, ColorModePreview, SizableText, Separator } from '@my/ui'
import { Menu } from '@tamagui/lucide-icons'
import { Link } from 'solito/link'

function Header() {
  return (
    <XStack jc='space-between' paddingVertical='$3' paddingHorizontal='$5'>
      <Menu />
      <XStack space='$3'>
        <Link href='https://github.com/johnsimeroth/learn-tamagui'>
          <SizableText>GitHub</SizableText>
        </Link>
        <Separator alignSelf="stretch" vertical />
        <Link href='https://tamagui.dev'>
          <SizableText>Tamagui Docs</SizableText>
        </Link>
        <Separator alignSelf="stretch" vertical />
        <Link href='https://solito.dev'>
          <SizableText>Solito Docs</SizableText>
        </Link>
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
