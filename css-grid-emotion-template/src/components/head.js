import React from "react"
import { Helmet } from "react-helmet"

export default ({ siteTitle }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{siteTitle}</title>
    <link rel="canonical" href="http://mysite.com/example" />
    
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    
  </Helmet>
)