import React from "react"
import { Link } from "gatsby"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"

export default ({ siteTitle }) => (
  <div>
    <Link to={`/`}>
      <h3
        className={css `
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
          `}
      >
        {siteTitle}
      </h3>
    </Link>

    <Link
      to={`/about/`}
      className={css`
        float: right;
      `}
    >
      About
    </Link>
  </div>
)