import React from 'react'
import styled from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { FiMoon as Moon, FiSun as Sun } from 'react-icons/fi'

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  overflow: hidden;
  svg {
    color: #747fe0;
  }
`

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)
  const a11yInfo = darkMode.value ? 'Toggle light mode' : 'Toggle dark mode'

  return (
    <ToggleButton
      aria-label={a11yInfo}
      title={a11yInfo}
      onClick={darkMode.toggle}
    >
      {darkMode.value ? <Sun /> : <Moon />}
    </ToggleButton>
  )
}
export default DarkModeToggle
