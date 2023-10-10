import { YStack, XStack, ZStack, useMedia } from 'tamagui';
import { NavLink } from './NavLink';

const linkList = [
  <NavLink href='/' linkText='Home' key={0}/>,
  <NavLink href='/' linkText='Home' key={1}/>,
  <NavLink href='/' linkText='Home' key={2}/>,
  <NavLink href='/' linkText='Home' key={3}/>,
];

const drawerWidth = '$18';

export function NavMenu({ isVisible } : { isVisible: boolean | null }) {
  const media = useMedia()
  return media.gtLg ? (
    <StackDrawer isVisible={isVisible} linkList={linkList} />
  ) : (
    <SheetDrawer isVisible={isVisible} linkList={linkList}  />
  )
}

export function StackDrawer({ isVisible, linkList }: { isVisible: boolean | null, linkList: JSX.Element[] }) {
  return (
    <YStack
      display={isVisible ? 'flex' : 'none'}
    >
      <YStack>
        {linkList}
      </YStack>
    </YStack>
  )
}

export function SheetDrawer({ isVisible, linkList }: { isVisible: boolean | null, linkList: JSX.Element[] }) {
  return (
    <ZStack display={isVisible ? 'block' : 'none'} fullscreen zi='$2'>
      <XStack fullscreen o={0.8} bg='$backgroundStrong'></XStack>
      <YStack dsp='block' w={drawerWidth} h='100%' o={1} bg='$background'>
        {linkList}
      </YStack>
    </ZStack>
  )
}
