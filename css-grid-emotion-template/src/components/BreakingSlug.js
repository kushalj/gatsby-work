import React from "react"
import styled, { css } from "react-emotion"
import theme from "../../config/theme"

const SlugWrapper = styled.div `
  display: grid;
  grid-template-columns: 150px 3fr;
  background: ${theme.colors.themeColor2}; 
  margin: 0;
`
const BreakingBlock = styled.h4 `
  display: block;
  font-size: 0.7em;
  line-height: 1.4;
  font-weight: bold;
  color: ${theme.colors.themeColor1};
  background: ${theme.colors.themeColor2}; 
  padding: 8px 0;
  margin: 0 auto;
  margin-bottom: px;
  border-radius: 2px;
  width
`

const NewsBlock = styled.h4 `
  font-weight: normal;
  font-size: 0.7em;
  line-height: 1.4;
  color: ${theme.colors.themeColor2};
  background: ${theme.colors.accentColor1}; 
  padding: 8px 20px;
  margin-bottom: 0px;
`

const BreakingSlug = ({ slugTitle, article }) => (
  <SlugWrapper>
    <BreakingBlock>
      <div className={css `
        margin: 0 auto;
      `}>
        {slugTitle.toUpperCase()}
      </div>

    </BreakingBlock>
    <NewsBlock>
      {article}
    </NewsBlock>
  </SlugWrapper>
)

export default BreakingSlug;
