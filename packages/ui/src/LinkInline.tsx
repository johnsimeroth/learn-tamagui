import { Link } from 'solito/link'
import { LinkText } from './LinkText'

export function LinkInline({ href, children, ...props }) {
  return (
    <Link href={href}>
      <LinkText {...props}>{children}</LinkText>
    </Link>
  )
}
