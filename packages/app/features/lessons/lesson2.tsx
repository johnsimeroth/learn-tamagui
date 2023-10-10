import { ScrollView, XStack, YStack, H1, MyHeader, NavMenu } from '@my/ui'
import { useState } from 'react'

type Visible = boolean;

export function Lesson2() {
  const [isVisible, setIsVisible] = useState<Visible>(false)

  function handlePress() {
    setIsVisible(!isVisible)
  }

  return (
    <YStack display='flex' f={1}>
      <MyHeader handlePress={handlePress} />
      <XStack>
        <NavMenu isVisible={isVisible} />
        <ScrollView tag='main'>
          <H1>Lesson 2!</H1>
        </ScrollView>
      </XStack>
    </YStack>
  )
}
