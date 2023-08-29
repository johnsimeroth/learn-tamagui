import {
  Avatar,
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
  Input,
  Button,
  XGroup,
  Progress,
  Switch,
} from '@my/ui'
import React, { useState } from 'react'

import CustomSelect from '@my/ui/src/CustomSelect'
import CustomSlider from '@my/ui/src/CustomSlider'

const fruits = [
  'Apple',
  'Pear',
  'Blackberry',
  'Peach',
  'Apricot',
  'Melon',
  'Honeydew',
  'Starfruit',
  'Blueberry',
  'Raspberry',
  'Strawberry',
  'Mango',
  'Pineapple',
  'Lime',
  'Lemon',
  'Coconut',
  'Guava',
  'Papaya',
  'Orange',
  'Grape',
  'Jackfruit',
  'Durian',
]

function ComponentGroup({ id }) {
  const [selectValue, setSelectValue] = useState('apple')

  return (
    <YStack space='$6' ai='center' bc='$background'>
      <CustomSelect value={selectValue} onValueChange={setSelectValue} items={fruits} />
      <Input placeholder='Type something' w='100%' />
      <XGroup bg='none' w='100%'>
        <Button w='50%'>Button 1</Button>
        <Button w='50%'>Button 2</Button>
      </XGroup>
      <Progress w='100%' value={73}>
        <Progress.Indicator />
      </Progress>
      <CustomSlider />
      <Switch>
        <Switch.Thumb id={id.toString()} />
      </Switch>
      <Card w='100%' elevation='$1' p='$2.5'>
        <XStack jc='space-between' ai='center' space='$2'>
          <Avatar circular size='$6'>
            <Avatar.Image src='http://placekitten.com/200/300' />
            <Avatar.Fallback bc='white' delayMs={800} />
          </Avatar>
          <Paragraph ta='left'>
            This is a card.
          </Paragraph>
        </XStack>
      </Card>
    </YStack>
  )
}

const subThemeOptions = ['Blue', 'Green', 'Red', 'Pink', 'Yellow']
function ColorModePreview({ id }) {
  const [subTheme, setSubTheme] = useState('blue')
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
        <CustomSelect value={subTheme} onValueChange={setSubTheme} items={subThemeOptions} />
        <Paragraph>
          This page is a preview of how some of the basic Tamagui UI kit components look with
          various themes applied. Try adjusting tint in both light and dark mode. This page is also
          fully compatible with native platforms.
        </Paragraph>
        <XStack f={1} w='100%' space='$6' jc='space-between' pt='$6'>
          <ComponentGroup id={id} />
          <ComponentGroup id={id + 1} />
        </XStack>
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
          <ColorModePreview id={3} />
        </Theme>
      </XStack>
    </ScrollView>
  )
}
