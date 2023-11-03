import { XStack, Theme, ColorModePreview, ThemeName } from '@my/ui'
import { useState } from 'react'

export function HomeScreen() {
  const [isDark, setIsDark] = useState<boolean>(true)
  const cmpProps = {
    isDark: isDark,
    setIsDark: setIsDark,
  };
  return (
    <Theme name={isDark ? 'dark' : 'light'}>
      <ColorModePreview {...cmpProps} />
    </Theme>
  )
}
