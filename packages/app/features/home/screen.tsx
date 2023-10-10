import { ScrollView, XStack, YStack, Theme, ColorModePreview, MyHeader, NavMenu } from '@my/ui'
import { useState } from 'react'

type Visible = boolean;

export function HomeScreen() {
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
    <YStack display='flex' f={1}>
      <MyHeader handlePress={handlePress} />
      <XStack>
        <NavMenu isVisible={isVisible} />
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
