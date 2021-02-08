// //src/image.js
//
// import {graphql, StaticQuery} from "gatsby";
//
// const Image = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholder: file(relativePath: { eq: "gatsby-logo.png" }) {
//           childImageSharp {
//             fluid(maxWidth: 300) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Img fluid={data.placeholder.childImageSharp.fluid} />}
//   />
// )
