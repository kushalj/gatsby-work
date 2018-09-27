import React from "react"
import styled, { css } from "react-emotion"
import { FaCalendar } from "react-icons/fa"
import { Link } from "gatsby"

const TimeSlugWrapper = styled.time `
  display: inline-block;
  float: right;
  position: absolute;
  right: 20px;
  bottom: 0;
  text-align: right;
  font-size: 10px;
  color: inherit;
  font-family: 'Roboto Condensed';
  font-weight: bold;
  text-transform: uppercase;
  vertical-align: middle
`

const TimeSlug = ({ tag }) => (
  <TimeSlugWrapper>
    <div className={css `
      padding-top: 1px;
      position: absolute;
      right: 45px;
    `}>
      <FaCalendar />
    </div>
    {"  "}Sep, 25th
  </TimeSlugWrapper>
)

export default TimeSlug