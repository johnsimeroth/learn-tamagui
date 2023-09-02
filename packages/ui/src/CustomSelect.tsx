import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useMemo } from 'react'
import { Adapt, Select, SelectProps, Sheet, YStack, getFontSize, ThemeName } from 'tamagui'
import { LinearGradient } from '@tamagui/linear-gradient'

interface CustomSelectProps extends SelectProps {
  items: string[]
  width?: number
  w?: number
}

export function CustomSelect(props: CustomSelectProps) {
  return (
    <Select id='tint' value={props.value} onValueChange={props.onValueChange} {...props}>
      <Select.Trigger w={props.width || props.w || '100%'} iconAfter={ChevronDown}>
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

          <Sheet.Overlay animation='fast' enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
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
          <LinearGradient
            start={[0, 0]}
            end={[1, 0]}
            colors={['$backgroundTransparent', '$background']}
            fullscreen
          />
        </Select.ScrollUpButton>
        <Select.Viewport minWidth={200}>
          {useMemo(
            () =>
              props.items.map((item, i) => {
                return (
                  <Select.Item index={i} key={item} value={item.toLowerCase()}>
                    <Select.ItemText>{item}</Select.ItemText>
                    <Select.ItemIndicator marginLeft='auto'>
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                )
              }),
            [props.items]
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
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            colors={['$backgroundTransparent', '$background']}
            fullscreen
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  )
}
