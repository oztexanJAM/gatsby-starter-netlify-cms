import React from 'react'
import { PolicyTemplate } from '../../templates/policies-post'

const PolicyPreview = ({ entry, widgetFor }) => (
  <PolicyTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default PolicyPreview
