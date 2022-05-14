import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigation = useNavigate();
  navigation('/')
  return (
    <div>
      <h1>Footer</h1>
      <a href="/"> Go Home </a>
      <Link to="/about"><Button> Go About </Button></Link>
    </div>
  )
}
export default Footer