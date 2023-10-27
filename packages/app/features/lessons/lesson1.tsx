import { H1, H2, H3, SizableText, YStack, LinkInline, MultiLine, Pre } from '@my/ui'

// TODO: replace this lesson format with a tamagui friendly markdown renderer. Might need to make my own.

export function Lesson1() {
  return (
    <YStack mx='10%' my='$2.5' miw={400}>
      <H1>Lesson 1</H1>
      <H2>Inline Styling, Shorthands, and Tokens</H2>
      <MultiLine>
        {`In lesson 0, you set up the app's monorepo, familiarized yourself with the folder structure, rendered Hello World to the screen, and (optionally) deleted excess code that we won't be using. By the end of this lesson, you should:

        1. Understand how to use inline styling to adjust styling in one place for both native and web.
        2. Be able to read and write inline styling in a more compact form, using shorthands.
        3. Understand at a high level what tokens are, why they are important, and how to use them for styling.`}
      </MultiLine>

      <H2>Inline Styling</H2>
      <SizableText>
        This probably isn't your first experience with inline styling, so I'll keep this
        short. Inline styling makes it really clear where your styles are being
        applied, and removes the need to wire up classnames. However, it's gotten a bad rap in terms
        of performance. Tamagui enables you to write inline styles with minimal performance trade
        offs. How? Rather than paraphrase, I'll quote directly from the <LinkInline href='https://tamagui.dev/docs/intro/why-a-compiler'>docs:</LinkInline>
      </SizableText>
      <YStack pl='$2' blc='$green9' blw='$1' my='$2.5' ml='$5'>
        <MultiLine {...{color: '$color11'}}>
          {`@tamagui/static is an optimizing compiler for React Native with four main features:
  - Extracts all types of styling syntax into atomic CSS.
  - Removes a high % of inline styles with partial evaluation and hoisting.
  - Reduces tree depth, flattening expensive styled components into div or View.
  - Evaluates useMedia and useTheme hooks, turning logical expressions into media queries and CSS variables.`}
        </MultiLine>
      </YStack>
      <SizableText>
        The way you write inline styles with tamagui is very similar to what you may have done with
        tailwind in the past. You pass style properties as props and set their values as desired.
        For example, you can add the following to your HomeScreen's XStack component:
      </SizableText>
      <Pre>{inlineCode}</Pre>
      {/* <SizableText>You should see something that looks like this:</SizableText> */}
      {/* <--Image goes here--> */}

      <SizableText>
        The props available to you are usually what you would expect them to be named, but when
        you're uncertain about what props a component offers you, there are a couple places to look.
        Most of the style props available come from React Native's style properties for view,
        layout, or text, so I usually check the RN docs first. However, if it's a Tamagui-specific
        style prop, you'll need the tamagui docs. At the bottom of your component's page in the
        docs, you'll usually see what base component was extended to create that component, along
        with any additional props that were added. From there, check the component that was
        extended, and so on, until you end up at either Stack or Text, which are the foundational
        components for Tamagui. If you haven't found the prop you're looking for, it's probably in
        the RN docs, or it doesn't exist.
      </SizableText>

      <H2>Shorthands</H2>
      <SizableText>
        The above works, and it's really clear what you're doing to anyone familiar with CSS.
        However, for more complex styling it can start to take up a lot of space and, frankly, just
        take quite a while to type. So Tamagui makes shorthands available to you. Again, if you're
        familiar with tailwind, this is going to feel familiar. The shorthands are usually intuitive
        abbreviations of full property names. So to achieve the same styling as above, you could
        instead write:
      </SizableText>
      <Pre>{shorthandCode}</Pre>
      <MultiLine>
        Which is a lot more concise. Honestly, I have mixed feelings about shorthands, because
        they're a bit more cryptic for anyone else not familiar with Tamagui. But ultimately, I've
        decided to use them for this tutorial (and the code that built it) because although there's
        a small learning curve to figure out what each does, the reduction in space makes the code
        easier for me to read and write. No hard feelings if you disagree. At the time of this
        writing, I don't see a complete list of shorthands anywhere in the Tamagui docs. So I have
        pulled these from Tamagui's source code on github. I suggest saving them for reference
        somewhere if you plan on using shorthands.
      </MultiLine>
      <Pre>{shorthandList}</Pre>

      <SizableText>
        You can also add your own shorthands in the createTamagui config, but more on that later.
      </SizableText>

      <H2>Tokens</H2>
      <MultiLine>{`Now that you know how to style, and style concisely, let's take a look at tokens. Tokens are more or less for sizing things. For example:
- How tall should all my buttons be?
- How much space do I want for padding around my button's text?
- What size should I use for text?
- What radius should I use at the corners?

Tokens are one of those all-too-common examples of a programming term that intimidated me at first glance because I assumed they were a complex concept, but that turned out to actually just be a new name for a basic idea. A token is just a styling variable. So instead of writing \`borderRadius='30px'\`, tamagui would have you write \`borderRadius='$7'.

You might be thinking: why convert sizes from pixels, which are numbers, to tokens which are just... other numbers? Well, first off, it's important to mention that they don't have to be. You could use tokens called small, medium, and large, for example. But nonetheless, it seems at first glance like an unnecessary layer of abstraction and complexity.

Let's explore the logic behind them with an example. Say you want to have a consistent border radius of 30px on all the borders of your app. You could do this as we did in the shorthands section above:`}</MultiLine>
      <Pre>{shorthandCode}</Pre>
      <SizableText>
        And you could repeat that everywhere you have a border radius throughout your app. But then
        what happens if you (or your design team) decide to change your standard border radius to
        28px instead? You'll have to search through your potentially gigantic code base for
        everywhere that you use a border radius and update it to 28px. The solution to this problem
        is obvious: instead of hard-coding `borderRadius='30px'` throughout your app, you create a
        variable, like `radius1 = 30px`. Then, you can write this:
      </SizableText>

      <Pre>{tokenCode}</Pre>

      <MultiLine>
        {`And when you want to change the border radius value, you only have to do it in one place - where radius1 is defined. Radius1 is a basic example of a token. In reality, you want a range of size options, not just one radius value, so Tamagui provides an array of standard tokens. Further, Tamagui's tokens are designed so that they scale nicely together, so text sizes and button heights and border radii, for example, don't all turn out to the same pixel value, but pixel values that work nicely together. And just for the record, "radius1" is not actually a standard token that comes built in with tamagui's default configuration, I was just using that name for clarity. All of Tamagui's default tokens start with a dollar sign, and all of the size tokens are just numbers (e.g. '$5').

        Tamagui also uses tokens for colors. So instead of the above code, we could write:`}
      </MultiLine>
      <Pre>{redTokenCode}</Pre>

      <SizableText>or</SizableText>

      <Pre>{backgroundTokenCode}</Pre>

      <SizableText>
        The motivation here is the same - if you wanted to update your definition of red, or your
        standard background color, you only have to change one line of code. And perhaps even more
        importantly, it enables colors to update based on the current user-selected theme. We'll
        cover this in more detail when we get to themes.
      </SizableText>

      <H2>Moving on</H2>
      <SizableText>
        Well done! If you've been able to confirm that inline styles are updating your components on
        both web and mobile, you're ready to move on to the next lesson.
      </SizableText>
    </YStack>
  )
}

const inlineCode = `  <XStack borderRadius='30px' display='flex' flex={1} flexWrap='wrap' backgroundColor='#c5c5c5'>
    <H1>Hello World!</H1>
  </XStack>`

const shorthandCode = `  <XStack br='30px' dsp='flex' f={1} fw='wrap' bg='#c5c5c5'>
    <H1>Hello World!</H1>
  </XStack>`

const tokenCode = `  <XStack br=$radius1 dsp='flex' f={1} fw='wrap' bg='#c5c5c5'>
  <H1>Hello World!</H1>
</XStack>`

const redTokenCode = `  <XStack br=$radius1 dsp='flex' f={1} fw='wrap' bg='$red'>
  <H1>Hello World!</H1>
</XStack>`

const backgroundTokenCode = `  <XStack br=$radius1 dsp='flex' f={1} fw='wrap' bg='$background'>
  <H1>Hello World!</H1>
</XStack>`

const shorthandList = `  # web-only
  ussel: 'userSelect'
  cur: 'cursor'

  # tamagui
  pe: 'pointerEvents'

  # text
  col: 'color'
  ff: 'fontFamily'
  fos: 'fontSize'
  fost: 'fontStyle'
  fow: 'fontWeight'
  ls: 'letterSpacing'
  lh: 'lineHeight'
  ta: 'textAlign'
  tt: 'textTransform'
  ww: 'wordWrap'

  # view
  ac: 'alignContent'
  ai: 'alignItems'
  als: 'alignSelf'
  b: 'bottom'
  bc: 'backgroundColor'
  bg: 'backgroundColor'
  bbc: 'borderBottomColor'
  bblr: 'borderBottomLeftRadius'
  bbrr: 'borderBottomRightRadius'
  bbw: 'borderBottomWidth'
  blc: 'borderLeftColor'
  blw: 'borderLeftWidth'
  boc: 'borderColor'
  br: 'borderRadius'
  bs: 'borderStyle'
  brw: 'borderRightWidth'
  brc: 'borderRightColor'
  btc: 'borderTopColor'
  btlr: 'borderTopLeftRadius'
  btrr: 'borderTopRightRadius'
  btw: 'borderTopWidth'
  bw: 'borderWidth'
  dsp: 'display'
  f: 'flex'
  fb: 'flexBasis'
  fd: 'flexDirection'
  fg: 'flexGrow'
  fs: 'flexShrink'
  fw: 'flexWrap'
  h: 'height'
  jc: 'justifyContent'
  l: 'left'
  m: 'margin'
  mah: 'maxHeight'
  maw: 'maxWidth'
  mb: 'marginBottom'
  mih: 'minHeight'
  miw: 'minWidth'
  ml: 'marginLeft'
  mr: 'marginRight'
  mt: 'marginTop'
  mx: 'marginHorizontal'
  my: 'marginVertical'
  o: 'opacity'
  ov: 'overflow'
  p: 'padding'
  pb: 'paddingBottom'
  pl: 'paddingLeft'
  pos: 'position'
  pr: 'paddingRight'
  pt: 'paddingTop'
  px: 'paddingHorizontal'
  py: 'paddingVertical'
  r: 'right'
  shac: 'shadowColor'
  shar: 'shadowRadius'
  shof: 'shadowOffset'
  shop: 'shadowOpacity'
  t: 'top'
  w: 'width'
  zi: 'zIndex'

  # compiler output
  bls = 'borderLeftStyle'
  brs = 'borderRightStyle'
  bts = 'borderTopStyle'
  bbs = 'borderBottomStyle'
  bxs = 'boxSizing'
  bxsh = 'boxShadow'
  ox = 'overflowX'
  oy = 'overflowY'`
