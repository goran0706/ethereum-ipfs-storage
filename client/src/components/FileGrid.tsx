import { Button, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { IFileInfo } from '../interfaces'

interface Props {
  list?: IFileInfo[]
  Component: React.ComponentType<IFileInfo>
}

const FileGrid = ({ list = [], Component }: Props) => {
  if (list.length === 0) {
    return (
      <VStack mt={32}>
        <Text>The list is empty. Start by uploading new files.</Text>
        <Button as={Link} to='/upload' colorScheme='gray'>
          Go to Upload
        </Button>
      </VStack>
    )
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 }} spacing={6} p={2}>
      {list?.map((item, index) => (
        <Component key={index} {...item} />
      ))}
    </SimpleGrid>
  )
}

export default FileGrid
