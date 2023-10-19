import { ScrollView, XStack, YStack, Theme, ColorModePreview, MyHeader, NavMenu } from '@my/ui'
import { useState, ReactNode } from 'react'

type Visible = boolean

export function Layout({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState<Visible>(false)
  /*
  turn this on to make the menu visibility default size dependent.
  also need to replace useState(false) with useState(null).
  causes layout shift on initial load.

  const media = useMedia();

  useEffect(() => {
    if (isVisible !== null) return;
    setIsVisible(media.gtLg);
  }, [media]);
  */

  function handlePress() {
    setIsVisible(!isVisible)
  }

  return (
    <Theme name='dark'>
      <YStack display='flex' f={1}>
        <MyHeader handlePress={handlePress} />
        <XStack>
          <NavMenu isVisible={isVisible} closeFn={() => setIsVisible(false)} />
          <ScrollView tag='main'>{children}</ScrollView>
        </XStack>
      </YStack>
    </Theme>
  )
}
