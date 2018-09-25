import React from "react"
import { Link } from "gatsby"
import styled, { css } from "react-emotion"
import theme from '../../config/theme'
// import { rhythm } from "../utils/typography"

const Header = styled.div `
  display: grid;
  grid-template-columns: 1fr;
  background: ${theme.colors.header_bg};
`

const HeaderContent = styled.div `
  margin: 3em 2em 2em;
  display: flex;
  justify-content: space-around;
`

const HeaderMenu = styled.div `
  display: grid;
  align-items: stretch;
  background: ${theme.colors.themeColor1};
`

const HeaderMenuItems = styled.div `
  display: flex;
  justify-content: center;
  font-size: 0.6em;
  font-weight: bold;
  padding: 8px 30px;
`

const MenuItem = styled.div `
  margin: 0 20px;
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
      <h3
        className={css `
          font-style: normal;
          color: ${theme.colors.header_color};

        `}
      >
        {siteTitle}
      </h3>
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