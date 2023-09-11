import { XStack } from 'tamagui'
import { ComponentGroup } from './ComponentGroup'

export function ComponentGroupStack() {
  return (
    <XStack
      jc='space-around'
      flexWrap='wrap'
    >
      <ComponentGroup filled />
      <ComponentGroup />
    </XStack>
  )
}
