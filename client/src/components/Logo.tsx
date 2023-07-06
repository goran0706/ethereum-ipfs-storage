import { Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <Heading as='h1' size='lg' noOfLines={1}>
        FileStorage
      </Heading>
    </Link>
  )
}

export default Logo
