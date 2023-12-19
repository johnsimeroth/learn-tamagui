import { XStack, Separator, SizableText, Button } from 'tamagui'
import { Menu } from '@tamagui/lucide-icons'
import { LinkHeader as Link } from './LinkHeader'

export function MyHeader({ handlePress }: { handlePress: () => void }) {
  return (
    <XStack tag='header' bg='$background' jc='space-between' py='$3' px='$5' borderBottomColor='$borderColor' borderBottomWidth='$1'>
      <Button size='$2' onPress={handlePress}>
        <Menu />
      </Button>
      <XStack tag='nav' space='$3'>
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
