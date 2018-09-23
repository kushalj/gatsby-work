import React from "react"
import styled, { css } from "react-emotion"
import { injectGlobal } from "emotion"
import { StaticQuery, Link, graphql } from "gatsby"
import Head from "./head"

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

const SiteTitle = styled.h3 `
  color: black;
  margin-bottom: ${rhythm(2)};
  display: inline-block;
  font-style: normal;
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
            // display: grid;
            // grid-template-columns: 400px 100px;
            // grid-template-rows: 1fr;
            // grid-gap: 10px;
            // grid-template-areas:
            //   "Header"
            //   "Content";
            // margin: 0;
          `}
        >
          <Head siteTitle={data.site.siteMetadata.title} />
          <Link to={`/`}>
            <SiteTitle>
              {data.site.siteMetadata.title}
            </SiteTitle>
          </Link>
          
          <Link
              to={`/about/`}
              className={css`
                float: right;
            `}
          >
            About
          </Link>
          
          <div>
            {children}
          </div>

        </div>
    )}
  />
)