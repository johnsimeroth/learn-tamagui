import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { Stack, Slot } from 'expo-router'
import { useColorScheme } from 'react-native'
import { Layout } from '@my/ui'

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

  if (!loaded) {
    return null
  }
  return (
    <Provider>
      <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Layout>
          <Stack />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}
