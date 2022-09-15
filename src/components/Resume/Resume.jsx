import React from 'react'
import {Document, Page} from 'react-pdf'
import resumePDF from '../../Assets/Jordin Huang - SWE Resume (2).pdf'
const Contact = () => {
  return (
    <Document file={resumePDF}>
      <Page pageNumber={1}/>
    </Document>
  )
}

export default Contact