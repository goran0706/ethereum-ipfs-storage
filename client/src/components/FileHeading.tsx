import { Heading } from '@chakra-ui/react'

const FileHeading = ({ heading }: { heading: string }) => {
  return (
    <Heading as='h1' mb={8} fontSize='4xl'>
      {heading}
    </Heading>
  )
}

export default FileHeading
