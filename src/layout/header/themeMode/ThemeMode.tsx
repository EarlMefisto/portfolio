import { Icon } from '../../../shared/components/Icon'
import { ChangeThemeMode, DayModeButton } from './ThemeMode.styles'

export const ThemeMode = () => {
  return (
    <ChangeThemeMode>
      <Icon iconId={'contrast'} width={'30'} height={'30'} viewBox={'0 0 30 30'} />
      <DayModeButton />
    </ChangeThemeMode>
  )
}
