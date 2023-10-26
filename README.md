# Learn the ins and outs of tamagui
The first lesson is up on the [deployed site](https://learn-tamagui.vercel.app/). More coming soon.

## Current Scope
- This project currently contains a page with some of the main tamagui UI components in both light and dark modes, with selectable tint.
- This is useful if you're looking to get a quick sense of what the main components of the UI kit look like in a variety of themes.
- Also, because this project was set up with `npm create tamagui@latest` it is an example of a universal app monorepo, but admittedly a very simple one so far.
- Check out the "Learn More" section below for some additional info and challenges.

## Future Scope
- Extend to a guided tutorial that walks you through the fundamentals of tamagui and solito, with interactive prompts and coding challenges.

## Setup
1. Fork and clone this repo
2. Run `yarn` to install dependencies
3. Run `yarn web` to start the nextjs dev server
4. Open localhost:3000 in your browser
5. (Optional) install _nderscore's [vscode extension for tamagui](https://github.com/nderscore/tamagui-typescript-plugin) which is really helpful for mapping 

## Learn More
### Do I really need to bother with all the config stuff?
Nope! If you like the way the components in this repo look with the different themes I included `npm create tamagui` sets everything up for you, and you can just start importing tamagui UI components from '@my/ui' and using them in your app. I tried to use pretty minimal styling and customization so that you get a sense of what the basic components look like out of the box.

On the other hand, if you want to do some customization, or if, like me, you are just curious about what's going on under the hood, you'll probably run into....

### Themes.. Tokens? Palettes?! Masks!?!? Why? How?
Yeah, it's a lot at first. Hang tight, I think we can make some sense of it. The [docs](https://tamagui.dev/docs) are awesome by the way, but if you're more of a visuals person, like me, here's a quick example of how all these different pieces work together to create a design system that you can reference throughout all of your custom components. I'll eventually replace these graphics with prettier ones, but I hope this helps you get started. 

First off, these are the broad strokes of what goes into a tamagui config.
<img width="1347" alt="TamaguiTree" src="https://github.com/johnsimeroth/learn-tamagui/assets/51033195/06474783-0b2d-42b3-bf79-0eb878b11bd7">

### Themes, Palettes, Templates, and Masks
Next, let's zoom into the color themes section with an actual example.
<img width="1429" alt="TamaguiThemeCreation" src="https://github.com/johnsimeroth/learn-tamagui/assets/51033195/ef647c95-db2a-4ba2-a2ec-8291a9e530f4">

So the idea is that you'd then be able to consistently reference colors like 'background', 'backgroundHover', and 'buttonText' in your custom, reusable components and know that they'll look right no matter where they're used in your app or which theme is currently applied. 

### Bare minimum color template names
NOTE, the color names I used here for my template WILL NOT WORK FOR TAMAGUI COMPONENTS because they are insufficient. I did this just to make the point that you can make the names whatever you want if you're designing your own theme for your own components, as long as you reference them consistently. However, if you're using Tamagui components (or even if you're not, really) Tamagui has some bare minimum color properties that its components expect and that I think are a good practice either way. At the time of this writing, that includes the following,

```
{
  background: string
  backgroundFocus: string
  backgroundHover: string
  backgroundPress: string
  backgroundStrong: string
  backgroundTransparent: string
  borderColor: string
  borderColorFocus: string
  borderColorHover: string
  borderColorPress: string
  color: string
  colorFocus: string
  colorHover: string
  colorPress: string
  colorTransparent: string
  placeholderColor: string
  shadowColor: string
  shadowColorFocus: string
  shadowColorHover: string
  shadowColorPress: string
}
```
But you should reference the docs for the latest and greatest.

### Tokens
Tokens are more or less for sizing things. For example: 
- How tall should all my buttons be?
- How much space do I want for padding around my button's text?
- What size should I use for text?
- What radius should I use at the corners?

You might be thinking: why convert sizes from pixels, which are numbers, to tokens which are just... other numbers? Well, first off, it's important to mention that they don't have to be. You could use small, medium, large, for example. But nonetheless, it seems at first glance like an unnecessary layer of abstraction and complexity. But I believe the reasons are two:
1. The main reason.. If you made all of your buttons, inputs, and select components use the same height in pixels, and later decided to change them, you'd have to go through and change each individually. Using this method instead, you just update your tokens.
2. Probably less of a motivator, but I find remembering the exact pixel values I use for everything a bit difficult. But remembering that I always use token size 8 for this and size 6 for that is not so hard.

## Challenges
I'd love to convert these brief "go figure it out" challenges into a more helpful guided tutorial on each when I have some more time. But for now, here are a few things you can do, starting with this repo as a base, to get familiar with Tamagui and Solito. These are roughly ordered by increasing complexity.

### Tamagui
1. Adjust the home screen's background color using inline styling with Tamagui shorthands.
2. Make your own Styled() version of the Tamagui button and add it to the @my/ui design system package. Use that button somewhere in the app.
3. Adjust size tokens so that H3 text is a bit smaller
4. Replace the typeface used throughout the app.
5. Add an additional color palette of your choosing to the list of available color themes.
6. Add a new subtheme called alt3 that strengthens an existing theme.
7. Adjust the app's breakpoints using media queries so that the design looks great on every device.

### Solito
1. Add a new page that you can navigate to via a link
2. Add a tab navigator for mobile.
3. Add nested stack -> tab -> stack navigators for mobile.
4. Ensure that the app still renders correctly on both web and mobile (i.e. mobile should have stack/tab navigators, but web should look like a flat website, not a mobile app).

## Feedback
Anything unclear to you, or that you think could be better? Feel free to submit an issue or PR! I'd love your feedback.

## Shoutouts and Links
- [Tamagui github](https://github.com/tamagui)
- [Tamagui docs](https://tamagui.dev/docs)
- [_nderscore](https://github.com/nderscore)
