import { SizableText } from 'tamagui';

export function MultiLine({ children }:{ children: string }) {
  return (
    <>
      {children.split('\n').map((line: string, i: number) => (
        <SizableText key={i}>{line}</SizableText>
      ))}
    </>
  )
}
