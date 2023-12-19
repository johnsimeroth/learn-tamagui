import { ScrollView, XStack, YStack, Theme } from 'tamagui'
import { useState, ReactNode } from 'react'

import { MyHeader } from '@my/ui/src/MyHeader'
import { NavMenu } from '@my/ui/src/NavMenu'

export function Layout({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  function handlePress() {
    setIsVisible(!isVisible)
  }

  return (
    <Theme name='dark'>
      <YStack display='flex' f={1}>
        <MyHeader handlePress={handlePress} />
        <XStack>
          <NavMenu isVisible={isVisible} closeFn={() => setIsVisible(false)} />
          <ScrollView tag='main' bg='$background'>{children}</ScrollView>
        </XStack>
      </YStack>
    </Theme>
  )
}
