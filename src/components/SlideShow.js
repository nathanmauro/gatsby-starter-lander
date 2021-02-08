import { useStaticQuery, graphql } from 'gatsby'
import {useState} from "react";
import React from 'react';
import Img from "gatsby-image";

function SlideShow() {
  const [index, setIndex] = useState(0)
  // filter: { relativeDirectory: { eq: "slides" } }
  // childImageSharp {
  //   fluid(maxWidth: 600) {
  //   ...GatsbyImageSharpFluid_withWebp_tracedSVG
  //   }
  // }
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]
  return (
    <div>
      <div>
        <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, ' ').substring(2)}
        />
      </div>
      <div className="container mx-auto flex flex-row justify-around">
        <button onClick={() => handlePrevious()}>&#171; Previous</button>
        <button onClick={() => handleNext()}>Next &#187;</button>
      </div>
    </div>
  )
}

export default SlideShow;
