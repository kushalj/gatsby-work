import React from "react"
import styled, { css } from "react-emotion"
import { Link } from "gatsby"
import { TagBlock, TimeSlug } from "../components"

const CardWrapper = styled.article `
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  height: 40vh;
`

const CardOverlay = styled.span `
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40%;
  z-index: 2;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.68) 100%);
`

const CardCover = styled.span `
  display: block;
  background-image: url("https://images.unsplash.com/photo-1523307704902-3eabfe6f1402?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=8a2059210fd1d3439a810a7d5b7ae467");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1
`

const CardContent = styled.div `
  color: white;
  font-family: 'Lato';
  font-weight: bold;
  box-sizing: border-box;
  font-size: 10px;
  padding: 20px 20px 0;
  position: absolute;
  left: 0;
  bottom: 23px;
  z-index: 101;
  width: 100%;
`

const Card = ({ article }) => (
  <CardWrapper>
    <Link
      to="/"
    >
      <CardCover>
        <CardOverlay>
        </CardOverlay>
        <CardContent>
          <h5 className={css `
            color: white;
            font-weight: bold;
            font-style: normal;
            font-size: 2em;
            margin-bottom: 15px;
            line-height: 1.2;
            text-shadow: 0px 1px 3px rgba(0, 0, 0, .9)
          `}>Article Title
          </h5>
          <TagBlock>Tag</TagBlock>
          <TimeSlug />
        </CardContent>
      </CardCover>
    </Link>

  </CardWrapper>
)

export default Card