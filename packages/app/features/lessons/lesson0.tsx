import { ScrollView, XStack, YStack, H1, Paragraph, MyHeader, NavMenu } from '@my/ui'
import { useState } from 'react'
import { Lesson0MD } from './data/Lesson0MD';

{`
            You're on lesson 0: setup. By the end of this lesson you should:
            1. Have a working web app that renders hello world,
            2. Understand the high level folder structure of a tamagui/solito/expo monorepo, and
            3. Know where to look for more information and details.

            Let's jump right in
            `}

type Visible = boolean;

export function Lesson0() {
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
          <H1>Lesson 0!</H1>
          {Lesson0MD}
        </ScrollView>
      </XStack>
    </YStack>
  )
}
