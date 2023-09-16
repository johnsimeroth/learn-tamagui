import { SizableText, YStack } from 'tamagui'

export function NavMenu() {
  return(
    <YStack
      display='none'
      $gtLg={{
        display: 'flex'
      }}
    >
      <YStack>
        <SizableText>Quick Nav</SizableText>
        <SizableText>Quick Nav</SizableText>
        <SizableText>Quick Nav</SizableText>
        <SizableText>Quick Nav</SizableText>
        <SizableText>Quick Nav</SizableText>
      </YStack>
    </YStack>
  )
}
