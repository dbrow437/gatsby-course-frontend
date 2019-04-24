import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

const Logo () => (
  <StaticQuery 
    query={graphql`
    {
      allWordpressWpLogo {
        edges {
          node {
            url {
              source_url
            }
          }
        }
      }
    }  
    `} render={props => (
      <div>
       <img src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="logo" />
      </div>
    )}
  
  
  
  />
)

export default Logo