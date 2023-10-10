import { SizableText, YStack } from 'tamagui'
import { Link } from 'solito/link'

export function NavLink({ href, linkText, ...props }) {
  // TODO: fix hard coded width
  // TODO: format link with text and sub-text
  return (
    <Link href={href}>
      <YStack w='$20' {...props}>
        <SizableText hoverStyle={{ color: 'white', fontWeight: 'bold' }}>{linkText}</SizableText>
      </YStack>
    </Link>
  )
}
