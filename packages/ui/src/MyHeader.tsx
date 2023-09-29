import { XStack, Separator, SizableText, Button, useMedia } from '@my/ui'
import { useState } from 'react'
import { Menu } from '@tamagui/lucide-icons'
import { LinkStack } from './LinkStack'
import { MyLink as Link } from './MyLink'

export function MyHeader({ handlePress }: { handlePress: () => void }) {
  return (
    <XStack tag='header' jc='space-between' paddingVertical='$3' paddingHorizontal='$5'>
      <Button size='$2' onPress={handlePress}><Menu /></Button>
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
