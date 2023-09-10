import { ComponentGroup } from './ComponentGroup'
import { ResponsiveStack } from './ResponsiveStack'

export function ComponentGroupStack() {
  return (
    <ResponsiveStack jc='space-between'>
      <ComponentGroup filled />
      <ComponentGroup />
    </ResponsiveStack>
  )
}
