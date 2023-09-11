import { XStack } from 'tamagui'
import { ComponentGroup } from './ComponentGroup'

export function ComponentGroupStack() {
  return (
    <XStack
      jc='space-around'
      alignContent='center'
      flexWrap='wrap'
    >
      <ComponentGroup filled />
      <ComponentGroup />
    </XStack>
  )
}
