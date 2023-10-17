import { H1, H2, H3, H4, H5, SizableText, YStack, Pre, NavLink } from '@my/ui'
// import { Lesson0MD } from './data/Lesson0MD';
export function Lesson0() {
  return (
    <YStack>
      <H1>Lesson 0</H1>
      <H2>Setup, Folder Structure, and Resources</H2>
      <SizableText>You're on lesson 0: setup. By the end of this lesson you should:</SizableText>
      <SizableText>1. Have working web, ios, and android apps that render hello world,</SizableText>
      <SizableText>
        2. Understand the high level folder structure of a tamagui/solito/expo monorepo, and
      </SizableText>
      <SizableText>3. Know where to look for more information and details.</SizableText>
      <H2>Fine Print</H2>
      <SizableText>Before we get to the steps below, some caveats:</SizableText>
      <SizableText>
        1. This guide assumes you're familiar with Typescript, React, and React Native.
      </SizableText>
      <SizableText>
        2. This guide assumes you have node, expo, yarn, git, and possibly other tools that I take
        for granted already installed.
      </SizableText>
      <H2>Install</H2>
      <SizableText>
        Alright, let's jump in! Navigate to the folder you want to house your tamagui project in.
        Then run
      </SizableText>
      <Pre>{`npm create tamagui@latest`}</Pre>
      <SizableText>
        Select Next/Expo/Solito for the project template. Follow any other command prompts. This may
        take a few minutes to run while it sets up a functioning project. Once complete, `cd` into
        the directory that was created by the install command. e.g. `cd myTamaguiApp`.
      </SizableText>
      <SizableText>Run 'yarn' to install dependencies.</SizableText>
      <SizableText>
        Run `yarn web` and navigate to the localhost port listed in the terminal output to see the
        project on web.
      </SizableText>
      <SizableText>
        Run `yarn native` in *a separate terminal* and follow command line prompts to see the
        project in expo.
      </SizableText>
      <SizableText>
        Both of these commands result in dev builds that are faster to build and enable hot reloads,
        but don't get optimized by the tamagui compiler. We'll get to that later.
      </SizableText>
      <SizableText>
        Now that you've got a working project, let's take a look at the repo structure.
      </SizableText>
      <H2>Folder Layout</H2>
      <SizableText>
        At the top level, you've got several folders and a little under a billion config files
        (hooray, we love javascript!). I want you to focus on just two folders at this level for
        now: `packages/` and `apps/`. The `packages` folder is for code that's shared between both
        web and native, while the `apps/` folder is for platform specific code.
      </SizableText>
      <H3>packages/</H3>
      <SizableText>
        You'll spend most of your time in the pacakges directory. Inside packages you have
        `packages/app` and `packages/ui`. `packages/app` should contain all of your app's business
        logic, organized by feature. `packages/ui`, on the other hand, is where very low-level/basic
        reusable UI components go to get optimized by the compiler. If you're unsure where a
        component should go, the rule of thumb is: if you're using `styled()`, it goes in
        `packages/ui`, if you're not using styled and instead you're making a more complex stateful
        component (e.g. a home feed, a nav bar, etc) it goes in `packages/app`. Where would you put
        it in `packages/app`? Let's cover that when it comes up as we start adding features, so we
        can keep this high level for now.
      </SizableText>
      <H3>apps/</H3>
      <SizableText>
        The `apps/` directory, as mentioned above, is for platform specific code. So if you expand
        it you'll see an `apps/expo` folder, and an `apps/next` folder. You'll usually only need to
        interact with these folders for a few reasons. Some (but not all) example reasons are listed
        below:
      </SizableText>
      <SizableText>
        1. Adding navigation between screens in your app, which should always be platform-specific.
      </SizableText>
      <SizableText>
        2. Installing native-specific dependencies (which you'll do in the expo folder).
      </SizableText>
      <SizableText>
        3. Adjusting platform-specific configuration files (e.g. adding or configuring next
        plugins).
      </SizableText>
      <SizableText>
        There are other cases, but hopefully the pattern is somewhat clear based on these three.
      </SizableText>
      <H3>Don't Sweat</H3>
      <SizableText>
        If you're feeling like you're already swimming in folders and questions, don't worry. We're
        going take it step by step, and learn as we go.
      </SizableText>
      <H2>Hello World!</H2>
      <SizableText>
        Let's get to the exciting stuff: making changes in code that you can see on screen! Since
        this is code that we will want to see on both native and web, we're going to navigate to
        the....
      </SizableText>
      <SizableText>
        ...yes, the packages directory. Head to `packages/app/features/home/screen.tsx`. Replace the
        entire content of that file with:
      </SizableText>
      <Pre>
        {`
        import { XStack, H1 } from '@my/ui'

        export function HomeScreen() {
          return (
            <XStack>
              <H1>Hello World!</H1>
            </XStack>
          )
        }
        `}
      </Pre>
      <SizableText>
        Now refresh your web page and confirm that you're seeing the programmer's greeting. Do the
        same on your expo app. Once that's working, treat yourself to a git commit and head to the
        next lesson, or the optional (but highly recommended) cleanup section below!
      </SizableText>
      ## Clean Up (optional)
      <SizableText>
        Since we've been chatting about folder structure, let's remove some files and folders that
        we won't be using to help make things a little easier to understand and navigate. You don't
        have to do this if you don't want to, but it will make your code a lot cleaner and prevent
        errors related to stuff you're not actually working on. If deleting stuff makes you feel
        anxious, just make a commit before you proceed so that you can always return to this point
        and see how the starter repo handles toast or solito slugs, for example. For our project,
        you can safely delete:
      </SizableText>
      <Pre>
        {`
        apps/next/app
        apps/next/pages/user
        apps/expo/app/user
        packages/app/features/user
        packages/app/provider/ToastViewport.tsx
        packages/app/provider/ToastViewport.web.tsx
        packages/ui/src/CustomToast.tsx
        packages/ui/src/NativeToast.tsx
        packages/ui/src/MyComponent.tsx
        `}
      </Pre>
      <SizableText>
        Now when you try to run the app, it will fail (because there are references in the code to
        those files and directories) so use your debugging skills to locate all of those references
        and remove them. While you're at it, if you're using a syntax highlighting feature that
        shows when imports and other variables go unusued, clear those out too.
      </SizableText>
      <SizableText>
        Once the app is rendering without errors again on both web and mobile, you're ready to
        commit changes and proceed!
      </SizableText>
      ## Additional Resources
      <SizableText>
        I can't stress enough that this tutorial is just a walkthrough on how to use amazing tools
        that other much smarter people than me have built. Those smart people have also written
        extensive documentation on these tools, and know them far better than I do. So if at any
        point you feel stuck or like my instructions are unclear, these are the places you should
        look for more detailed docs or community input:
      </SizableText>
      <NavLink href='https://tamagui.dev' linkText='Tamagui Docs'></NavLink>
      <NavLink href='https://discord.gg/4qh6tdcVDa' linkText='Tamagui Discord'></NavLink>
      <NavLink href='https://solito.dev' linkText='Solito Docs'></NavLink>
      <NavLink
        href='https://discord.gg/JtvAVzNpDk'
        linkText='NandoStack (indluding Solito) Discord'
      ></NavLink>
      <NavLink href='https://nextjs.org' linkText='Next Docs'></NavLink>
      <NavLink href='https://docs.expo.dev' linkText='Expo Docs'></NavLink>
      <NavLink href='https://reactnative.dev' linkText='React Native Docs'></NavLink>
    </YStack>
  )
}
