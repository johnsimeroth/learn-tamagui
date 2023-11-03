import { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Drawer } from 'expo-router/drawer'
import { useColorScheme } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation';

import { Provider } from 'app/provider'
import { Theme } from '@my/ui'

export default function HomeLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterItalic: require('@tamagui/font-inter/otf/Inter-Italic.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    InterBlack: require('@tamagui/font-inter/otf/Inter-Black.otf'),
    // InterExtraBold: require('@tamagui/font-inter/otf/Inter-ExtraBold.otf'),
    // InterLight: require('@tamagui/font-inter/otf/Inter-Light.otf'),
  })
  const scheme = useColorScheme()
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
  }, [])

  if (!loaded) {
    return null
  }
  return (
    <Provider>
      <Theme name='dark'>
        <ThemeProvider value={DarkTheme}>
          <Drawer>
              <Drawer.Screen
                name='index'
                options={{ drawerLabel: 'Home', title: 'Components Demo' }}
              />
              <Drawer.Screen
                name='lesson/0'
                options={{ drawerLabel: 'Lesson 0', title: 'Setup' }}
              />
              <Drawer.Screen
                name='lesson/1'
                options={{ drawerLabel: 'Lesson 1', title: 'Styles and Tokens' }}
              />
              <Drawer.Screen
                name='lesson/2'
                options={{ drawerLabel: 'Lesson 2', title: 'Using styled()' }}
              />
          </Drawer>
        </ThemeProvider>
      </Theme>
    </Provider>
  )
}
