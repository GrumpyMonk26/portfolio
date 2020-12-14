import React from 'react'
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"



const TechnologyStack = () => {

    const data = useStaticQuery(graphql`
        query Images {
            images: allFile(filter: {relativeDirectory: {eq: "Output"}}) {
                nodes {
                  id
                  childImageSharp {
                    fixed (width: 100){
                        ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
    `)
    console.log(data);

    return (

        
            <div className="image-stack">
                <div className="image-wrapper">
                        {data.images.nodes.map(image => (
                        <Image key={image.id} fixed={image.childImageSharp.fixed}/>
                        ))} 
                </div> 
            </div>
       

        // <div className="image-wrapper">
        //     <div className="image-container">
        //             {data.images.nodes.map(image => (
        //             <Image key={image.id} fixed={image.childImageSharp.fixed}/>
        //             ))} 
        //     </div>        
        // </div>
    )
}

export default TechnologyStack 
