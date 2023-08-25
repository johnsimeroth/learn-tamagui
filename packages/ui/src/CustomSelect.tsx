import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useMemo, useState, Dispatch, SetStateAction } from 'react'
import { Adapt, Select, SelectProps, Sheet, YStack, getFontSize, ThemeName } from 'tamagui'
import { LinearGradient } from '@tamagui/linear-gradient'

interface CustomSelectProps extends SelectProps {
  callback?: Dispatch<SetStateAction<ThemeName>>
}

export default function CustomSelect(props: CustomSelectProps) {
  const [val, setVal] = useState('blue')
  function handleSelect(value: string) {
    setVal(value)
    if (props.callback) props.callback(value as ThemeName);
  }

  return (
    <Select id='tint' value={val} onValueChange={handleSelect} {...props}>
      <Select.Trigger width={220} iconAfter={ChevronDown}>
        <Select.Value />
      </Select.Trigger>
      <Adapt when='sm' platform='touch'>
        <Sheet
          native={!!props.native}
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: 'spring',
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>

          <Sheet.Overlay animation='lazy' enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        </Sheet>
      </Adapt>
      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems='center'
          justifyContent='center'
          position='relative'
          width='100%'
          height='$3'
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
          <LinearGradient start={[0, 0]} end={[1, 0]} colors={['$backgroundTransparent', '$background']} fullscreen/>
        </Select.ScrollUpButton>
        <Select.Viewport minWidth={200}>
          {useMemo(
            () =>
              items.map((item, i) => {
                return (
                  <Select.Item index={i} key={item.name} value={item.name.toLowerCase()}>
                    <Select.ItemText>{item.name}</Select.ItemText>
                    <Select.ItemIndicator marginLeft='auto'>
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                )
              }),
            [items]
          )}

          {props.native && (
            <YStack
              position='absolute'
              right={0}
              top={0}
              bottom={0}
              alignItems='center'
              justifyContent='center'
              width={'$4'}
              pointerEvents='none'
            >
              <ChevronDown size={getFontSize((props.size ?? '$true') as any)} />
            </YStack>
          )}
        </Select.Viewport>
        <Select.ScrollDownButton
          alignItems='center'
          justifyContent='center'
          position='relative'
          width='100%'
          height='$3'
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient start={[0, 0]} end={[0, 1]} colors={['$backgroundTransparent', '$background']} fullscreen/>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  )
}
const items = [
  { name: 'Blue' },
  { name: 'Green' },
  { name: 'Red' },
  { name: 'Pink' },
  { name: 'Yellow' },
  { name: 'Apple' },
  { name: 'Pear' },
  { name: 'Blackberry' },
  { name: 'Peach' },
  { name: 'Apricot' },
  { name: 'Melon' },
  { name: 'Honeydew' },
  { name: 'Starfruit' },
  { name: 'Blueberry' },
  { name: 'Raspberry' },
  { name: 'Strawberry' },
  { name: 'Mango' },
  { name: 'Pineapple' },
  { name: 'Lime' },
  { name: 'Lemon' },
  { name: 'Coconut' },
  { name: 'Guava' },
  { name: 'Papaya' },
  { name: 'Orange' },
  { name: 'Grape' },
  { name: 'Jackfruit' },
  { name: 'Durian' },
]
