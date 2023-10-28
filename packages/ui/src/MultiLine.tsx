import { Paragraph, GetProps } from 'tamagui';

type Props = GetProps<typeof Paragraph>;

export function MultiLine(props: Props) {
  return (
    <>
      {props.children.split('\n').map((line: string, i: number) => (
        <Paragraph key={i} {...props}>{line}</Paragraph>
      ))}
    </>
  )
}
