import { SizableText, YStack } from 'tamagui'
import { Link } from 'solito/link'

export function NavLink({ href, linkText, ...props }) {
  return (
    <Link href={href}>
      <YStack w='$18' {...props}>
        <SizableText hoverStyle={{ color: 'white', fontWeight: 'bold' }}>{linkText}</SizableText>
      </YStack>
    </Link>
  )
}
