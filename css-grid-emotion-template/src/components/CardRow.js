import React from "react"
import styled, { css } from "react-emotion"
import { Card } from "../components"


const CardGrid = styled.div `
  display: grid;
  grid-template-columns: 1fr;

`


const CardRow = ({ articles }) => (
  <CardGrid>
    <Card></Card>
  </CardGrid>
)

export default CardRow