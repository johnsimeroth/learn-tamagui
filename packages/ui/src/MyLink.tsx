import { Link } from 'solito/link'
import { LinkStack } from './LinkStack'

export function MyLink({ href, children, ...props }) {
  return (
    <Link href={href}>
      <LinkStack {...props}>{children}</LinkStack>
    </Link>
  )
}
