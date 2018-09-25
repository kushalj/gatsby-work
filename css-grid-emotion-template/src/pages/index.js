import React from "react"
import { Link, graphql } from "gatsby"
import styled, { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import { Layout } from "../components"
import theme from "../../config/theme"


const Grid = styled.div `
  display: grid;
  grid-template-areas:
    "Slug"
    "Cards"
    "News"
    "BreakingNews"
    "";
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-left: 5%;
  padding-right: 5%;
`

const IndexPageTitle = styled.h1 `
  margin-top: 20px;
  display: inline-block;
  border-bottom: 1px solid;
`

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

const LatestSlug = styled.div `

`

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Grid>
        <SlugBlock>
          <LatestSlug>
            LATEST 
          </LatestSlug>
        </SlugBlock>

        <IndexPageTitle>
          Amazing Index Page Title!
        </IndexPageTitle>

        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <h3
                className={css `
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  className={css `
                    color: #bbb;
                  `}
                >
                  - {node.frontmatter.date}
                </span>
              </h3>
            </Link>
            
            <p>{node.excerpt}</p>
          </div>
        ))}

      </Grid>
    </Layout>
)
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
