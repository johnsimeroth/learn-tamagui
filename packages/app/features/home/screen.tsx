import { ScrollView, XStack, YStack, Theme, H1, H2, Paragraph, Card, useThemeName, ThemeName } from '@my/ui'
// import {useWindowDimensions} from 'react-native';
import React, { useState } from 'react'

import CustomSelect from '@my/ui/src/CustomSelect'

function Preview() {
  const [subTheme, setSubTheme] = useState<ThemeName>('blue')
  const themeName = useThemeName()
  // const {height} = useWindowDimensions()
  return (
    <Theme name={subTheme}>
      <YStack
        f={1}
        ai='flex-start'
        space='$2'
        bg={themeName === 'dark' ? 'black' : 'white'}
        p='$8'
      >
        <YStack ai='center' w='100%'>
          <Card elevation='$1' p='$4.5' w='100%'>
            <H1 textTransform='uppercase' ta='center'>
              Learn Tamagui
            </H1>
          </Card>
        </YStack>
        <H2 textTransform='uppercase'>{themeName} mode</H2>
        <Paragraph fontSize='$6'>Change tint with the dropdown below</Paragraph>
        <CustomSelect callback={setSubTheme} />
        <Paragraph>
        This page is a preview of how some of the basic Tamagui UI kit components look with various themes applied. Try adjusting tint in both light and dark mode. This page is also fully compatible with native platforms.
        </Paragraph>
      </YStack>
     </Theme>
  )
}

export function HomeScreen() {
  return (
    <ScrollView>
      <XStack flex={1}>
        <Theme name='light'>
          <Preview />
        </Theme>
        <Theme name='dark'>
          <Preview />
        </Theme>
      </XStack>
    </ScrollView>
  )
}
