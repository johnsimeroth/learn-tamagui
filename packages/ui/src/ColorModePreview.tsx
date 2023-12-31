import {
  XStack,
  YStack,
  Theme,
  Heading,
  H2,
  Paragraph,
  Card,
  Switch,
  useThemeName,
  ThemeName,
} from 'tamagui'
import { useState, Dispatch, SetStateAction } from 'react'

import { CustomSelect } from './CustomSelect'
import { ComponentGroupStack } from './ComponentGroupStack'
import { H3Centered } from './H3Centered'

const subThemeOptions = ['Red', 'Pink', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple']

interface ColorModeProps {
  isDark?: boolean,
  setIsDark?: Dispatch<SetStateAction<boolean>>
}

export function ColorModePreview({isDark, setIsDark} : ColorModeProps) {
  const [subTheme, setSubTheme] = useState('red')
  const themeName = useThemeName()

  return (
    <Theme name={subTheme as ThemeName}>
      <YStack
        tag='section'
        flexGrow={1}
        flexShrink={1}
        flexBasis={320}
        space='$2'
        bg='$backgroundStrong'
        p='2.5%'
      >
        <YStack ai='center' w='100%'>
          <Card elevation='$1' p='$4.5' w='100%'>
            <Heading size='$12' ta='center'>
              Learn Tamagui
            </Heading>
          </Card>
        </YStack>
        <XStack jc='space-between'>
          <H2 textTransform='uppercase'>{themeName} mode</H2>
          <Switch checked={isDark} onCheckedChange={(checked) => { setIsDark && setIsDark(checked)}} $platform-web={{dsp: 'none'}}>
            <Switch.Thumb animation='fast' />
          </Switch>
        </XStack>
        <Paragraph fontSize='$6'>Change tint with the dropdown below</Paragraph>
        <CustomSelect
          w={200}
          value={subTheme}
          onValueChange={setSubTheme}
          items={subThemeOptions}
        />
        <Paragraph>
          {`Just looking for an example of how some of the common components look in different themes? You've come to the right place. Try adjusting tint in both light and dark mode. Scroll down to see alternative sub-themes. If you're on web, try resizing your browser window to see how the layout adapts to different screen sizes. You can also visit this site or try the app (via expo) on your mobile device.`}
        </Paragraph>
        <Paragraph fontWeight='400' fontStyle='italic'>
          Seems like a weird use-case for a mobile app, Johnathan, why make one?
        </Paragraph>
        <Paragraph>Well... just to prove that it works!</Paragraph>
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
