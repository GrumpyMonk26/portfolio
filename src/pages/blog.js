import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const Blog = ({
  data:{
    allStrapiBlogs:{nodes:blogs},
  },
}) => {
  return (
  <Layout>
    <SEO title="Blog" description="blog Jason Evans WebDev" />
    <section className="blog-page">
      <Blogs blogs={blogs} title="Articles" />
    </section>
  </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
