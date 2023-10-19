import { Link } from 'solito/link'
import { LinkStack } from './LinkStack'

export function LinkHeader({ href, children, ...props }) {
  return (
    <Link href={href}>
      <LinkStack {...props}>{children}</LinkStack>
    </Link>
  )
}
