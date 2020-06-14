import React from 'react'
import useDarkMode from 'use-dark-mode'
import styled from 'styled-components'
import { IoMdSunny, IoIosMoon } from 'react-icons/io'

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  transition: all 0.15s ease;
  overflow: hidden;
  border-radius: 0.25rem;
  svg {
    &:hover {
      color: #747fe0;
    }
  }
`

const SunIcon = styled(IoMdSunny)`
  color: #fff;
`

const MoonIcon = styled(IoIosMoon)`
  color: #333;
`

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)
  const a11yInfo = darkMode.value ? 'Use light theme' : 'Use dark theme'

  return (
    <ToggleButton
      aria-label={a11yInfo}
      title={a11yInfo}
      onClick={darkMode.toggle}
      type="button"
    >
      {darkMode.value ? <SunIcon /> : <MoonIcon />}
    </ToggleButton>
  )
}

export default DarkModeToggle
