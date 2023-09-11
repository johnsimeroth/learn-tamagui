import {
  Avatar,
  XStack,
  YStack,
  Paragraph,
  Card,
  Input,
  Button,
  XGroup,
  Progress,
  Switch,
} from 'tamagui'
import { useState } from 'react'

// TODO: confirm if these are being optimized by tamagui compiler
import { CustomSelect } from './CustomSelect'
import { CustomSlider } from './CustomSlider'

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

export function ComponentGroup({ filled = false }) {
  const [selectValue, setSelectValue] = useState('apple')

  return (
    <YStack
      space='$6'
      ai='center'
      boc='$borderColor'
      bw='$1'
      br='$8'
      p='$5'
      m='1.5%'
      bs='dashed'
      bg={filled ? '$background' : 'none'}
    >
      <CustomSelect value={selectValue} onValueChange={setSelectValue} items={fruits} />
      <Input placeholder='Type something' w='100%' />
      <XGroup bg='none' w='100%'>
        <Button w='50%'>Button 1</Button>
        <Button w='50%'>Button 2</Button>
      </XGroup>
      <Progress w='100%' value={73} minWidth='$0'>
        <Progress.Indicator />
      </Progress>
      <CustomSlider />
      <Switch>
        <Switch.Thumb animation='fast' />
      </Switch>
      <Card
        w='100%'
        elevation='$1'
        space='$2'
        p='$2.5'
        boc='$borderColor'
        bw='$0.5'
        animation={'medium'}
        hoverStyle={{ scale: 1.1 }}
        pressStyle={{ scale: 1 }}
      >
        <XStack jc='space-between' ai='center'>
          <Avatar circular size='$6'>
            <Avatar.Image src='https://placekitten.com/200/300' />
            <Avatar.Fallback bc='white' delayMs={800} />
          </Avatar>
          <Paragraph pl='$2' ta='left' w='$12'>Click this card. Here is some more text.</Paragraph>
        </XStack>
      </Card>
    </YStack>
  )
}
