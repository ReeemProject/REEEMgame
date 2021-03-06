import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'
import { Container, Icon, Menu, TextContainer } from './Languages.style'
import Grow from '@material-ui/core/Grow'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { Public, ExpandLess, ExpandMore } from '@material-ui/icons'

export const Languages = () => {
  const [open, setOpen] = useState(false)
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const changeLanguage = (e, language) => {
    e.preventDefault()
    if (currentLanguage !== language) {
      switch (language) {
        case 'en':
          i18n.changeLanguage('en')
          break
        case 'dk':
          i18n.changeLanguage('dk')
          break
        case 'fo':
          i18n.changeLanguage('fo')
          break
        default:
          break
      }
    }
    closeMenu(e)
  }
  var lanugageTitle = ''
  switch (currentLanguage) {
    case 'en':
      lanugageTitle = 'English'
      break
    case 'dk':
      lanugageTitle = 'Dansk'
      break
    case 'fo':
      lanugageTitle = 'Føroyskt'
      break
    default:
      break
  }

  function toggleMenu() {
    setOpen(!open)
  }

  function closeMenu(event) {
    if (anchorEl.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }
  const anchorEl = React.useRef(null)
  const style = {
    textTransform: 'none',
    display: 'flex',
    color: 'white',
    backgroundColor: 'transparent',
    marginTop: '0',
  }
  return (
    <Container>
      <Button
        buttonRef={anchorEl}
        aria-owns={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={toggleMenu}
        style={style}
      >
        <Icon>
          <Public />
        </Icon>
        {lanugageTitle}
        <Icon>
          {open && <ExpandLess />}
          {!open && <ExpandMore />}
        </Icon>
      </Button>
      <Popper open={open} anchorEl={anchorEl.current} transition>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Menu>
              <ClickAwayListener onClickAway={closeMenu}>
                <MenuList>
                  {currentLanguage !== 'en' && (
                    <MenuItem
                      key={'enMenuItem'}
                      onClick={e => changeLanguage(e, 'en')}
                    >
                      <TextContainer>English</TextContainer>
                    </MenuItem>
                  )}
                  {currentLanguage !== 'fo' && (
                    <MenuItem
                      key={'foMenuItem'}
                      onClick={e => changeLanguage(e, 'fo')}
                    >
                      <TextContainer>Føroyskt</TextContainer>
                    </MenuItem>
                  )}
                  {currentLanguage !== 'dk' && (
                    <MenuItem
                      key={'dkMenuItem'}
                      onClick={e => changeLanguage(e, 'dk')}
                    >
                      <TextContainer>Dansk</TextContainer>
                    </MenuItem>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Menu>
          </Grow>
        )}
      </Popper>
    </Container>
  )
}
