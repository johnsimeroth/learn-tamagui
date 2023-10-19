import { Pre } from './Pre'

export function MultiLinePre({ children }: { children: string }) {
  return (
    <>
      {children.split('\n').map((line: string, i: number) => {
        console.log(`#${i} - ${line}`)
        return <Pre tag='pre' numberOfLines={0} key={i}>{line}</Pre>
      })}
    </>
  )
}
