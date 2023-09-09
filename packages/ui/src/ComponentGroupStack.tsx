import { ComponentGroup } from './ComponentGroup'
import { ResponsiveXStack } from './ResponsiveXStack'

export function ComponentGroupStack() {
return (
  <ResponsiveXStack>
    <ComponentGroup filled />
    <ComponentGroup />
  </ResponsiveXStack>
  )
}
