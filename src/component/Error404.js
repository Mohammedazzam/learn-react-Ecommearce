import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ErrorNotFound = () => {
  return (
    <div>
        <h1>Page Not Found 404</h1>
        <Link to="/"><Button> Go HOME NEW </Button></Link>

    </div>
  )
}
export default ErrorNotFound