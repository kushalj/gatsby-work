import React from "react"
import styled, { css } from "react-emotion"
import { Link } from "gatsby"
import theme from "../../config/theme"


const TagWrapper = styled.h4 `
  display: inline-block;
  background: ${theme.colors.accentColor1};
  float: left;
  box-sizing: border-box;
  margin: 0;
  padding: 3px 6px;
  border: 0;
  font-size: 100%;
  font-weight: bold;
  vertical-align: baseline;
  width: auto;
  border-radius: 3px;
  justify-content: center;
`

const TagBlock = ({ tag }) => (
  <Link 
    to="/"
    className={css `color: ${theme.colors.themeColor2}`}
  >
    <TagWrapper>
      {'Tag'.toUpperCase()}
    </TagWrapper>
  </Link>
)

export default TagBlock