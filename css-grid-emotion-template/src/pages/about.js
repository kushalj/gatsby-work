import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas adipisci corrupti nam iste quod laborum repellendus id accusamus vero, perferendis animi, veritatis sed nostrum omnis unde saepe qui dolorum eum?</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`