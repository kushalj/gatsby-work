import React from "react"
import { Link } from "gatsby"
import styled, { css } from "react-emotion"
import theme from '../../config/theme'
import facepaint from 'facepaint'
// import { rhythm } from "../utils/typography"
// import { FaBars } from 'react-icons/fa'



const Header = styled.div `
  display: grid;
  grid-template-columns: 1fr;
  background: ${theme.colors.themeColor2};
`

const HeaderContent = styled.div `
  display: flex;
  justify-content: space-around;
  padding: 14px 0;
`

const MenuBar = styled.div `
  display: grid;
  align-items: stretch;
  background: ${theme.colors.accentColor1};
`

const MenuBarItems = styled.div `
  display: flex;
  justify-content: center;
  padding: 12px 30px 0;
`

const MenuItem = styled.h3 `
  position: relative;
  margin: 0 15px;
  font-size: 0.8em;
  line-height: 1.4;
  font-weight: bold;
  padding: 0 0 12px;
`

const MenuUnderLine = styled.div `
  a:before
    {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: #000;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: all 300ms ease;
  }

  a:hover:before
    {
    left: 0;
    width: 100%;
    opacity: 1;
  }
`

const Social = styled.div `

`

const Search = styled.div `

`

const mq = facepaint(
  theme.breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

const menuMediaStyles = css(
  mq({
    height: [ '0%', '0%', '100%', '100%']
  })
)


const activeLinkStyle = {
  color: '#999999',
}



export default ({ siteTitle, menuItems }) => (
  <Header>
  <HeaderContent>
    <Social>

    </Social>
  
    <Link to={`/`}>
      <div className={css `
      `}>
        <span
          className={css `
            margin: 0;
            font-style: normal;
            font-size: 3em;
            font-weight: bold;
            font-family: 'Bowlby One', cursive;
            color: ${theme.colors.themeColor1};

          `}
        >
          {siteTitle.split(' ')[0].toUpperCase()}
        </span>
        <span
        className={css `
          margin: 0;
          font-style: normal;
          font-size: 3em;
          font-weight: bold;
          font-family: 'Bowlby One', cursive;
          color: ${theme.colors.accentColor1};

        `}
      >
        {siteTitle.split(' ')[1].toUpperCase()}
        </span>
      </div>
    </Link>

      <Search>
  
      </Search>
    </HeaderContent>

    <MenuBar>
      <MenuBarItems>
        {/* Home "/" menu item */}
        <MenuItem>
        <MenuUnderLine>
            <Link 
              to="/"
              className={css `color: black;`}
              activeStyle={activeLinkStyle}
            >
              {'Home'.toUpperCase()}
            </Link>
          </MenuUnderLine>
        </MenuItem>  

        {/* All except "/" */}
        {[...menuItems]
          .filter(item => item.length > 1)
          .map((item, index) =>  
          <MenuItem>
            <MenuUnderLine>
              <Link
                to={`/${item}/`.toLowerCase()}
                className={css `color: black;`}
                activeStyle={activeLinkStyle}
              >
                {item.toUpperCase()}
              </Link>
            </MenuUnderLine>
          </MenuItem>
          )
        }
      </MenuBarItems>

    </MenuBar>
  </Header>
)