import { SizableText, GetProps } from 'tamagui';

type Props = GetProps<typeof SizableText>;

export function MultiLine(props: Props) {
  return (
    <>
      {props.children.split('\n').map((line: string, i: number) => (
        <SizableText key={i} {...props}>{line}</SizableText>
      ))}
    </>
  )
}
