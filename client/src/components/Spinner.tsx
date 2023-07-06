import { Box, Spinner as ChakraSpinner } from '@chakra-ui/react'

const Spinner = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' h='calc(100vh - 50vh)'>
      <ChakraSpinner />
    </Box>
  )
}

export default Spinner
