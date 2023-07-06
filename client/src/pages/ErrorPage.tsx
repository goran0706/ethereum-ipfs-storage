import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <VStack spacing={2} justifyContent='center' alignItems='center' h='100vh'>
      <Heading>Oops!</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? 'This page does not exist.'
          : 'An unexpected error occurred. Please check if you are connected to the supported network (Sepolia)'}
      </Text>
      <Button size='md' colorScheme='gray' as={Link} to='/'>
        Go back
      </Button>
    </VStack>
  )
}

export default ErrorPage
