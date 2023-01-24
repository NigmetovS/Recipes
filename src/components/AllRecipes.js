import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    allContentfulGatsby(sort: {title: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
    const data = useStaticQuery(query);
    const recipes = data.allContentfulGatsby.nodes
  return (
    <section className='recipes-containers'>
      <TagsList recipes={recipes}/>
      <RecipesList recipes={recipes}/>
    </section>
  )
}

export default AllRecipes
