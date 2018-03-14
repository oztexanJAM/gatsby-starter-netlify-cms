import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

export const PolicyTemplate = ({
                                   content,
                                   contentComponent,
                                   description,
                                   title,
                                   helmet,
                                 }) => {
  const PolicyContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              Policy : {title}
            </h1>
            <p>{description}</p>
            <PolicyContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default props => {
  const { markdownRemark: policy } = props.data

  return (
    <PolicyTemplate
      content={policy.html}
      contentComponent={HTMLContent}
      description={policy.frontmatter.description}
      helmet={<Helmet title={`Policy | ${policy.frontmatter.title}`} />}
      title={policy.frontmatter.title}
    />
  )
}

export const pageQuery = graphql`
  query PolicyByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
