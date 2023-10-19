import { SizableText, YStack } from 'tamagui'
import { Link } from 'solito/link'

export function LinkNav({ href, linkText, subText, ...props }) {

  return (
    <Link href={href}>
      <YStack {...props} px='$3' w='$20' hoverStyle={{ bg: '$backgroundFocus'}}>
        <SizableText size='$5'>{linkText}</SizableText>
        <SizableText pl='$3' color='$color11' size='$3'>
          {subText}
        </SizableText>
      </YStack>
    </Link>
  )
}
