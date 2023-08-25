import { TamaguiProvider, TamaguiProviderProps } from '@my/ui'
import { useColorScheme } from 'react-native'

import config from '../tamagui.config'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme()
  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      defaultTheme={scheme === 'dark' ? 'dark' : 'light'}
      {...rest}
    >
      {children}
    </TamaguiProvider>
  )
}
