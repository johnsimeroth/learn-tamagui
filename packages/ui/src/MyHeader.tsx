import { XStack, Separator, SizableText } from '@my/ui'
import { Menu } from '@tamagui/lucide-icons'
import { LinkStack } from './LinkStack'
import { MyLink as Link } from './MyLink'

export function MyHeader() {
  return (
    <XStack jc='space-between' paddingVertical='$3' paddingHorizontal='$5'>
      <LinkStack><Menu /></LinkStack>
      <XStack space='$3'>
        <Link href='https://github.com/johnsimeroth/learn-tamagui'>
          <SizableText>GitHub</SizableText>
        </Link>
        <Separator alignSelf='stretch' vertical />
        <Link href='https://tamagui.dev'>
          <SizableText>Tamagui Docs</SizableText>
        </Link>
        <Separator alignSelf='stretch' vertical />
        <Link href='https://solito.dev'>
          <SizableText>Solito Docs</SizableText>
        </Link>
      </XStack>
    </XStack>
  )
}
