import { YStack, Theme, H1, H2, Paragraph, Card, useThemeName, ThemeName } from 'tamagui'
import { useState } from 'react'

import { CustomSelect } from './CustomSelect'
import { ComponentGroupStack } from './ComponentGroupStack'
import { H3Centered } from './H3Centered'

const subThemeOptions = ['Red', 'Pink', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple']

export function ColorModePreview() {
  const [subTheme, setSubTheme] = useState('red')
  const themeName = useThemeName()

  return (
    <Theme name={subTheme as ThemeName}>
      <YStack
        f={1}
        // ai='flex-start'
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
        <CustomSelect
          w={200}
          value={subTheme}
          onValueChange={setSubTheme}
          items={subThemeOptions}
        />
        <Paragraph>
          This page is a preview of how some of the basic Tamagui UI kit components look with
          various themes applied. Try adjusting tint in both light and dark mode. This page is also
          fully compatible with native platforms. Scroll down to see alternative sub-themes.
        </Paragraph>
        <H3Centered>Base Theme</H3Centered>
        <ComponentGroupStack />
        <Theme name='alt1'>
          <H3Centered>Alt 1 Subtheme</H3Centered>
          <ComponentGroupStack />
        </Theme>
        <Theme name='alt2'>
          <H3Centered>Alt 2 Subtheme</H3Centered>
          <ComponentGroupStack />
        </Theme>
      </YStack>
    </Theme>
  )
}
