import { TextLink } from 'solito/link'
import { LinkText } from './LinkText'

export function LinkInline({ href, children, ...props }) {
  return (
    <TextLink href={href}>
      <LinkText {...props}>{children}</LinkText>
    </TextLink>
  )
}
