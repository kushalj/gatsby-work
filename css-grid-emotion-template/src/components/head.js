import React from "react"
import { Helmet } from "react-helmet"

export default ({ siteTitle }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{siteTitle}</title>
    <link rel="canonical" href="http://mysite.com/example" />
    
    <link href="https://fonts.googleapis.com/css?family=Bowlby+One|Lato" rel="stylesheet" />
    
  </Helmet>
)