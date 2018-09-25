import React from "react"
import { Link, graphql } from "gatsby"
import styled, { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import { Layout } from "../components"


const Grid = styled.div `
  display: grid;
  grid-template-areas:
    "CardRow"
    "BreakingNews"
    "";

`

const IndexPageTitle = styled.h1 `
  display: inline-block;
  border-bottom: 1px solid;
`



export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Grid>
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
