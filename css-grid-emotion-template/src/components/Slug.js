import React from "react"
import styled from "react-emotion"
import theme from "../../config/theme"

const SlugBlock = styled.h4 `
  font-weight: bold;
  font-size: 0.8em;
  line-height: 1.4;
  font-weight: bold;
  border-left: 5px solid;
  border-color: ${theme.colors.themeColor1};
  padding-left: 10px;
  margin-bottom: 20px;
`

const Slug = ({ slugTitle }) => (
  <SlugBlock>
    {slugTitle}
  </SlugBlock>
)

export default Slug;
