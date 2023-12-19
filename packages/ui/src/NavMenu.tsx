import { YStack, XStack, ZStack, useMedia, Separator } from 'tamagui'
import { LinkNav } from './LinkNav'

type Link = { href: string; linkText: string; subText: string }

const linkList: Link[] = [
  {
    href: '/',
    linkText: 'Home',
    subText: 'Components Demo',
  },
  {
    href: '/lesson/0',
    linkText: 'Lesson 0',
    subText: 'Setup, Folder Structure, and Resources',
  },
  {
    href: '/lesson/1',
    linkText: 'Lesson 1',
    subText: 'Inline Styling, Shorthands, and Tokens',
  },
  {
    href: '/lesson/2',
    linkText: 'Lesson 2',
    subText: 'Using styled()',
  },
]

function makeLinks(list: Link[]) {
  return list.map((link, i) => <LinkNav {...link} key={i} />)
}

export function NavMenu({ isVisible, closeFn }: { isVisible: boolean; closeFn: () => void }) {
  const media = useMedia()
  return media.gtLg ? (
    <StackDrawer isVisible={isVisible} linkList={linkList} />
  ) : (
    <SheetDrawer isVisible={isVisible} linkList={linkList} closeFn={closeFn} />
  )
}

export function StackDrawer({
  isVisible,
  linkList,
}: {
  isVisible: boolean
  linkList: Link[]
}) {
  return (
    <YStack
      display={isVisible ? 'flex' : 'none'}
      bg='$background'
      borderRightColor='$borderColor'
      borderRightWidth='$1'
    >
      <YStack separator={<Separator />}>{makeLinks(linkList)}</YStack>
    </YStack>
  )
}

export function SheetDrawer({
  isVisible,
  linkList,
  closeFn,
}: {
  isVisible: boolean
  linkList: Link[]
  closeFn: () => void
}) {
  return (
    <ZStack display={isVisible ? 'block' : 'none'} fullscreen zi='$1'>
      <XStack fullscreen o={0.8} bg='$backgroundStrong' onPress={closeFn} zi='$2'></XStack>
      <YStack
        zi='$3'
        dsp='flex'
        alignSelf='flex-start'
        h='100%'
        o={1}
        bg='$background'
        separator={<Separator />}
        borderRightColor='$borderColor'
        borderRightWidth='$1'
      >
        {makeLinks(linkList)}
      </YStack>
    </ZStack>
  )
}
