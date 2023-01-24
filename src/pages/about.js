import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'

const About = ({data:{allContentfulGatsby:{nodes:recipes}}}) => {
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>Taxidermy forage glossier letterpress heirloom before they sold but you probably haven't heard of them banh mi biodiesl chia</p>
            <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro</p>
            <Link to="/contact" className='btn'>contact</Link>
          </article>
          <StaticImage src='../assets/images/about.jpeg' alt="salts"
          className='about-img'
          placeholder='blured'
          />
        </section>
        <section className='featured-recipes'>
          <h5>Look at this Awesomsauce!</h5>
          <RecipesList recipes={recipes}/>  
        </section>
      </main>
    </Layout>
  )
}


export const query = graphql`
  query {
    allContentfulGatsby(sort: {title: ASC}, filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
