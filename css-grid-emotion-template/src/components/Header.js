import React from "react"
import { Link } from "gatsby"
import styled, { css } from "react-emotion"
import theme from '../../config/theme'
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
  padding: 30px 0;
`

const HeaderMenu = styled.div `
  display: grid;
  align-items: stretch;
  background: ${theme.colors.accentColor1};
  border-color: ${theme.colors.themeColor2};
  border-bottom: 1px solid;
`

const HeaderMenuItems = styled.div `
  display: flex;
  justify-content: center;
  padding: 9px 30px;
`

const MenuItem = styled.h3 `
  margin: 0 15px;
  font-size: 0.8em;
  line-height: 1.4;
  font-weight: bold;
`

const Social = styled.div `

`

const Search = styled.div `

`



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

    <HeaderMenu>
      <HeaderMenuItems>
        {/* Home "/" menu item */}
        <MenuItem>
          <Link 
            to="/"
            className={css `color: black;`}
            activeStyle={{
              color: '#888888'
            }}
          >
            {'Home'.toUpperCase()}
          </Link>
        </MenuItem>  

        {/* All except "/" */}
        {[...menuItems]
          .filter(item => item.length > 1)
          .map((item, index) =>  
          <MenuItem>
            <Link
              to={`/${item}/`.toLowerCase()}
              className={css `color: black;`}
              activeStyle={{
                color: '#888888'
              }}
            >
              {item.toUpperCase()}
            </Link>
          </MenuItem>
          )
        }
      </HeaderMenuItems>

    </HeaderMenu>
  </Header>
)