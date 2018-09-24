import React from "react"
import { css } from "react-emotion"
import { injectGlobal } from "emotion"
import { StaticQuery, graphql } from "gatsby"
import { Head, Header } from "../components"
import { rhythm } from "../utils/typography"
import theme from '../../config/theme';

injectGlobal`
  body {
    background: ${theme.colors.bg};
    color: ${theme.colors.color};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    color: ${theme.colors.link};
    transition: color .5s;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    color: ${theme.colors.linkHover};
  }
  .gatsby-resp-image-wrapper {
    margin: 2.75rem 0;
  }
`

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    }

    render={data => (
        <div
          className={css`
            margin: 0 auto;
            max-width: 700px;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
          `}
        >
          <Head siteTitle={data.site.siteMetadata.title} />

          <Header siteTitle={data.site.siteMetadata.title}/>
          
          {children}

        </div>
    )}
  />
)

