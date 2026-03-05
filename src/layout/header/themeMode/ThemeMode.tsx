import useLocalStorage from 'use-local-storage'
import { Icon } from '../../../shared/components/Icon'
import { ChangeThemeMode, ThemeModeButton } from './ThemeMode.styles'
import { useEffect } from 'react'

export const ThemeMode = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ChangeThemeMode>
      <Icon iconId={'contrast'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
      <ThemeModeButton onClick={toggleTheme} />
    </ChangeThemeMode>
  )
}
