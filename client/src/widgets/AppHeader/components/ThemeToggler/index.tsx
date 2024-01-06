import cn from 'classnames'
import { useTheme } from 'styled-components'
import { Icon, TAppTheme } from '@/shared'
import * as s from './style'

export type TToggleTheme = TAppTheme | 'system'

export default function ThemeToggler() {
  
  const { label, setTheme } = useTheme()

  return (
    <s.ThemeToggler>
      <s.ThemeTogglerItem
        onClick={() => setTheme('light')}
        className={cn({ active: label === 'light' })}
      >
        <Icon
          name="sun"
          size={20}
        />
      </s.ThemeTogglerItem>
      <s.ThemeTogglerItem
        onClick={() => setTheme('system')}
        className={cn({ active: label === 'system' })}
      >
        <Icon
          name="monitor"
          size={20}
        />
      </s.ThemeTogglerItem>
      <s.ThemeTogglerItem
        onClick={() => setTheme('dark')}
        className={cn({ active: label === 'dark' })}
      >
        <Icon
          name="moon"
          size={20}
        />
      </s.ThemeTogglerItem>
    </s.ThemeToggler>
  )
}
