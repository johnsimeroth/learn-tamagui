import {
  ScrollView,
  XStack,
  YStack,
  Theme,
  H1,
  H2,
  Paragraph,
  Card,
  useThemeName,
  ThemeName,
  CustomSelect,
  ComponentGroup,
} from '@my/ui'
import React, { useState } from 'react'

const subThemeOptions = ['Red', 'Pink', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple']
function ColorModePreview({ id }) {
  const [subTheme, setSubTheme] = useState('red')
  const themeName = useThemeName()

  return (
    <Theme name={subTheme as ThemeName}>
      <YStack f={1} ai='flex-start' space='$2' bg={themeName === 'dark' ? 'black' : 'white'} p='$8'>
        <YStack ai='center' w='100%'>
          <Card elevation='$1' p='$4.5' w='100%'>
            <H1 textTransform='uppercase' ta='center'>
              Learn Tamagui
            </H1>
          </Card>
        </YStack>
        <H2 textTransform='uppercase'>{themeName} mode</H2>
        <Paragraph fontSize='$6'>Change tint with the dropdown below</Paragraph>
        <CustomSelect
          w={200}
          value={subTheme}
          onValueChange={setSubTheme}
          items={subThemeOptions}
        />
        <Paragraph>
          This page is a preview of how some of the basic Tamagui UI kit components look with
          various themes applied. Try adjusting tint in both light and dark mode. This page is also
          fully compatible with native platforms.
        </Paragraph>
        <XStack f={1} w='100%' space='$6' jc='space-between' pt='$6'>
          <ComponentGroup id={id} filled />
          <ComponentGroup id={id + 1} />
        </XStack>
        <Theme name='alt1'>
          <XStack f={1} w='100%' space='$6' jc='space-between' pt='$6'>
            <ComponentGroup id={id + 2} filled />
            <ComponentGroup id={id + 3} />
          </XStack>
        </Theme>
        <Theme name='alt2'>
          <XStack f={1} w='100%' space='$6' jc='space-between' pt='$6'>
            <ComponentGroup id={id + 4} filled />
            <ComponentGroup id={id + 5} />
          </XStack>
        </Theme>
      </YStack>
    </Theme>
  )
}

export function HomeScreen() {
  return (
    <ScrollView>
      <XStack flex={1}>
        <Theme name='light'>
          <ColorModePreview id={1} />
        </Theme>
        <Theme name='dark'>
          <ColorModePreview id={7} />
        </Theme>
      </XStack>
    </ScrollView>
  )
}
